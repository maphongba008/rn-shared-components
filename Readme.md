Shared components for React Native

## Installation

```bash
npm install --save rn-shared-components
```

or

```bash
yarn add rn-shared-components
```

## Components

### Box

This component is a simple wrapper for View component. It has the same props as View component and some additional props listed in [Box Props](components/Box/Box.props.md)

```jsx
import { Box } from "rn-shared-components";

const App = () => (
  <Box mFull mCenter mMarginTopLarge>
    <Text>Hello World</Text>
  </Box>
);
```

### TouchableOpacity

This component is a simple wrapper for TouchableOpacity component. It has the same props as TouchableOpacity component and some additional props listed in [Box Props](components/Box/Box.props.md)

```jsx
import { TouchableOpacity } from "rn-shared-components";

const App = () => (
  <TouchableOpacity mFull mCenter mMarginTopLarge>
    <Text>Hello World</Text>
  </TouchableOpacity>
);
```

### Text

This component is a simple wrapper for Text component. It has the same props as Text component and some additional props listed in [Text Props](components/Text/Text.props.md)

```jsx
import { Text } from "rn-shared-components";

const App = () => (
  <Text mFull mAlignCenter mMarginTopLarge>
    Hello World
  </Text>
);
```

### To add custom props

Checkout the sample at [Custom Props](./components/Custom.sample.tsx)
