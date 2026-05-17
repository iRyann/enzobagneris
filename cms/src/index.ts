import type { Core } from '@strapi/strapi';
import path from 'path';
import fs from 'fs';

type StrapiInstance = { strapi: Core.Strapi };

function loadJson<T>(file: string): T {
  const abs = path.resolve(process.cwd(), '../src/data', file);
  return JSON.parse(fs.readFileSync(abs, 'utf-8')) as T;
}

export default {
  register(_ctx: StrapiInstance) {},

  async bootstrap({ strapi }: StrapiInstance) {
    await seedBlogPosts(strapi);
    await seedProjects(strapi);
    await seedServiceItems(strapi);
    await seedPartners(strapi);
  },
};

async function seedBlogPosts(strapi: Core.Strapi) {
  const count = await strapi.db.query('api::blog-post.blog-post').count();
  if (count > 0) return;

  const posts = loadJson<any[]>('blog.json');
  for (const post of posts) {
    await strapi.documents('api::blog-post.blog-post').create({
      data: {
        slug: post.slug,
        title: post.title,
        subtitle: post.subtitle ?? '',
        excerpt: post.excerpt ?? '',
        content: post.content ?? '',
        category: post.category,
        tags: post.tags ?? [],
        publishedDate: post.publishedAt ?? '',
        coverImage: post.coverImage
          ? { url: post.coverImage.url, alt: post.coverImage.alt }
          : null,
        gallery: (post.gallery ?? []).map((img: any) => ({ url: img.url, alt: img.alt })),
        featured: post.featured ?? false,
      },
      status: 'published',
    });
  }
  strapi.log.info(`[seed] ${posts.length} blog posts créés`);
}

async function seedProjects(strapi: Core.Strapi) {
  const count = await strapi.db.query('api::project.project').count();
  if (count > 0) return;

  const projects = loadJson<any[]>('projects.json');
  for (const project of projects) {
    await strapi.documents('api::project.project').create({
      data: {
        slug: project.slug,
        title: project.title,
        subtitle: project.subtitle ?? '',
        target: project.target ?? '',
        description: project.description ?? '',
        coverImage: project.coverImage
          ? { url: project.coverImage.url, alt: project.coverImage.alt }
          : null,
        gallery: (project.gallery ?? []).map((img: any) => ({ url: img.url, alt: img.alt })),
        principlesEnvironmental: (project.principlesEnvironmental ?? []).map((p: any) => ({
          text: p.text,
          order: p.order ?? 0,
        })),
        principlesPedagogical: (project.principlesPedagogical ?? []).map((p: any) => ({
          text: p.text,
          order: p.order ?? 0,
        })),
        icon: project.icon ?? 'Leaf',
        date: project.date ?? '',
        category: project.category,
      },
      status: 'published',
    });
  }
  strapi.log.info(`[seed] ${projects.length} projets créés`);
}

async function seedServiceItems(strapi: Core.Strapi) {
  const count = await strapi.db.query('api::service-item.service-item').count();
  if (count > 0) return;

  const services = loadJson<any[]>('services.json');
  for (let i = 0; i < services.length; i++) {
    const svc = services[i];
    await strapi.documents('api::service-item.service-item').create({
      data: {
        title: svc.title,
        description: svc.description,
        image: svc.image ? { url: svc.image.url, alt: svc.image.alt } : null,
        ctaText: svc.ctaText ?? '',
        reverseLayout: svc.reverseLayout ?? false,
        sortOrder: i,
      },
      status: 'published',
    });
  }
  strapi.log.info(`[seed] ${services.length} services créés`);
}

async function seedPartners(strapi: Core.Strapi) {
  const count = await strapi.db.query('api::partner.partner').count();
  if (count > 0) return;

  const partners = loadJson<any[]>('partners.json');
  for (let i = 0; i < partners.length; i++) {
    const partner = partners[i];
    await strapi.documents('api::partner.partner').create({
      data: {
        name: partner.name,
        logo: partner.logo ? { url: partner.logo.url, alt: partner.logo.alt } : null,
        sortOrder: i,
      },
      status: 'published',
    });
  }
  strapi.log.info(`[seed] ${partners.length} partenaires créés`);
}
