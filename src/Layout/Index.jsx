import { useTheme } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';

function Layout({ children }) {
  const chakraTheme = useTheme();

  return (
    <Box
      backgroundColor={chakraTheme.colors.brand.primary}
      w="100vw"
      h="100vh"
      display="flex"
    >
      {/* Adicione o Sidebar aqui */}
      <Sidebar />
      {/* Conteúdo principal */}
      {children}
    </Box>
  );
}

export default Layout;
