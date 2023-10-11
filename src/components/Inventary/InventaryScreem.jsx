import React, { useCallback } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';

function InventaryScreem({ filteredData, drawerFunction }) {
  const { setSelectedItem, setIsDrawerOpen } = drawerFunction;
  const handleItemClick = useCallback((item) => {
    setSelectedItem(item);
    setIsDrawerOpen(true);
  });

  return (
    <TableContainer>
      <Table
        variant="striped"
        colorScheme="teal"
        size="sm" // Tamanho menor
      >
        <Thead>
          <Tr>
            <Th>Código do produto</Th>
            <Th>Nome do Produto</Th>
            <Th>Quantidade</Th>
            <Th>Preço (item)</Th>
            <Th>Preço (total)</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredData.map((item) => (
            <Tr
              key={item.id}
              onClick={() => handleItemClick(item)}
              style={{ cursor: 'pointer' }}
            >
              <Td>{item.code}</Td>
              <Td>{item.productName}</Td>
              <Td>{item.quantity + ' ' + item.quantityType}</Td>
              <Td>{item.price}</Td>
              <Td>{item.price * item.quantity}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default InventaryScreem;
