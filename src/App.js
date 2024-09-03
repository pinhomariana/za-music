import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'Styles/Theme';
import {
  ButtonText,
  MainTitle,
  SectionSubtitle,
  SectionTitle,
  SubText,
  Text,
} from './components/UI/Typography';
import { GlobalStyles } from 'Styles/Global';
import Header from 'components/Header';
import HomePage from 'pages/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <HomePage />
    </ThemeProvider>
  );
}
export default App;
