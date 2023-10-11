import React, { useCallback, useState } from 'react';
import { Input, Button, Box } from '@chakra-ui/react';

const InventaryFilter = ({ setFilteredData, fakeInventoryData }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = useCallback(() => {
    // Filtrar os dados com base no termo de pesquisa
    const filteredItems = fakeInventoryData.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredItems);
  });

  return (
    <>
      <Box display="flex" alignItems="center" marginBottom="1rem">
        <Input
          placeholder="Filtrar por nome do produto"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button onClick={handleSearch}>Filtrar</Button>
      </Box>
    </>
  );
};

export default InventaryFilter;
