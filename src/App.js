import React from 'react';
import { styled, ThemeProvider } from 'styled-components';
import { theme } from './Styles/Theme';

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Title>Hello</Title>
    </ThemeProvider>
  );
}

export default App;
