import type { BlogPost, Partner, Project, ServiceItem } from '@/types';

const STRAPI_URL = (import.meta.env.VITE_STRAPI_URL as string | undefined)?.replace(/\/$/, '');
const STRAPI_TOKEN = import.meta.env.VITE_STRAPI_API_TOKEN as string | undefined;

export const isStrapiConfigured = Boolean(STRAPI_URL);

async function get<T>(path: string, populate: string): Promise<T[]> {
  if (!STRAPI_URL) throw new Error('VITE_STRAPI_URL is not set');

  const url = new URL(`${STRAPI_URL}/api${path}`);
  url.searchParams.set('populate', populate);
  url.searchParams.set('pagination[pageSize]', '100');

  const headers: HeadersInit = {};
  if (STRAPI_TOKEN) headers['Authorization'] = `Bearer ${STRAPI_TOKEN}`;

  const res = await fetch(url.toString(), { headers });
  if (!res.ok) throw new Error(`Strapi ${res.status} on ${path}`);

  const json = await res.json();
  return Array.isArray(json.data) ? json.data : [json.data];
}

async function getOne<T>(path: string, populate: string): Promise<T | null> {
  const results = await get<T>(path, populate);
  return results[0] ?? null;
}

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  const items = await get<any>('/blog-posts', 'coverImage,gallery');
  return items.map(mapBlogPost);
}

export async function fetchBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const url = new URL(`${STRAPI_URL}/api/blog-posts`);
  url.searchParams.set('filters[slug][$eq]', slug);
  url.searchParams.set('populate', 'coverImage,gallery');

  const headers: HeadersInit = {};
  if (STRAPI_TOKEN) headers['Authorization'] = `Bearer ${STRAPI_TOKEN}`;

  const res = await fetch(url.toString(), { headers });
  if (!res.ok) throw new Error(`Strapi ${res.status} on /blog-posts?slug=${slug}`);

  const json = await res.json();
  const items: any[] = Array.isArray(json.data) ? json.data : [];
  return items.length > 0 ? mapBlogPost(items[0]) : null;
}

export async function fetchFeaturedBlogPosts(): Promise<BlogPost[]> {
  const url = new URL(`${STRAPI_URL}/api/blog-posts`);
  url.searchParams.set('filters[featured][$eq]', 'true');
  url.searchParams.set('populate', 'coverImage,gallery');
  url.searchParams.set('pagination[pageSize]', '10');

  const headers: HeadersInit = {};
  if (STRAPI_TOKEN) headers['Authorization'] = `Bearer ${STRAPI_TOKEN}`;

  const res = await fetch(url.toString(), { headers });
  if (!res.ok) throw new Error(`Strapi ${res.status} on /blog-posts?featured`);

  const json = await res.json();
  const items: any[] = Array.isArray(json.data) ? json.data : [];
  return items.map(mapBlogPost);
}

export async function fetchProjects(): Promise<Project[]> {
  const items = await get<any>(
    '/projects',
    'coverImage,gallery,principlesEnvironmental,principlesPedagogical',
  );
  return items.map(mapProject);
}

export async function fetchServiceItems(): Promise<ServiceItem[]> {
  const url = new URL(`${STRAPI_URL}/api/service-items`);
  url.searchParams.set('populate', 'image');
  url.searchParams.set('sort', 'sortOrder:asc');
  url.searchParams.set('pagination[pageSize]', '100');

  const headers: HeadersInit = {};
  if (STRAPI_TOKEN) headers['Authorization'] = `Bearer ${STRAPI_TOKEN}`;

  const res = await fetch(url.toString(), { headers });
  if (!res.ok) throw new Error(`Strapi ${res.status} on /service-items`);

  const json = await res.json();
  const items: any[] = Array.isArray(json.data) ? json.data : [];
  return items.map(mapServiceItem);
}

export async function fetchPartners(): Promise<Partner[]> {
  const url = new URL(`${STRAPI_URL}/api/partners`);
  url.searchParams.set('populate', 'logo');
  url.searchParams.set('sort', 'sortOrder:asc');
  url.searchParams.set('pagination[pageSize]', '100');

  const headers: HeadersInit = {};
  if (STRAPI_TOKEN) headers['Authorization'] = `Bearer ${STRAPI_TOKEN}`;

  const res = await fetch(url.toString(), { headers });
  if (!res.ok) throw new Error(`Strapi ${res.status} on /partners`);

  const json = await res.json();
  const items: any[] = Array.isArray(json.data) ? json.data : [];
  return items.map(mapPartner);
}

function mapBlogPost(item: any): BlogPost {
  return {
    id: item.documentId ?? String(item.id),
    slug: item.slug,
    title: item.title,
    subtitle: item.subtitle ?? '',
    excerpt: item.excerpt ?? '',
    content: item.content ?? '',
    category: item.category,
    tags: item.tags ?? [],
    publishedAt: item.publishedDate ?? '',
    coverImage: item.coverImage ?? { url: '', alt: '' },
    gallery: item.gallery ?? [],
    featured: item.featured ?? false,
  };
}

function mapProject(item: any): Project {
  return {
    id: item.documentId ?? String(item.id),
    slug: item.slug,
    title: item.title,
    subtitle: item.subtitle ?? '',
    target: item.target ?? '',
    description: item.description ?? '',
    coverImage: item.coverImage ?? { url: '', alt: '' },
    gallery: item.gallery ?? [],
    principlesEnvironmental: (item.principlesEnvironmental ?? []).sort(
      (a: any, b: any) => (a.order ?? 0) - (b.order ?? 0),
    ),
    principlesPedagogical: (item.principlesPedagogical ?? []).sort(
      (a: any, b: any) => (a.order ?? 0) - (b.order ?? 0),
    ),
    icon: item.icon ?? 'Leaf',
    date: item.date ?? undefined,
    category: item.category,
  };
}

function mapServiceItem(item: any): ServiceItem {
  return {
    id: item.documentId ?? String(item.id),
    title: item.title,
    description: item.description,
    image: item.image ?? { url: '', alt: '' },
    ctaText: item.ctaText ?? undefined,
    reverseLayout: item.reverseLayout ?? false,
  };
}

function mapPartner(item: any): Partner {
  return {
    name: item.name,
    logo: item.logo ?? { url: '', alt: item.name },
  };
}
