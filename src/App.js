import React from 'react';
import { styled, ThemeProvider } from 'styled-components';
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
import {
  ArrowLeft,
  ArrowRight,
  HeartIcon,
  Music,
  Pause,
  Play,
  Search,
  SkipLeft,
  SkipRight,
  Volume,
} from 'components/UI/Icons';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainTitle>Hello</MainTitle>
      <SectionTitle>Hello</SectionTitle>
      <SectionSubtitle>Hello</SectionSubtitle>
      <Text>Hello</Text>
      <SubText>Hello</SubText>
      <ButtonText>Hello</ButtonText>
      <Play color="white" />
      <SkipLeft color="white" />
      <SkipRight color="white" />
      <Pause color="white" />
      <Volume color="white" />
      <Music color="black" />
      <ArrowLeft color="white" />
      <ArrowRight color="white" />
      <Search color="white" />
      <HeartIcon color="white" />
    </ThemeProvider>
  );
}
export default App;
