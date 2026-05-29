import { createClient } from "@supabase/supabase-js";
import type { BlogPost, Project, ServiceItem, Partner } from "@/types";
import type { Activity } from "@/types/activity.types";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as
  | string
  | undefined;

export const isSupabaseConfigured = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

export const supabase = isSupabaseConfigured
  ? createClient(SUPABASE_URL!, SUPABASE_ANON_KEY!)
  : null;

// ── Blog Posts ────────────────────────────────────────────────────────────────

export async function fetchBlogPostsFromSupabase(): Promise<BlogPost[]> {
  const { data, error } = await supabase!
    .from("v_blog_posts")
    .select("*")
    .order('"publishedAt"', { ascending: false });

  if (error) throw new Error(`Supabase v_blog_posts: ${error.message}`);
  return (data ?? []).map(mapBlogPost);
}

export async function fetchBlogPostBySlugFromSupabase(
  slug: string,
): Promise<BlogPost | null> {
  const { data, error } = await supabase!
    .from("v_blog_posts")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error)
    throw new Error(`Supabase v_blog_posts slug=${slug}: ${error.message}`);
  return data ? mapBlogPost(data) : null;
}

export async function fetchFeaturedBlogPostsFromSupabase(): Promise<
  BlogPost[]
> {
  const { data, error } = await supabase!
    .from("v_blog_posts")
    .select("*")
    .eq("featured", true)
    .order('"publishedAt"', { ascending: false });

  if (error)
    throw new Error(`Supabase v_blog_posts featured: ${error.message}`);
  return (data ?? []).map(mapBlogPost);
}

// ── Projects ──────────────────────────────────────────────────────────────────

export async function fetchProjectsFromSupabase(): Promise<Project[]> {
  const { data, error } = await supabase!.from("v_projects").select("*");
  if (error) throw new Error(`Supabase v_projects: ${error.message}`);
  return (data ?? []).map(mapProject);
}

// ── Service Items ─────────────────────────────────────────────────────────────

export async function fetchServiceItemsFromSupabase(): Promise<ServiceItem[]> {
  const { data, error } = await supabase!
    .from("v_service_items")
    .select("*")
    .order('"sortOrder"', { ascending: true });

  if (error) throw new Error(`Supabase v_service_items: ${error.message}`);
  return (data ?? []).map(mapServiceItem);
}

// ── Partners ──────────────────────────────────────────────────────────────────

export async function fetchPartnersFromSupabase(): Promise<Partner[]> {
  const { data, error } = await supabase!
    .from("v_partners")
    .select("*")
    .order('"sortOrder"', { ascending: true });

  if (error) throw new Error(`Supabase v_partners: ${error.message}`);
  return (data ?? []).map(mapPartner);
}

// ── Activities ────────────────────────────────────────────────────────────────

export async function fetchActivitiesFromSupabase(): Promise<Activity[]> {
  const { data, error } = await supabase!
    .from("v_activities")
    .select("*")
    .order('"sortOrder"', { ascending: true });

  if (error) throw new Error(`Supabase v_activities: ${error.message}`);
  return (data ?? []).map(mapActivity);
}

// ── Mappers ───────────────────────────────────────────────────────────────────

function mapBlogPost(row: any): BlogPost {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    subtitle: row.subtitle ?? "",
    excerpt: row.excerpt ?? "",
    content: row.content ?? "",
    category: row.category,
    tags: row.tags ?? [],
    publishedAt: row.publishedAt ?? "",
    coverImage: row.coverImage ?? { url: "", alt: "" },
    gallery: row.gallery ?? [],
    featured: row.featured ?? false,
  };
}

function mapProject(row: any): Project {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    subtitle: row.subtitle ?? "",
    target: row.target ?? "",
    description: row.description ?? "",
    coverImage: row.coverImage ?? { url: "", alt: "" },
    gallery: row.gallery ?? [],
    principlesEnvironmental: (row.principlesEnvironmental ?? []).sort(
      (a: any, b: any) => (a.order ?? 0) - (b.order ?? 0),
    ),
    principlesPedagogical: (row.principlesPedagogical ?? []).sort(
      (a: any, b: any) => (a.order ?? 0) - (b.order ?? 0),
    ),
    icon: row.icon ?? "Leaf",
    date: row.date ?? undefined,
    category: row.category,
  };
}

function mapServiceItem(row: any): ServiceItem {
  return {
    id: row.id,
    title: row.title,
    description: row.description,
    image: row.image ?? { url: "", alt: "" },
    ctaText: row.ctaText ?? undefined,
    reverseLayout: row.reverseLayout ?? false,
  };
}

function mapPartner(row: any): Partner {
  return {
    name: row.name,
    logo: row.logo ?? { url: "", alt: row.name },
  };
}

function mapActivity(row: any): Activity {
  return {
    id: row.id,
    title: row.title,
    shortDescription: row.shortDescription ?? "",
    fullDescription: row.fullDescription ?? "",
    category: row.category,
    image: row.image ?? { url: "", alt: "" },
    modules: row.modules ?? {},
  };
}
