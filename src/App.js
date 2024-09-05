import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
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
      <SkeletonTheme
        baseColor={theme.colors.secondaryBlack}
        highlightColor={theme.colors.lightWhite}
      >
        <GlobalStyles />
        <Header />
        <HomePage />
      </SkeletonTheme>
    </ThemeProvider>
  );
}
export default App;
