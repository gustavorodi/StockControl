import { useTheme } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import theme from '../theme';

function Layout({ children }) {
  const chakraTheme = useTheme();

  return (
    <Box
      backgroundColor={chakraTheme.colors.brand.primary}
      w="100vw"
      h="100vh"
      display="flex"
    >
      {children}
    </Box>
  );
}

export default Layout;
