# Changelog

## [Unreleased]
### Added
- Data service layer with BaseService and concrete services for blog, projects, services, partners.
- Services documentation in `src/services/README.md`.
- HTML validation helper for suspicious content and size limits.
- React Query client and query hooks for cached data access.
- Typed API, error, and utility type definitions for stricter models.
- Docusaurus documentation site under `docs/` with initial guides and API section.
- TypeDoc configuration for generating API reference into `docs/docs/api`.

### Changed
- Hooks now load data through services instead of importing JSON directly.
- Tailwind containers and typography now use responsive scaling defaults.
- Blog HTML sanitization is stricter with link hardening and error handling.
- Data hooks now wrap React Query caches for loading and error state.
- TypeScript runs in strict mode and PrinciplesList uses typed Lucide icons.
- Exported props interfaces for TypeDoc (PortfolioGridProps, MobileMenuProps).

### Removed
- Contact form and related validation hooks/types.
