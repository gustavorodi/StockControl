// Sidebar.js
import React, { useState, useCallback } from 'react';
import { useTheme } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';

function Sidebar({ isOpen }) {
  const chakraTheme = useTheme();

  return (
    <Box
      top="0"
      bottom="0"
      width="200px"
      position="fixed"
      background={chakraTheme.colors.brand.accent}
      transition="left 0.3s"
      left={isOpen ? '0' : '-200px'}
      transform={`translateX(${isOpen ? '0' : '-200px'})`} // Usa transform para mover o menu lateral
    ></Box>
  );
}

export default Sidebar;
