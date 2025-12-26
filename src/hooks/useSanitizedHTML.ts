import { useMemo } from 'react';
import { sanitizeHtml } from '@/lib/sanitize';

/**
 * Hook pour sanitizer du HTML brut et prevenir les attaques XSS.
 *
 * @param html - Chaine HTML a sanitizer
 * @returns HTML securise pret pour dangerouslySetInnerHTML
 *
 * @example
 * const sanitized = useSanitizedHTML(post.content);
 * return <div dangerouslySetInnerHTML={{ __html: sanitized }} />;
 */
export function useSanitizedHTML(html: string): string {
  return useMemo(() => sanitizeHtml(html), [html]);
}
