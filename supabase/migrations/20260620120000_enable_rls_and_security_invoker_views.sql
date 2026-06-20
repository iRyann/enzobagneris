-- Security hardening for the Strapi-managed public schema.
--
-- Context: Strapi owns every table in `public` and connects to Postgres as the
-- `postgres` role (the table owner), so it bypasses RLS. The public website only
-- ever reads content through the five `v_*` views using the Supabase anon key.
--
-- Problems fixed (Supabase database linter):
--   * rls_disabled_in_public      -> RLS was off on every public table, and the
--                                    `anon`/`authenticated` API roles held full
--                                    SELECT/INSERT/UPDATE/DELETE grants.
--   * sensitive_columns_exposed   -> admin_users.password, up_users.password and
--                                    strapi_sessions.session_id were readable.
--   * security_definer_view       -> the v_* views ran as their owner instead of
--                                    the querying role, ignoring RLS.
--
-- Strategy: lock everything down (RLS on, revoke API grants), then re-open the
-- minimum needed for the public site (read-only access to published content via
-- the views, which now run as the invoking role).

-- ---------------------------------------------------------------------------
-- 1. Enable RLS on every table and revoke all API-role privileges.
--    With RLS enabled and no policy, anon/authenticated are denied by default.
--    The `postgres` owner (used by Strapi) and `service_role` are unaffected.
-- ---------------------------------------------------------------------------
do $$
declare
  t record;
begin
  for t in
    select c.relname
    from pg_class c
    join pg_namespace n on n.oid = c.relnamespace
    where n.nspname = 'public' and c.relkind = 'r'
  loop
    execute format('alter table public.%I enable row level security;', t.relname);
    execute format('revoke all on public.%I from anon, authenticated;', t.relname);
  end loop;
end $$;

-- ---------------------------------------------------------------------------
-- 2. Make the public-facing views run as the querying role (anon), so RLS on
--    the underlying tables is enforced. Re-grant read-only access on the views.
-- ---------------------------------------------------------------------------
alter view public.v_blog_posts    set (security_invoker = on);
alter view public.v_projects      set (security_invoker = on);
alter view public.v_service_items set (security_invoker = on);
alter view public.v_partners      set (security_invoker = on);
alter view public.v_activities    set (security_invoker = on);

revoke all on
  public.v_blog_posts, public.v_projects, public.v_service_items,
  public.v_partners, public.v_activities
from anon, authenticated;

grant select on
  public.v_blog_posts, public.v_projects, public.v_service_items,
  public.v_partners, public.v_activities
to anon, authenticated;

-- ---------------------------------------------------------------------------
-- 3. Read-only access to PUBLISHED rows of the content tables backing the views.
--    Unpublished drafts (published_at IS NULL) stay private.
-- ---------------------------------------------------------------------------
grant select on
  public.blog_posts, public.projects, public.service_items,
  public.partners, public.activities
to anon, authenticated;

drop policy if exists "Public read published blog_posts" on public.blog_posts;
create policy "Public read published blog_posts" on public.blog_posts
  for select to anon, authenticated using (published_at is not null);

drop policy if exists "Public read published projects" on public.projects;
create policy "Public read published projects" on public.projects
  for select to anon, authenticated using (published_at is not null);

drop policy if exists "Public read published service_items" on public.service_items;
create policy "Public read published service_items" on public.service_items
  for select to anon, authenticated using (published_at is not null);

drop policy if exists "Public read published partners" on public.partners;
create policy "Public read published partners" on public.partners
  for select to anon, authenticated using (published_at is not null);

drop policy if exists "Public read published activities" on public.activities;
create policy "Public read published activities" on public.activities
  for select to anon, authenticated using (published_at is not null);

-- ---------------------------------------------------------------------------
-- 4. Read-only access to the component/link tables joined by the views.
--    These only hold image URLs/alt text and principle strings, all of which
--    are already public via the views.
-- ---------------------------------------------------------------------------
grant select on
  public.blog_posts_cmps, public.projects_cmps, public.service_items_cmps,
  public.partners_cmps, public.activities_cmps,
  public.components_shared_image_assets, public.components_shared_principles
to anon, authenticated;

drop policy if exists "Public read blog_posts_cmps" on public.blog_posts_cmps;
create policy "Public read blog_posts_cmps" on public.blog_posts_cmps
  for select to anon, authenticated using (true);

drop policy if exists "Public read projects_cmps" on public.projects_cmps;
create policy "Public read projects_cmps" on public.projects_cmps
  for select to anon, authenticated using (true);

drop policy if exists "Public read service_items_cmps" on public.service_items_cmps;
create policy "Public read service_items_cmps" on public.service_items_cmps
  for select to anon, authenticated using (true);

drop policy if exists "Public read partners_cmps" on public.partners_cmps;
create policy "Public read partners_cmps" on public.partners_cmps
  for select to anon, authenticated using (true);

drop policy if exists "Public read activities_cmps" on public.activities_cmps;
create policy "Public read activities_cmps" on public.activities_cmps
  for select to anon, authenticated using (true);

drop policy if exists "Public read shared_image_assets" on public.components_shared_image_assets;
create policy "Public read shared_image_assets" on public.components_shared_image_assets
  for select to anon, authenticated using (true);

drop policy if exists "Public read shared_principles" on public.components_shared_principles;
create policy "Public read shared_principles" on public.components_shared_principles
  for select to anon, authenticated using (true);
