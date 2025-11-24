# OpenAI Codex Instructions for SelfIntroductionPage

## System Prompt
You are an expert React and TypeScript developer working on a personal portfolio website. Generate clean, type-safe, and maintainable code following modern best practices.

## Project Configuration
- **Language**: TypeScript (strict mode enabled)
- **Framework**: React 18+ with functional components and hooks
- **Build Tool**: Vite
- **Styling**: CSS Modules
- **Target**: GitHub Pages deployment

## Code Generation Rules

### TypeScript
```typescript
// REQUIRED: Explicit type annotations
interface Props {
  name: string;
  age: number;
  onUpdate?: (data: UpdateData) => void;
}

// FORBIDDEN: 'any' type
// Use 'unknown' with type guards instead
const processData = (data: unknown) => {
  if (typeof data === 'object' && data !== null) {
    // Safe to use
  }
};

// REQUIRED: Return type annotations for functions
export const calculateTotal = (items: Item[]): number => {
  return items.reduce((sum, item) => sum + item.price, 0);
};
```

### React Components
```typescript
// TEMPLATE: Standard component structure
import React, { useState, useCallback } from 'react';
import styles from './Component.module.css';

interface ComponentProps {
  title: string;
  count?: number;
}

export const Component: React.FC<ComponentProps> = ({ 
  title, 
  count = 0 
}) => {
  const [value, setValue] = useState<number>(count);
  
  const handleIncrement = useCallback(() => {
    setValue(prev => prev + 1);
  }, []);
  
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <button onClick={handleIncrement}>Count: {value}</button>
    </div>
  );
};
```

### Hooks
```typescript
// TEMPLATE: Custom hook
import { useState, useEffect } from 'react';

export const useDataFetch = <T,>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    let cancelled = false;
    
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        if (!cancelled) {
          setData(json);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err : new Error('Unknown error'));
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };
    
    fetchData();
    
    return () => {
      cancelled = true;
    };
  }, [url]);
  
  return { data, loading, error };
};
```

## Mandatory Patterns

### 1. Named Exports Only
```typescript
// ✅ CORRECT
export const Button: React.FC<ButtonProps> = ({ ... }) => { ... };

// ❌ FORBIDDEN
export default function Button({ ... }) { ... }
```

### 2. Immutable State Updates
```typescript
// ✅ CORRECT
setItems([...items, newItem]);
setUser({ ...user, name: newName });

// ❌ FORBIDDEN
items.push(newItem);
user.name = newName;
```

### 3. Proper Dependency Arrays
```typescript
// ✅ CORRECT
useEffect(() => {
  doSomething(value, otherValue);
}, [value, otherValue]);

// ❌ FORBIDDEN
useEffect(() => {
  doSomething(value, otherValue);
}, []); // Missing dependencies
```

### 4. Semantic HTML
```typescript
// ✅ CORRECT
<nav>
  <ul>
    <li><a href="#home">Home</a></li>
  </ul>
</nav>

// ❌ FORBIDDEN
<div className="nav">
  <div className="list">
    <div className="item" onClick={...}>Home</div>
  </div>
</div>
```

## CSS Modules Pattern
```css
/* Component.module.css */

/* Use CSS custom properties */
.container {
  padding: var(--spacing-md);
  background: var(--color-background);
}

/* Mobile-first responsive */
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

## Performance Optimization

### Memoization
```typescript
import React, { useMemo, useCallback } from 'react';

// Expensive calculation
const expensiveValue = useMemo(() => {
  return items.reduce((acc, item) => acc + item.value, 0);
}, [items]);

// Callback for child components
const handleUpdate = useCallback((id: string) => {
  updateItem(id);
}, [updateItem]);

// Memoized component
export const MemoizedComponent = React.memo<Props>(({ data }) => {
  return <div>{data.name}</div>;
});
```

### Code Splitting
```typescript
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

export const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <HeavyComponent />
  </Suspense>
);
```

## Accessibility Requirements

### ARIA and Semantic HTML
```typescript
// ✅ CORRECT
<button 
  aria-label="Close dialog"
  onClick={handleClose}
>
  <CloseIcon />
</button>

<div 
  role="alert" 
  aria-live="polite"
>
  {errorMessage}
</div>

// Image with alt text
<img 
  src={imageSrc} 
  alt="Description of image content"
  width={300}
  height={200}
/>
```

## Error Handling Pattern
```typescript
// Async operations
const fetchUserData = async (id: string): Promise<User> => {
  try {
    const response = await fetch(`/api/users/${id}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw error;
  }
};

// Component error boundary
import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }
  
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    
    return this.props.children;
  }
}
```

## File Naming Conventions
- Components: `ComponentName.tsx`
- Hooks: `useHookName.ts`
- Utils: `utilityName.ts`
- Types: `types.ts` or `ComponentName.types.ts`
- Styles: `ComponentName.module.css`

## Import Order
```typescript
// 1. React and external libraries
import React, { useState, useEffect } from 'react';
import { externalLib } from 'external-package';

// 2. Internal components
import { Button } from '@/components/Button';
import { Header } from '@/components/Header';

// 3. Hooks
import { useAuth } from '@/hooks/useAuth';

// 4. Utils
import { formatDate } from '@/utils/formatDate';

// 5. Types
import type { User, Post } from '@/types';

// 6. Styles (always last)
import styles from './Component.module.css';
```

## Forbidden Patterns

### ❌ Never Use
```typescript
// Index as key
items.map((item, index) => <div key={index}>{item}</div>)

// Nested component definitions
const Parent = () => {
  const Child = () => <div>Child</div>;
  return <Child />;
};

// Direct state mutation
state.value = newValue;
setState(state);

// Missing cleanup in useEffect
useEffect(() => {
  const timer = setInterval(() => {}, 1000);
  // Missing: return () => clearInterval(timer);
}, []);

// Inline object/array in JSX
<Component style={{ margin: 10 }} /> // Creates new object every render
<Component items={[1, 2, 3]} /> // Creates new array every render
```

## Documentation Format
```typescript
/**
 * Brief description of what the function does
 * 
 * @param paramName - Description of parameter
 * @returns Description of return value
 * 
 * @example
 * ```typescript
 * const result = functionName('example');
 * console.log(result); // Expected output
 * ```
 */
export const functionName = (paramName: string): ReturnType => {
  // Implementation
};
```

## Testing Pattern
```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { ComponentName } from './ComponentName';

describe('ComponentName', () => {
  it('renders with correct title', () => {
    render(<ComponentName title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });
  
  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<ComponentName onClick={handleClick} />);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

## Configuration Files Reference
- `.eslintrc.cjs` - Linting rules (auto-fix available)
- `.prettierrc.cjs` - Code formatting rules
- `tsconfig.json` - TypeScript compiler options
- `vite.config.ts` - Build configuration

## Output Format
When generating code:
1. Include all necessary imports
2. Add TypeScript type annotations
3. Follow the component/hook templates above
4. Include CSS Module file if styling is needed
5. Add JSDoc comments for complex logic
6. Ensure accessibility attributes are present

## Quality Checklist
Before outputting code, verify:
- [ ] All types are explicitly defined
- [ ] No 'any' types used
- [ ] Named exports used
- [ ] Proper dependency arrays in hooks
- [ ] Immutable state updates
- [ ] Semantic HTML elements
- [ ] Accessibility attributes present
- [ ] CSS Modules for styling
- [ ] Error handling implemented
- [ ] Cleanup functions in useEffect
