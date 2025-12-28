import blogData from '@/data/blog.json';
import partnersData from '@/data/partners.json';
import projectsData from '@/data/projects.json';
import servicesData from '@/data/services.json';
import type { BlogPost, Partner, Project, ServiceItem } from '@/types';

import { BaseService } from './BaseService';

export class BlogService extends BaseService<BlogPost> {
  protected endpoint = '/api/blog';

  protected getStaticData(): BlogPost[] {
    return blogData as BlogPost[];
  }

  async getAll(): Promise<BlogPost[]> {
    return this.fetchData();
  }

  async getBySlug(slug: string): Promise<BlogPost | null> {
    const posts = await this.fetchData();
    return posts.find((post) => post.slug === slug) || null;
  }

  async getFeatured(): Promise<BlogPost[]> {
    const posts = await this.fetchData();
    return posts.filter((post) => post.featured);
  }
}

export class ProjectService extends BaseService<Project> {
  protected endpoint = '/api/projects';

  protected getStaticData(): Project[] {
    return projectsData as Project[];
  }

  async getAll(): Promise<Project[]> {
    return this.fetchData();
  }
}

export class ServiceItemService extends BaseService<ServiceItem> {
  protected endpoint = '/api/services';

  protected getStaticData(): ServiceItem[] {
    return servicesData as ServiceItem[];
  }

  async getAll(): Promise<ServiceItem[]> {
    return this.fetchData();
  }
}

export class PartnerService extends BaseService<Partner> {
  protected endpoint = '/api/partners';

  protected getStaticData(): Partner[] {
    return partnersData as Partner[];
  }

  async getAll(): Promise<Partner[]> {
    return this.fetchData();
  }
}
