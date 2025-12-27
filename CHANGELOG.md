# Changelog

## [Unreleased]
### Added
- Data service layer with BaseService and concrete services for blog, projects, services, partners.
- Services documentation in `src/services/README.md`.
- HTML validation helper for suspicious content and size limits.
- React Query client and query hooks for cached data access.

### Changed
- Hooks now load data through services instead of importing JSON directly.
- Tailwind containers and typography now use responsive scaling defaults.
- Blog HTML sanitization is stricter with link hardening and error handling.
- Data hooks now wrap React Query caches for loading and error state.
