# Claude AI Instructions for SelfIntroductionPage

## Project Context
You are assisting with a personal portfolio/self-introduction website built with React, TypeScript, and Vite, designed for deployment on GitHub Pages.

## Your Role
Act as an expert React/TypeScript developer who:
- Writes clean, type-safe, and maintainable code
- Follows modern React best practices
- Prioritizes accessibility and performance
- Provides clear explanations for complex implementations

## Technology Stack
- **Language**: TypeScript (strict mode)
- **Framework**: React 18+ (functional components only)
- **Build Tool**: Vite
- **Styling**: CSS Modules
- **Deployment**: GitHub Pages

## Core Principles

### 1. Type Safety First
```typescript
// ✅ Always define explicit types
interface ComponentProps {
  title: string;
  count: number;
  onUpdate: (value: number) => void;
}

// ❌ Never use 'any'
const handleData = (data: any) => { ... }

// ✅ Use 'unknown' if type is truly unknown
const handleData = (data: unknown) => {
  if (typeof data === 'string') {
    // Type guard
  }
}
```

### 2. React Best Practices
- **ALWAYS** use functional components with hooks
- **ALWAYS** use named exports (not default exports)
- **ALWAYS** define prop interfaces before components
- **NEVER** mutate state directly
- **NEVER** define components inside other components
- **NEVER** use array index as key in lists

### 3. Component Structure Pattern
```typescript
import React, { useState, useEffect, useCallback } from 'react';

import styles from './ComponentName.module.css';

interface ComponentNameProps {
  // Props definition
  title: string;
  isActive?: boolean;
}

export const ComponentName: React.FC<ComponentNameProps> = ({ 
  title, 
  isActive = false 
}) => {
  // Hooks
  const [state, setState] = useState<string>('');
  
  // Effects
  useEffect(() => {
    // Side effects with cleanup
    return () => {
      // Cleanup
    };
  }, []);
  
  // Callbacks
  const handleClick = useCallback(() => {
    // Handler logic
  }, []);
  
  // Render
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
    </div>
  );
};
```

### 4. Custom Hooks Pattern
```typescript
import { useState, useEffect } from 'react';

export const useCustomHook = <T,>(initialValue: T) => {
  const [value, setValue] = useState<T>(initialValue);
  
  useEffect(() => {
    // Logic
  }, [value]);
  
  return [value, setValue] as const;
};
```

## Code Generation Guidelines

### When Creating Components
1. Define the interface first
2. Use functional component with React.FC
3. Destructure props with default values
4. Group hooks logically (state, effects, callbacks, memos)
5. Keep JSX clean and readable
6. Create accompanying CSS Module file

### When Refactoring
1. Explain what you're changing and why
2. Maintain existing functionality
3. Improve type safety if possible
4. Extract reusable logic into custom hooks
5. Suggest performance optimizations

### When Debugging
1. Ask clarifying questions about the issue
2. Check TypeScript types first
3. Verify React hooks rules compliance
4. Look for common anti-patterns
5. Provide step-by-step debugging approach

## Accessibility Requirements
- Use semantic HTML elements (`<nav>`, `<main>`, `<section>`, `<article>`)
- Provide alt text for all images
- Ensure keyboard navigation works
- Add ARIA labels for interactive elements without text
- Maintain proper heading hierarchy (h1 → h2 → h3)

## Performance Considerations
- Use `React.memo` for components that render frequently
- Use `useMemo` for expensive calculations
- Use `useCallback` for functions passed to child components
- Implement lazy loading for heavy components
- Optimize images (WebP, lazy loading)

## Styling Guidelines
- **ALWAYS** use CSS Modules (never inline styles)
- Use semantic class names
- Implement mobile-first responsive design
- Use CSS custom properties for theming
- Prefer modern CSS (Grid, Flexbox, custom properties)

```css
/* ✅ Good CSS Module pattern */
.container {
  display: grid;
  gap: var(--spacing-md);
  padding: 1rem;
}

@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
}
```

## Common Anti-Patterns to Avoid

### ❌ State Mutation
```typescript
// Bad
const [items, setItems] = useState([1, 2, 3]);
items.push(4);
setItems(items);

// Good
setItems([...items, 4]);
```

### ❌ Missing Dependencies
```typescript
// Bad
useEffect(() => {
  doSomething(value);
}, []); // Missing 'value' dependency

// Good
useEffect(() => {
  doSomething(value);
}, [value]);
```

### ❌ Nested Components
```typescript
// Bad
const Parent = () => {
  const Child = () => <div>Child</div>;
  return <Child />;
};

// Good
const Child = () => <div>Child</div>;
const Parent = () => <Child />;
```

## Communication Style
- Provide clear, concise explanations
- Use code examples to illustrate points
- Explain the "why" behind recommendations
- Ask for clarification when requirements are ambiguous
- Suggest improvements proactively but respectfully

## File Organization
```
src/
├── components/          # Reusable components
│   ├── Button/
│   │   ├── Button.tsx
│   │   └── Button.module.css
│   └── sections/       # Page sections
├── hooks/              # Custom hooks
├── utils/              # Utility functions
├── types/              # TypeScript types
└── assets/             # Images, fonts, etc.
```

## Testing Approach
When suggesting tests:
- Focus on behavior, not implementation
- Test user interactions
- Test edge cases and error states
- Use descriptive test names

```typescript
test('increments counter when button is clicked', () => {
  render(<Counter />);
  const button = screen.getByRole('button', { name: /increment/i });
  fireEvent.click(button);
  expect(screen.getByText('1')).toBeInTheDocument();
});
```

## Documentation Standards
- Add JSDoc comments for complex functions
- Document non-obvious behavior
- Provide usage examples for reusable components

```typescript
/**
 * Formats a date string to Japanese locale format
 * @param date - ISO 8601 date string
 * @param options - Intl.DateTimeFormat options
 * @returns Formatted date string in Japanese
 * @example
 * formatDate('2024-01-01') // '2024年1月1日'
 */
export const formatDate = (
  date: string, 
  options?: Intl.DateTimeFormatOptions
): string => {
  return new Date(date).toLocaleDateString('ja-JP', options);
};
```

## Error Handling
- Always handle potential errors in async operations
- Provide user-friendly error messages
- Use Error Boundaries for component errors
- Log errors appropriately

```typescript
try {
  const data = await fetchData();
  setData(data);
} catch (error) {
  console.error('Failed to fetch data:', error);
  setError('データの取得に失敗しました');
}
```

## Git Commit Messages
When suggesting commits, use conventional commit format:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting)
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

## Additional Context Files
Refer to these files for more detailed information:
- `.cursorrules` - Comprehensive coding rules
- `.ai/context.md` - Project context and structure
- `.ai/prompts.md` - Common prompt templates
- `.eslintrc.cjs` - Linting rules
- `.prettierrc.cjs` - Formatting rules

## Remember
- Type safety is non-negotiable
- Accessibility is a requirement, not an option
- Performance matters, but readability comes first
- When in doubt, ask for clarification
- Provide explanations with your code
