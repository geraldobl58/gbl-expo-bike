import { Box, NativeBaseProvider } from "native-base";

import { theme } from "./src/styles/theme";

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Box flex="1" bg={theme.colors.primary[100]}></Box>
    </NativeBaseProvider>
  );
}
