import { useTheme } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';
import { Box, IconButton, Icon } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

function Layout({ children }) {
  const chakraTheme = useTheme();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [mainContentMargin, setMainContentMargin] = useState(false);
  const toggleSidebar = () => {
    setMainContentMargin(!isSidebarOpen ? '200px' : '0');
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box
      backgroundColor={chakraTheme.colors.brand.primary}
      w="100vw"
      h="100vh"
      display="flex"
    >
      <IconButton
        top="0"
        size="md"
        left="5px"
        zIndex="999"
        marginTop="5px"
        variant="outline"
        position="absolute"
        aria-label="Call Sage"
        onClick={toggleSidebar}
        isActive={isSidebarOpen}
        icon={<Icon as={HamburgerIcon} />}
      />
      <Sidebar isOpen={isSidebarOpen} setIsSidebarOpen={toggleSidebar} />
      <Box
        flex="1"
        padding="2rem"
        marginLeft={mainContentMargin} // Aplica a margem esquerda com base no estado do menu lateral
      >
        {/* Conteúdo principal da sua aplicação */}
        {children}
      </Box>
    </Box>
  );
}

export default Layout;
