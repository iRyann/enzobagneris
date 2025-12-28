import { BlogService, PartnerService, ProjectService, ServiceItemService } from './DataService';

export const blogService = new BlogService();
export const projectService = new ProjectService();
export const serviceItemService = new ServiceItemService();
export const partnerService = new PartnerService();

export type { DataServiceError } from './types';
export type { BlogService, PartnerService, ProjectService, ServiceItemService } from './DataService';
