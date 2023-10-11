// Sidebar.js
import React, { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';

function Sidebar({ isOpen, setIsSidebarOpen }) {
  return (
    <Box
      position="fixed"
      top="0"
      left={isOpen ? '0' : '-250px'}
      width="250px"
      height="100%"
      background="gray.800"
      color="white"
      transition="left 0.3s"
    >
      <Text fontSize="2xl" p="4">
        Menu
      </Text>
      {/* Adicione os itens do menu aqui */}
    </Box>
  );
}

export default Sidebar;
