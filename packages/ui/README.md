# @ngunawan/ui

A shared UI component library for the monorepo.

## Installation

```bash
npm install @ngunawan/ui
# or
pnpm add @ngunawan/ui
# or
yarn add @ngunawan/ui
```

## Usage

```tsx
import { Button, Card, Code } from '@ngunawan/ui';

function App() {
  return (
    <div>
      <Button>Click me</Button>
      <Card>
        <Code>console.log('Hello, world!');</Code>
      </Card>
    </div>
  );
}
```

## Components

- `Button` - A reusable button component
- `Card` - A card container component  
- `Code` - A code display component

## Development

This package is part of a monorepo and uses TypeScript for type safety.

```bash
# Build the package
pnpm build

# Type check
pnpm check-types

# Lint
pnpm lint
```