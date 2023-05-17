import React, { useState } from 'react';
import { ChakraProvider, Box, Button, Input, VStack } from '@chakra-ui/react';

function LoginWidget() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Lógica para autenticação e redirecionamento após o login
  };

  return (
    <Box w="300px" p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
      <form onSubmit={handleFormSubmit}>
        <VStack spacing={4}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <Button colorScheme="blue" type="submit">
            Login
          </Button>
        </VStack>
      </form>
    </Box>
  );
}

function App() {
  return (
    <ChakraProvider>
      <LoginWidget />
    </ChakraProvider>
  );
}

export default App;
