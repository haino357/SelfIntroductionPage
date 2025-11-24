# GitHub Copilot Instructions

## Project Context
This is a personal portfolio website built with React, TypeScript, and Vite for deployment on GitHub Pages.

## Code Generation Preferences

### Language & Framework
- Use TypeScript with strict type checking
- Use React functional components with hooks
- Prefer modern ES6+ syntax
- Use async/await over promises chains

### Component Structure
```typescript
import React from 'react';
import styles from './ComponentName.module.css';

interface ComponentNameProps {
  // Props definition
}

export const ComponentName: React.FC<ComponentNameProps> = ({ prop1, prop2 }) => {
  // Component logic
  
  return (
    <div className={styles.container}>
      {/* JSX */}
    </div>
  );
};
```

### Hooks Pattern
```typescript
import { useState, useEffect, useCallback, useMemo } from 'react';

export const useCustomHook = (param: string) => {
  const [state, setState] = useState<Type>(initialValue);
  
  useEffect(() => {
    // Side effects
  }, [dependencies]);
  
  const memoizedValue = useMemo(() => {
    // Expensive computation
  }, [dependencies]);
  
  const memoizedCallback = useCallback(() => {
    // Callback function
  }, [dependencies]);
  
  return { state, memoizedValue, memoizedCallback };
};
```

### CSS Modules Pattern
```css
/* ComponentName.module.css */
.container {
  /* Use CSS custom properties */
  color: var(--primary-color);
  
  /* Mobile-first approach */
  padding: 1rem;
}

@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
}
```

## Specific Guidelines

### Type Safety
- Always define interfaces for component props
- Use proper return types for functions
- Avoid `any` type - use `unknown` if type is truly unknown
- Use union types and type guards when appropriate

### Performance
- Use `React.memo` for components that render often with same props
- Use `useMemo` for expensive calculations
- Use `useCallback` for functions passed as props
- Implement lazy loading for route-based code splitting

### Accessibility
- Use semantic HTML elements (`<nav>`, `<main>`, `<section>`, `<article>`)
- Include `alt` attributes for images
- Ensure proper heading hierarchy (h1 → h2 → h3)
- Add ARIA labels for interactive elements without text

### Error Handling
- Use try-catch blocks for async operations
- Provide user-friendly error messages
- Implement error boundaries for React components
- Log errors appropriately

### Comments & Documentation
- Add JSDoc comments for complex functions
- Explain "why" not "what" in comments
- Document non-obvious business logic
- Keep comments up-to-date with code changes

## Don't Generate

- Class components (use functional components only)
- Inline styles (use CSS Modules instead)
- `var` declarations (use `const` or `let`)
- Default exports (prefer named exports)
- Prop drilling (suggest Context API or state management)

## Suggest When Appropriate

- Extract repeated logic into custom hooks
- Split large components into smaller ones
- Add loading and error states for async operations
- Implement skeleton screens for better UX
- Use environment variables for configuration
- Add unit tests for utility functions

## File Naming
- Components: `ComponentName.tsx`
- Hooks: `useHookName.ts`
- Utils: `utilityName.ts`
- Types: `types.ts` or `ComponentName.types.ts`
- Styles: `ComponentName.module.css`

## Import Order
1. React and external libraries
2. Internal components
3. Hooks
4. Utils and helpers
5. Types
6. Styles

```typescript
import React, { useState, useEffect } from 'react';
import { ExternalComponent } from 'external-library';

import { InternalComponent } from '@/components/InternalComponent';
import { useCustomHook } from '@/hooks/useCustomHook';
import { helperFunction } from '@/utils/helpers';
import type { CustomType } from '@/types';

import styles from './Component.module.css';
```
