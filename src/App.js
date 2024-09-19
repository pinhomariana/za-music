// External libraries
import React, { useReducer } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'rc-slider/assets/index.css';

// Local components
import Header from 'components/Header';
import HomePage from 'pages/Home';
import Player from 'components/Player';

// Styled components and global styles
import { theme } from 'Styles/Theme';
import { GlobalStyles } from 'Styles/Global';
import { initialState, playerReducer } from 'context/playerReducer';
import { PlayerContext, PlayerDispatchContext } from 'context/playerContext';

function App() {
  const [state, dispatch] = useReducer(playerReducer, initialState);

  return (
    <PlayerContext.Provider value={state}>
      <PlayerDispatchContext.Provider value={dispatch}>
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
      </PlayerDispatchContext.Provider>
    </PlayerContext.Provider>
  );
}
export default App;
