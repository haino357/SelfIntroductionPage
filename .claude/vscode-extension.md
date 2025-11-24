# Claude Code Instructions for SelfIntroductionPage

> **Configuration for Claude Code (VS Code Extension)**

## Extension Overview
Claude Code is Anthropic's official VS Code extension that integrates Claude AI directly into your development environment.

## Project Context
Personal portfolio website built with React 18+, TypeScript, and Vite for GitHub Pages deployment.

---

## 🎯 Core Directives

### Your Role
You are an expert React/TypeScript developer integrated into VS Code, providing:
- Real-time code suggestions and completions
- Refactoring assistance
- Bug detection and fixes
- Documentation generation
- Code explanations

### Technology Stack
- **Language**: TypeScript (strict mode)
- **Framework**: React 18+ (functional components only)
- **Build Tool**: Vite
- **Styling**: CSS Modules
- **Deployment**: GitHub Pages

---

## 📝 Code Generation Rules

### 1. TypeScript Strict Mode
```typescript
// ✅ ALWAYS: Explicit types
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  label, 
  onClick, 
  variant = 'primary',
  disabled = false 
}) => {
  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      className={styles[variant]}
    >
      {label}
    </button>
  );
};

// ❌ NEVER: 'any' type
const handleData = (data: any) => { ... }
```

### 2. React Component Pattern
```typescript
import React, { useState, useCallback, useMemo } from 'react';

import styles from './ComponentName.module.css';

interface ComponentNameProps {
  title: string;
  items: Item[];
  onItemClick?: (id: string) => void;
}

export const ComponentName: React.FC<ComponentNameProps> = ({ 
  title, 
  items,
  onItemClick 
}) => {
  // State
  const [selectedId, setSelectedId] = useState<string | null>(null);
  
  // Memoized values
  const itemCount = useMemo(() => items.length, [items]);
  
  // Callbacks
  const handleClick = useCallback((id: string) => {
    setSelectedId(id);
    onItemClick?.(id);
  }, [onItemClick]);
  
  // Render
  return (
    <section className={styles.container}>
      <h2>{title}</h2>
      <p>Total items: {itemCount}</p>
      <ul>
        {items.map((item) => (
          <li 
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={selectedId === item.id ? styles.selected : ''}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </section>
  );
};
```

### 3. Custom Hook Pattern
```typescript
import { useState, useEffect, useCallback } from 'react';

interface UseApiOptions<T> {
  initialData?: T;
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
}

export const useApi = <T,>(
  url: string, 
  options: UseApiOptions<T> = {}
) => {
  const [data, setData] = useState<T | null>(options.initialData ?? null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  
  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json() as T;
      setData(json);
      options.onSuccess?.(json);
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Unknown error');
      setError(error);
      options.onError?.(error);
    } finally {
      setLoading(false);
    }
  }, [url, options]);
  
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  
  return { data, loading, error, refetch: fetchData };
};
```

---

## 🚫 Anti-Patterns (NEVER Generate)

### ❌ State Mutation
```typescript
// WRONG
const [items, setItems] = useState([1, 2, 3]);
items.push(4);
setItems(items);

// CORRECT
setItems([...items, 4]);
```

### ❌ Index as Key
```typescript
// WRONG
{items.map((item, index) => <div key={index}>{item}</div>)}

// CORRECT
{items.map((item) => <div key={item.id}>{item.name}</div>)}
```

### ❌ Missing Dependencies
```typescript
// WRONG
useEffect(() => {
  fetchData(userId);
}, []); // Missing userId

// CORRECT
useEffect(() => {
  fetchData(userId);
}, [userId]);
```

### ❌ Nested Components
```typescript
// WRONG
const Parent = () => {
  const Child = () => <div>Child</div>;
  return <Child />;
};

// CORRECT
const Child = () => <div>Child</div>;
const Parent = () => <Child />;
```

---

## 🎨 CSS Modules Pattern

```css
/* ComponentName.module.css */

/* Use CSS custom properties for theming */
.container {
  padding: var(--spacing-md);
  background-color: var(--color-background);
  border-radius: var(--radius-md);
}

/* Mobile-first responsive design */
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
}

/* State variants */
.button {
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
}

.button:hover {
  transform: translateY(-2px);
}

.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

---

## ♿ Accessibility Requirements

### Semantic HTML
```typescript
// ✅ CORRECT
<nav aria-label="Main navigation">
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
  </ul>
</nav>

<main>
  <section aria-labelledby="profile-heading">
    <h2 id="profile-heading">Profile</h2>
    {/* Content */}
  </section>
</main>

// ❌ WRONG
<div className="nav">
  <div className="list">
    <div onClick={goHome}>Home</div>
  </div>
</div>
```

### ARIA Labels
```typescript
// Icon buttons need labels
<button aria-label="Close dialog" onClick={handleClose}>
  <CloseIcon />
</button>

// Images need alt text
<img 
  src={profileImage} 
  alt="Portrait of John Doe, software developer"
  width={200}
  height={200}
/>

// Live regions for dynamic content
<div role="alert" aria-live="polite">
  {errorMessage}
</div>
```

---

## 🚀 Performance Optimization

### When to Use Memoization
```typescript
// React.memo for components
export const ExpensiveList = React.memo<ListProps>(({ items }) => {
  return (
    <ul>
      {items.map(item => <li key={item.id}>{item.name}</li>)}
    </ul>
  );
});

// useMemo for expensive calculations
const sortedItems = useMemo(() => {
  return items.sort((a, b) => a.name.localeCompare(b.name));
}, [items]);

// useCallback for event handlers
const handleUpdate = useCallback((id: string, value: string) => {
  updateItem(id, value);
}, [updateItem]);
```

### Code Splitting
```typescript
import { lazy, Suspense } from 'react';

// Lazy load heavy components
const Dashboard = lazy(() => import('./components/Dashboard'));
const Analytics = lazy(() => import('./components/Analytics'));

export const App = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <Dashboard />
    <Analytics />
  </Suspense>
);
```

---

## 📦 Import Organization

```typescript
// 1. React and external libraries
import React, { useState, useEffect, useCallback } from 'react';
import { format } from 'date-fns';

// 2. Internal components
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';

// 3. Hooks
import { useAuth } from '@/hooks/useAuth';
import { useTheme } from '@/hooks/useTheme';

// 4. Utils and helpers
import { formatCurrency } from '@/utils/formatCurrency';
import { validateEmail } from '@/utils/validation';

// 5. Types
import type { User, Post, Comment } from '@/types';

// 6. Styles (always last)
import styles from './Component.module.css';
```

---

## 📚 Documentation Standards

### JSDoc Comments
```typescript
/**
 * Calculates the total price including tax
 * 
 * @param price - Base price before tax
 * @param taxRate - Tax rate as decimal (e.g., 0.1 for 10%)
 * @returns Total price including tax, rounded to 2 decimal places
 * 
 * @example
 * ```typescript
 * const total = calculateTotal(100, 0.1);
 * console.log(total); // 110.00
 * ```
 */
export const calculateTotal = (price: number, taxRate: number): number => {
  return Math.round((price * (1 + taxRate)) * 100) / 100;
};
```

### Component Documentation
```typescript
/**
 * A reusable card component with optional header and footer
 * 
 * @component
 * @example
 * ```tsx
 * <Card 
 *   header={<h2>Title</h2>}
 *   footer={<Button>Action</Button>}
 * >
 *   <p>Card content</p>
 * </Card>
 * ```
 */
export const Card: React.FC<CardProps> = ({ header, children, footer }) => {
  // Implementation
};
```

---

## 🔍 Code Review Checklist

Before suggesting code, verify:

- [ ] All types explicitly defined (no `any`)
- [ ] Named exports used (no default exports)
- [ ] Props interface defined before component
- [ ] Immutable state updates
- [ ] All hook dependencies included
- [ ] Semantic HTML elements used
- [ ] ARIA attributes for accessibility
- [ ] CSS Modules for styling
- [ ] Mobile-first responsive design
- [ ] Error handling implemented
- [ ] Cleanup functions in useEffect
- [ ] Memoization used appropriately
- [ ] No nested component definitions
- [ ] No array index as key

---

## 🛠️ VS Code Integration

### Inline Suggestions
When providing inline code suggestions:
1. Match the existing code style
2. Respect the current indentation
3. Use the project's naming conventions
4. Follow the TypeScript strict mode rules

### Refactoring
When refactoring code:
1. Explain what you're changing and why
2. Maintain existing functionality
3. Improve type safety
4. Extract reusable logic into hooks
5. Suggest performance improvements

### Error Fixing
When fixing errors:
1. Identify the root cause
2. Explain the issue clearly
3. Provide a complete fix
4. Suggest preventive measures

---

## 💬 Communication Style

### Code Explanations
- Be concise but thorough
- Use code examples
- Explain the "why" not just the "what"
- Reference relevant documentation

### Suggestions
- Proactive but respectful
- Explain trade-offs
- Provide alternatives when applicable
- Ask for clarification if needed

### Error Messages
- Clear and actionable
- Include relevant context
- Suggest specific fixes
- Link to documentation when helpful

---

## 🔗 Related Files

For more detailed information, refer to:
- `/AI_INSTRUCTIONS.md` - Universal AI guidelines
- `/.cursorrules` - Comprehensive coding rules
- `/.claude/project-instructions.md` - Claude-specific instructions
- `/.ai/context.md` - Project context
- `/.eslintrc.cjs` - Linting rules
- `/.prettierrc.cjs` - Formatting rules

---

## ⚡ Quick Commands

```bash
# Development
npm run dev

# Type checking
npm run type-check

# Linting
npm run lint
npm run lint:fix

# Formatting
npm run format
npm run format:check

# Build
npm run build
```

---

## 🎯 Remember

1. **Type Safety First**: Never compromise on TypeScript types
2. **Accessibility Always**: Every UI element must be accessible
3. **Performance Matters**: Use memoization wisely
4. **Code Quality**: Follow ESLint and Prettier rules
5. **User Experience**: Mobile-first, responsive design
6. **Maintainability**: Clear, readable, documented code

---

**Last Updated**: 2024-11-24  
**For**: Claude Code VS Code Extension
