// Sidebar.js
import React, { useState } from 'react';
import InventaryFilter from './InventaryFilter';
import InventaryScreem from './InventaryScreem';
import InventoryDrawer from './InventoryDrawer';

import { Box } from '@chakra-ui/react';

const Inventary = () => {
  // Dados fictícios para simular a resposta da API
  const fakeInventoryData = [
    {
      id: 1,
      code: '1a2b3c',
      productName: 'Produto A',
      quantity: 10,
      price: 25.99,
      quantityType: 'kg',
    },
    {
      id: 2,
      code: '1a2b3c',
      productName: 'Produto B',
      quantity: 5,
      price: 15.99,
      quantityType: 'un',
    },
    {
      id: 3,
      code: '1a2b3c',
      productName: 'Produto C',
      quantity: 20,
      price: 30.49,
      quantityType: 'L',
    },
    {
      id: 3,
      code: '1a2b3c',
      productName: 'Produto D',
      quantity: 20,
      price: 30.49,
      quantityType: 'M',
    },
    // Adicione mais dados fictícios aqui
  ];

  const [filteredData, setFilteredData] = useState(fakeInventoryData);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%" // Altura total da tela
    >
      <InventaryFilter
        filteredData={filteredData}
        setFilteredData={setFilteredData}
        fakeInventoryData={fakeInventoryData}
      />
      <InventaryScreem
        filteredData={filteredData}
        drawerFunction={{
          setIsDrawerOpen: setIsDrawerOpen,
          setSelectedItem: setSelectedItem,
        }}
      />
      <InventoryDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        selectedItem={selectedItem}
      />
    </Box>
  );
};

export default Inventary;
