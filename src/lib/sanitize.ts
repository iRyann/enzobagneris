import DOMPurify, { type Config } from 'dompurify';

const BLOG_CONFIG: Config = {
  ALLOWED_TAGS: [
    'p',
    'br',
    'strong',
    'em',
    'h3',
    'h4',
    'ul',
    'ol',
    'li',
    'blockquote',
    'code',
  ],
  ALLOWED_ATTR: ['href', 'rel', 'target'],
  ALLOW_DATA_ATTR: false,
  ALLOW_UNKNOWN_PROTOCOLS: false,
  ADD_ATTR: ['rel', 'target'],
  FORCE_BODY: true,
  KEEP_CONTENT: true,
};

/**
 * Sanitize du HTML pour prevenir les attaques XSS.
 */
export function sanitizeHtml(html: string): string {
  const clean = DOMPurify.sanitize(html, BLOG_CONFIG) as string;
  const parser = new DOMParser();
  const doc = parser.parseFromString(clean, 'text/html');

  doc.querySelectorAll('a').forEach((link) => {
    link.setAttribute('rel', 'noopener noreferrer');
    link.setAttribute('target', '_blank');
  });

  return doc.body.innerHTML;
}

export function validateHtmlInput(html: string): { valid: boolean; error?: string } {
  if (html.length > 50000) {
    return { valid: false, error: 'Content too large' };
  }

  const suspiciousPatterns = [
    /<script/i,
    /javascript:/i,
    /on\\w+=/i,
    /<iframe/i,
    /<object/i,
    /<embed/i,
  ];

  for (const pattern of suspiciousPatterns) {
    if (pattern.test(html)) {
      return { valid: false, error: 'Suspicious content detected' };
    }
  }

  return { valid: true };
}
