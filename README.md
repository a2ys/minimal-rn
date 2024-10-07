# MinimalRN: Minimal React Native Components

MinimalRN is a collection of minimalistic React Native components that are easy to use and customize. The components are designed to be simple and easy to understand, making it easy to build beautiful and functional apps with React Native.

## Installation

You can install the MinimalRN library using npm in your React Native project:

```bash
npm install minimal-rn
```

or

```bash
npm i minimal-rn
```

## Usage

Here’s a simple example of how to use the MinimalRN components:

```typescript
import React from 'react';
import { View } from "react-native";
import { PrimaryButton, OutlinedButton } from 'minimal-rn';

const App = () => {
  return (
    <View>
      <PrimaryButton />
      <OutlinedButton />
    </View>
  );
};

export default App;
```

## Features

As of now, MinimalRN includes the following components:

- Button
  - The button component is a simple button that can be customized with different colors and styles. Currently, it has two preconfigured styles: primary and outlined.

## Development

MinimalRN is currently in BETA and is under active development. If you have any feedback or suggestions, please feel free to open an issue or submit a pull request.

## Contributing

Contributions are most welcome. To get started, please follow these steps:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

## Changelog

### [0.0.1] - 2024-10-07

- Initial release with PrimaryButton and OutlinedButton components.

## Contact

For any inquiries or support, please contact [Aayush Shukla](mailto:me@a2ys.dev).

## Acknowledgments

Thanks to the [React Native](https://reactnative.dev/) community for their support and resources.
