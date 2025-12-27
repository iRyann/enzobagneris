import { useMemo, useState } from 'react';
import { contactFormSchema } from '@/lib/validation';
import type { ContactFormData } from '@/lib/validation';
import { Button, Input, Textarea } from '@/components/ui';
import { useFormValidation } from '@/hooks';

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
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [submitState, setSubmitState] = useState<'idle' | 'error' | 'success'>('idle');
  const [touched, setTouched] = useState<Partial<Record<keyof ContactFormData, boolean>>>(
    {},
  );

  const { errors, isValid } = useFormValidation(formData, contactFormSchema, 400);

  const formError = useMemo(() => {
    if (!hasSubmitted) {
      return null;
    }
    if (submitState === 'error') {
      return 'Merci de corriger les champs en rouge.';
    }
    return null;
  }, [hasSubmitted, submitState]);

  const updateField = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (submitState !== 'idle') {
      setSubmitState('idle');
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = contactFormSchema.safeParse(formData);
    setHasSubmitted(true);

    if (!result.success) {
      setSubmitState('error');
      return;
    }

    setSubmitState('success');
    // TODO: Remplacer par un envoi API vers Strapi.
  };

  const handleBlur = (field: keyof ContactFormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const showError = (field: keyof ContactFormData) =>
    (touched[field] || hasSubmitted) && errors[field];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Input
          placeholder="Votre nom"
          value={formData.name}
          onChange={(event) => updateField('name', event.target.value)}
          onBlur={() => handleBlur('name')}
          aria-invalid={!!showError('name')}
          className={showError('name') ? 'border-red-400 focus:border-red-500' : undefined}
        />
        {showError('name') && <p className="text-sm text-red-600">{errors.name}</p>}
      </div>

      <div className="space-y-2">
        <Input
          type="email"
          placeholder="Votre email"
          value={formData.email}
          onChange={(event) => updateField('email', event.target.value)}
          onBlur={() => handleBlur('email')}
          aria-invalid={!!showError('email')}
          className={showError('email') ? 'border-red-400 focus:border-red-500' : undefined}
        />
        {showError('email') && <p className="text-sm text-red-600">{errors.email}</p>}
      </div>

      <div className="space-y-2">
        <Input
          placeholder="Sujet"
          value={formData.subject}
          onChange={(event) => updateField('subject', event.target.value)}
          onBlur={() => handleBlur('subject')}
          aria-invalid={!!showError('subject')}
          className={showError('subject') ? 'border-red-400 focus:border-red-500' : undefined}
        />
        {showError('subject') && <p className="text-sm text-red-600">{errors.subject}</p>}
      </div>

      <div className="space-y-2">
        <Textarea
          rows={5}
          placeholder="Votre message"
          value={formData.message}
          onChange={(event) => updateField('message', event.target.value)}
          onBlur={() => handleBlur('message')}
          aria-invalid={!!showError('message')}
          className={showError('message') ? 'border-red-400 focus:border-red-500' : undefined}
        />
        {showError('message') && <p className="text-sm text-red-600">{errors.message}</p>}
      </div>

      {formError && <p className="text-sm text-red-600">{formError}</p>}
      {submitState === 'success' && (
        <p className="text-sm text-green-700">Merci, votre message a bien ete envoye.</p>
      )}
      <Button type="submit" disabled={hasSubmitted && !isValid}>
        Envoyer
      </Button>
    </form>
  );
}
