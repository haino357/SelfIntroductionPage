# AI Development Instructions

> **Universal guidelines for all AI coding assistants working on this project**

## 🎯 Project Overview

**SelfIntroductionPage** - A personal portfolio/self-introduction website for showcasing skills and experience as a freelancer.

### Technology Stack
- **Language**: TypeScript (strict mode)
- **Framework**: React 18+ (functional components only)
- **Build Tool**: Vite
- **Styling**: CSS Modules
- **Deployment**: GitHub Pages

---

## 📋 Quick Reference

### Core Principles
1. **Type Safety**: Always use explicit TypeScript types, never `any`
2. **Functional React**: Only functional components with hooks
3. **Named Exports**: No default exports
4. **Immutability**: Never mutate state directly
5. **Accessibility**: Semantic HTML and ARIA attributes required
6. **Performance**: Use memoization appropriately

### File Structure
```
src/
├── components/       # Reusable UI components
│   └── sections/    # Page section components
├── hooks/           # Custom React hooks
├── utils/           # Utility functions
├── types/           # TypeScript type definitions
└── assets/          # Static assets (images, fonts)
```

---

## 🔧 AI Tool-Specific Instructions

### For Cursor AI
Read: [`.cursorrules`](./.cursorrules)
- Comprehensive coding rules and patterns
- React anti-patterns to avoid
- Performance optimization guidelines

### For GitHub Copilot
Read: [`.github/copilot-instructions.md`](./.github/copilot-instructions.md)
- Code generation preferences
- Component and hook templates
- Import order conventions

### For Claude (Anthropic)
Read: [`.claude/project-instructions.md`](./.claude/project-instructions.md)
- Project context and role definition
- Communication style guidelines
- Debugging approach

### For Claude Code (VS Code Extension)
Read: [`.claude/vscode-extension.md`](./.claude/vscode-extension.md)
- VS Code integration patterns
- Inline suggestion guidelines
- Refactoring and error fixing approach

### For OpenAI Codex
Read: [`.openai/codex-instructions.md`](./.openai/codex-instructions.md)
- System prompt configuration
- Mandatory patterns and templates
- Quality checklist

---

## 💡 Common Patterns

### Component Template
```typescript
import React, { useState, useCallback } from 'react';
import styles from './ComponentName.module.css';

interface ComponentNameProps {
  title: string;
  count?: number;
}

export const ComponentName: React.FC<ComponentNameProps> = ({ 
  title, 
  count = 0 
}) => {
  const [value, setValue] = useState<number>(count);
  
  const handleClick = useCallback(() => {
    setValue(prev => prev + 1);
  }, []);
  
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <button onClick={handleClick}>{value}</button>
    </div>
  );
};
```

### Custom Hook Template
```typescript
import { useState, useEffect } from 'react';

export const useCustomHook = <T,>(initialValue: T) => {
  const [value, setValue] = useState<T>(initialValue);
  
  useEffect(() => {
    // Side effects
    return () => {
      // Cleanup
    };
  }, [value]);
  
  return [value, setValue] as const;
};
```

### CSS Module Template
```css
.container {
  padding: var(--spacing-md);
  background: var(--color-background);
}

/* Mobile-first responsive design */
@media (min-width: 768px) {
  .container {
    padding: var(--spacing-lg);
  }
}
```

---

## ✅ Must Do

- ✅ Define TypeScript interfaces for all props
- ✅ Use semantic HTML elements (`<nav>`, `<main>`, `<section>`)
- ✅ Provide alt text for images
- ✅ Include ARIA labels for interactive elements
- ✅ Use CSS Modules for styling
- ✅ Implement mobile-first responsive design
- ✅ Add cleanup functions in `useEffect`
- ✅ Use `useCallback` for event handlers passed to children
- ✅ Use `useMemo` for expensive calculations

---

## ❌ Must Not Do

- ❌ Use `any` type (use `unknown` with type guards instead)
- ❌ Use default exports (use named exports)
- ❌ Mutate state directly (use immutable updates)
- ❌ Use array index as `key` in lists
- ❌ Define components inside other components
- ❌ Forget dependencies in hook dependency arrays
- ❌ Use inline styles (use CSS Modules)
- ❌ Use class components (use functional components)

---

## 🎨 Code Style

### TypeScript
```typescript
// ✅ Good
interface User {
  id: string;
  name: string;
  email?: string;
}

const getUser = (id: string): User | null => {
  // Implementation
};

// ❌ Bad
const getUser = (id: any): any => {
  // Implementation
};
```

### React State
```typescript
// ✅ Good - Immutable update
setItems([...items, newItem]);
setUser({ ...user, name: newName });

// ❌ Bad - Mutation
items.push(newItem);
user.name = newName;
```

### Hooks Dependencies
```typescript
// ✅ Good - All dependencies included
useEffect(() => {
  fetchData(userId, filter);
}, [userId, filter]);

// ❌ Bad - Missing dependencies
useEffect(() => {
  fetchData(userId, filter);
}, []);
```

---

## 🚀 Performance Guidelines

### When to Use Memoization
```typescript
// Use React.memo for components that re-render often
export const ExpensiveComponent = React.memo<Props>(({ data }) => {
  return <div>{data.value}</div>;
});

// Use useMemo for expensive calculations
const total = useMemo(() => {
  return items.reduce((sum, item) => sum + item.price, 0);
}, [items]);

// Use useCallback for functions passed as props
const handleUpdate = useCallback((id: string) => {
  updateItem(id);
}, [updateItem]);
```

### Code Splitting
```typescript
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

<Suspense fallback={<Loading />}>
  <HeavyComponent />
</Suspense>
```

---

## ♿ Accessibility Checklist

- [ ] Semantic HTML elements used
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] Alt text for all images
- [ ] ARIA labels for icon buttons
- [ ] Keyboard navigation support
- [ ] Sufficient color contrast
- [ ] Focus indicators visible

---

## 📚 Additional Resources

### Project Documentation
- [`.ai/context.md`](./.ai/context.md) - Detailed project context
- [`.ai/prompts.md`](./.ai/prompts.md) - Common prompt templates
- [`.ai/linting-guide.md`](./.ai/linting-guide.md) - ESLint & Prettier guide

### Configuration Files
- [`.eslintrc.cjs`](./.eslintrc.cjs) - Linting rules
- [`.prettierrc.cjs`](./.prettierrc.cjs) - Code formatting
- [`tsconfig.json`](./tsconfig.json) - TypeScript configuration
- [`vite.config.ts`](./vite.config.ts) - Build configuration

---

## 🔍 Code Quality Commands

```bash
# Type checking
npm run type-check

# Linting
npm run lint
npm run lint:fix

# Formatting
npm run format
npm run format:check

# Development
npm run dev

# Build
npm run build
```

---

## 📝 Commit Message Format

Use conventional commits:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation only
- `style:` - Code style (formatting, semicolons, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

**Example**: `feat: add contact form component`

---

## 🤝 Communication Guidelines

When assisting with this project:

1. **Ask for Clarification**: If requirements are unclear, ask specific questions
2. **Explain Decisions**: Provide reasoning for non-obvious implementations
3. **Suggest Improvements**: Proactively suggest better patterns when appropriate
4. **Be Concise**: Keep explanations clear and to the point
5. **Use Examples**: Show code examples to illustrate concepts

---

## 🎯 Quality Standards

Before suggesting or generating code, ensure:

1. **Type Safety**: All types explicitly defined
2. **No Linting Errors**: Code passes ESLint checks
3. **Accessibility**: ARIA and semantic HTML present
4. **Performance**: Appropriate memoization used
5. **Maintainability**: Code is readable and well-structured
6. **Documentation**: Complex logic has JSDoc comments

---

## 📖 How to Use This Guide

### For AI Assistants
1. Read this file first for project overview
2. Refer to tool-specific instructions for detailed patterns
3. Follow the templates and examples provided
4. Check the quality standards before outputting code

### For Developers
1. Share this file with your AI assistant at the start of a session
2. Reference specific sections when asking for help
3. Use the templates as starting points for new code
4. Run quality commands before committing

---

## 🔄 Version

**Last Updated**: 2024-11-24  
**Project Version**: 0.0.0

For the most up-to-date information, always refer to the configuration files in this repository.
