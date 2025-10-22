# @ngunawan/ui

A cross-platform UI component library for React and React Native applications.

## Installation

```bash
npm install @ngunawan/ui
# or
pnpm add @ngunawan/ui
# or
yarn add @ngunawan/ui
```

## Platform Support

This package supports both **React (Web)** and **React Native** applications with platform-specific implementations.

### For React (Web) Applications

```tsx
import { Button, Card, Code } from '@ngunawan/ui';

function App() {
  return (
    <div>
      <Button 
        onClick={() => console.log('Clicked!')}
        className="my-button-class"
      >
        Click me
      </Button>
      <Card>
        <Code>console.log('Hello, world!');</Code>
      </Card>
    </div>
  );
}
```

### For React Native Applications

```tsx
import { Button, Card, Code } from '@ngunawan/ui/native';

function App() {
  return (
    <View>
      <Button 
        onPress={() => console.log('Pressed!')}
        style={{ backgroundColor: '#007AFF' }}
        titleStyle={{ color: 'white' }}
      >
        Press me
      </Button>
      <Card>
        <Code>console.log('Hello, world!');</Code>
      </Card>
    </View>
  );
}
```

## Components

### Button

Cross-platform button component with platform-specific implementations.

#### Web Props (WebButtonProps)
- `children: ReactNode` - Button content
- `onClick?: () => void` - Click handler (web)
- `onPress?: () => void` - Alternative handler (works on both platforms)
- `className?: string` - CSS class (web only)
- `type?: "button" | "submit" | "reset"` - Button type (web only)
- `disabled?: boolean` - Disabled state
- `testID?: string` - Test identifier

#### React Native Props (NativeButtonProps)
- `children: ReactNode` - Button content
- `onPress?: () => void` - Press handler
- `style?: StyleProp<ViewStyle>` - Container style (React Native only)
- `titleStyle?: StyleProp<TextStyle>` - Text style (React Native only)
- `disabled?: boolean` - Disabled state
- `testID?: string` - Test identifier

### Card
A container component that works on both platforms.

### Code
A code display component that works on both platforms.

## TypeScript Support

The package includes full TypeScript definitions with platform-specific types:

```tsx
import type { WebButtonProps, NativeButtonProps } from '@ngunawan/ui';
// or
import type { WebButtonProps } from '@ngunawan/ui';
import type { NativeButtonProps } from '@ngunawan/ui/native';
```

## Development

This package is part of a monorepo and uses TypeScript for type safety.

```bash
# Install dependencies (includes React Native types)
pnpm install

# Build the package
pnpm build

# Type check
pnpm check-types

# Lint
pnpm lint
```

## Peer Dependencies

- `react`: ^18.0.0 || ^19.0.0
- `react-dom`: ^18.0.0 || ^19.0.0 (optional, for web only)
- `react-native`: >=0.70.0 (optional, for React Native only)

The package automatically uses the correct implementation based on your platform setup.