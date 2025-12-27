---
sidebar_position: 3
---

# Services

La couche `src/services` isole l'acces aux donnees pour faciliter la migration vers Strapi.

## Services disponibles

- BlogService
- ProjectService
- ServiceItemService
- PartnerService

## Exemple

```ts
import { blogService } from '@/services/api';

const posts = await blogService.getAll();
```
