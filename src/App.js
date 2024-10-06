// External libraries
import React, { useEffect, useReducer } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'rc-slider/assets/index.css';
import { ErrorBoundary } from 'react-error-boundary';

// Local components

// Styled components and global styles
import { theme } from 'Styles/Theme';
import { GlobalStyles } from 'Styles/Global';
import { initialState, playerReducer } from 'context/playerReducer';
import { PlayerContext, PlayerDispatchContext } from 'context/playerContext';
import { Route, Routes } from 'react-router-dom';

import { setStorageValue } from 'Services/localStorage';

import AppRouter from 'AppRouter';

function App() {
  const [state, dispatch] = useReducer(playerReducer, initialState);

  useEffect(() => {
    setStorageValue('savedTrackIds', state.savedTrackIds);
  }, [state.savedTrackIds]);

  return (
    <PlayerContext.Provider value={state}>
      <PlayerDispatchContext.Provider value={dispatch}>
        <ThemeProvider theme={theme}>
          <SkeletonTheme
            baseColor={theme.colors.secondaryBlack}
            highlightColor={theme.colors.lightWhite}
          >
            <GlobalStyles />
            <AppRouter />
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
