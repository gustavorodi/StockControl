import React from 'react';
import {
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from '@chakra-ui/react';

function InventoryDrawer({ isOpen, onClose, selectedItem }) {
  if (!isOpen) {
    return null;
  }

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Detalhes do Item</DrawerHeader>
          <DrawerBody>
            <Box>
              <strong>Nome do Produto:</strong> {selectedItem.productName}
            </Box>
            <Box>
              <strong>Quantidade:</strong> {selectedItem.quantity}
            </Box>
            <Box>
              <strong>Preço (item):</strong> {selectedItem.price}
            </Box>
            <Box>
              <strong>Preço (total):</strong>{' '}
              {selectedItem.quantity * selectedItem.price}
            </Box>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}

export default InventoryDrawer;
