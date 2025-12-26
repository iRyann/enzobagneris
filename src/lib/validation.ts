import { z } from 'zod';

/**
 * Schema de validation pour le formulaire de contact.
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Le nom doit contenir au moins 2 caracteres')
    .max(100, 'Le nom est trop long'),
  email: z.string().email('Email invalide'),
  subject: z
    .string()
    .min(5, 'Le sujet doit contenir au moins 5 caracteres')
    .max(200, 'Le sujet est trop long'),
  message: z
    .string()
    .min(10, 'Le message doit contenir au moins 10 caracteres')
    .max(2000, 'Le message est trop long'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
