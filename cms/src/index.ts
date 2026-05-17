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
    await seedActivities(strapi);
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

async function seedActivities(strapi: Core.Strapi) {
  const count = await strapi.db.query('api::activity.activity').count();
  if (count > 0) return;

  const activities = [
    {
      title: "L'Hôtel à insectes",
      category: 'Biodiversité & artisanat',
      shortDescription: 'Découvrez le rôle crucial des auxiliaires du jardin en construisant leur futur refuge.',
      fullDescription: "Un atelier pratique et théorique pour comprendre pourquoi nos jardins ont besoin de \"petites bêtes\" et comment leur offrir un gîte adapté aux cycles de la nature.",
      image: { url: '/assets/images/blog/hotelInsectes.png', alt: 'Atelier hôtel à insectes' },
      modules: {
        'Scolaires': {
          id: 'sc-1', title: 'Les cycles de la vie au jardin',
          description: 'Adapté aux programmes scolaires (cycle 1 à 3). Observation des cycles larvaires et importance de la pollinisation.',
          duration: '2h00', keyLearning: ['Cycle de vie des osmies', 'Classification simplifiée', 'Chaîne alimentaire'],
        },
        'Entreprises (RSE)': {
          id: 'rse-1', title: "Biodiversité & cohésion d'équipe",
          description: "Un moment de déconnexion active. Montage collectif d'une structure pérenne pour le site de l'entreprise.",
          duration: 'Demi-journée', keyLearning: ['Impact RSE concret', 'Gestion de projet manuel', 'Sensibilisation locale'],
        },
        'Grand Public': {
          id: 'gp-1', title: 'Refuge nature à domicile',
          description: 'Apprenez à fabriquer votre propre hôtel avec des matériaux de récupération pour transformer balcon ou jardin.',
          duration: '1h30', keyLearning: ['Matériaux naturels', 'Emplacement optimal', 'Identification des espèces'],
        },
        'Projets tutorés': {
          id: 'pt-1', title: 'Ingénierie de la biodiversité',
          description: 'Accompagnement technique sur la conception de nichoirs spécifiques et protocoles de suivi scientifique.',
          duration: 'Accompagnement long', keyLearning: ['Protocoles Vigie-Nature', 'Monitoring', 'Documentation technique'],
        },
      },
    },
    {
      title: "Course d'orientation",
      category: 'Orientation & nature',
      shortDescription: 'Apprenez à lire une carte et à vous repérer pour relever des défis en pleine nature.',
      fullDescription: "Une activité ludique et sportive pour développer l'autonomie, l'esprit d'équipe et la compréhension du territoire.",
      image: { url: '/assets/images/presentation/home/service-randonnée.jpeg', alt: "Course d'orientation en pleine nature" },
      modules: {
        'Scolaires': {
          id: 'sc-2', title: 'Se repérer en autonomie',
          description: "Initiation à la lecture de carte et à l'orientation. Jeux de balises adaptés aux cycles scolaires.",
          duration: '2h00', keyLearning: ['Lecture de carte', 'Repères naturels', 'Coopération'],
        },
        'Entreprises (RSE)': {
          id: 'rse-2', title: "Défis d'équipe en extérieur",
          description: "Challenge d'orientation pour renforcer la cohésion, la communication et la prise de décision.",
          duration: 'Demi-journée', keyLearning: ['Leadership partagé', 'Gestion du temps', 'Stratégie collective'],
        },
        'Grand Public': {
          id: 'gp-2', title: 'Aventure carte & boussole',
          description: "Parcours nature accessible à tous pour apprendre à se déplacer en autonomie.",
          duration: '2h00', keyLearning: ['Boussole', 'Lecture de terrain', 'Sécurité'],
        },
        'Projets tutorés': {
          id: 'pt-2', title: "Conception d'itinéraires",
          description: "Création de parcours, balisage et médiation autour de la lecture du paysage.",
          duration: 'Semestre', keyLearning: ['Cartographie', 'Gestion de projet', 'Médiation territoriale'],
        },
      },
    },
  ];

  for (let i = 0; i < activities.length; i++) {
    const a = activities[i];
    await strapi.documents('api::activity.activity').create({
      data: {
        title: a.title,
        category: a.category,
        shortDescription: a.shortDescription,
        fullDescription: a.fullDescription,
        image: a.image,
        modules: a.modules,
        sortOrder: i,
      },
      status: 'published',
    });
  }
  strapi.log.info(`[seed] ${activities.length} activités créées`);
}
