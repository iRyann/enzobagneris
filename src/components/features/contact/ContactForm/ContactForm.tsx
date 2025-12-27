import { useState } from 'react';
import { contactFormSchema } from '@/lib/validation';
import type { ContactFormData } from '@/lib/validation';
import { Button, Input, Textarea } from '@/components/ui';

/**
 * Formulaire de contact avec validation Zod.
 */
export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [error, setError] = useState<string | null>(null);

  const updateField = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = contactFormSchema.safeParse(formData);

    if (!result.success) {
      setError(result.error.issues[0]?.message || 'Erreur de validation');
      return;
    }

    setError(null);
    // TODO: Remplacer par un envoi API vers Strapi.
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        placeholder="Votre nom"
        value={formData.name}
        onChange={(event) => updateField('name', event.target.value)}
      />
      <Input
        type="email"
        placeholder="Votre email"
        value={formData.email}
        onChange={(event) => updateField('email', event.target.value)}
      />
      <Input
        placeholder="Sujet"
        value={formData.subject}
        onChange={(event) => updateField('subject', event.target.value)}
      />
      <Textarea
        rows={5}
        placeholder="Votre message"
        value={formData.message}
        onChange={(event) => updateField('message', event.target.value)}
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
      <Button type="submit">Envoyer</Button>
    </form>
  );
}
