import { useMemo } from 'react';
import { sanitizeHtml, validateHtmlInput } from '@/lib/sanitize';

/**
 * Hook pour sanitizer du HTML brut et prevenir les attaques XSS.
 *
 * @param html - Chaine HTML a sanitizer
 * @returns HTML securise pret pour dangerouslySetInnerHTML
 *
 * @example
 * const { sanitized } = useSanitizedHTML(post.content);
 * return <div dangerouslySetInnerHTML={{ __html: sanitized }} />;
 */
export function useSanitizedHTML(
  html: string,
): { sanitized: string; error: string | null } {
  return useMemo(() => {
    const validation = validateHtmlInput(html);
    if (!validation.valid) {
      console.error('[Security] HTML validation failed:', validation.error);
      return {
        sanitized: '<p>Contenu invalide</p>',
        error: validation.error || 'Invalid content',
      };
    }

    try {
      const sanitized = sanitizeHtml(html);
      return { sanitized, error: null };
    } catch (error) {
      console.error('[Security] Sanitization failed:', error);
      return {
        sanitized: '<p>Erreur de traitement</p>',
        error: 'Sanitization failed',
      };
    }
  }, [html]);
}
