/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_STRAPI_URL?: string;
  readonly VITE_STRAPI_API_TOKEN?: string;
  readonly PUBLIC_SUPABASE_URL?: string;
  readonly PUBLIC_SUPABASE_ANON_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
