# Button

Composant bouton reutilisable avec variants et tailles.

## Import

```typescript
import { Button } from '@/components/ui';
```

## Usage

```tsx
<Button>Click me</Button>
<Button variant="secondary">Secondary</Button>
<Button size="lg">Large</Button>
<Button loading>Chargement...</Button>
```

## Props

| Prop      | Type                                             | Default   | Description        |
| --------- | ------------------------------------------------ | --------- | ------------------ |
| variant   | 'primary' \| 'secondary' \| 'outline' \| 'ghost' | 'primary' | Style visuel       |
| size      | 'sm' \| 'md' \| 'lg'                             | 'md'      | Taille du bouton   |
| loading   | boolean                                          | false     | Etat de chargement |
| fullWidth | boolean                                          | false     | Largeur 100%       |
