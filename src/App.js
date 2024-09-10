import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { theme } from 'Styles/Theme';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyles } from 'Styles/Global';
import Header from 'components/Header';
import HomePage from 'pages/Home';
import Player from 'components/Player';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SkeletonTheme
        baseColor={theme.colors.secondaryBlack}
        highlightColor={theme.colors.lightWhite}
      >
        <GlobalStyles />
        <Header />
        <Player />
        <HomePage />
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </SkeletonTheme>
    </ThemeProvider>
  );
}
export default App;
