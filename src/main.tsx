import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ChakraProvider, useColorMode } from '@chakra-ui/react';
import { theme } from './theme.ts';
import { Global } from '@emotion/react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Rules from './Rules.tsx';
import Leaderboard from './Leaderboard.tsx';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  {
    path: '/rules',
    element: <Rules />,
  },
  {
    path: '/leaderboard',
    element: <Leaderboard />,
  },
]);

function ColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    if (colorMode === 'light') {
      toggleColorMode();
    }
  }, [colorMode, toggleColorMode]);
  return null;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorMode />
      <Global
        styles={`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200..700&display=swap');
      @font-face {
        font-family: 'GT America Condensed';
        font-style: normal;
        font-display: swap;
        font-weight: 700;
        src: local('GT America Condensed'),
          url('https://fonts.synthetix.io/GT%20America%20Condensed%20Bold.woff2') format('woff2'),
          url('https://fonts.synthetix.io/GT%20America%20Condensed%20Bold.woff') format('woff'),
          url('https://fonts.synthetix.io/GT%20America%20Condensed%20Bold.otf') format('opentype');
      }
      @font-face {
        font-family: 'GT America Condensed';
        font-style: italic;
        font-display: swap;
        font-weight: 700;
        src: local('GT America Condensed'),
          url('https://fonts.synthetix.io/GT%20America%20Condensed%20Bold%20Italic.woff2')
            format('woff2'),
          url('https://fonts.synthetix.io/GT%20America%20Condensed%20Bold%20Italic.woff')
            format('woff'),
          url('https://fonts.synthetix.io/GT%20America%20Condensed%20Bold%20Italic.otf')
            format('opentype');
      }
      @font-face {
        font-family: 'GT America Condensed';
        font-style: normal;
        font-display: swap;
        font-weight: 100;
        src: local('GT America Condensed'),
          url('https://fonts.synthetix.io/GT%20America%20Condensed%20Thin.woff2') format('woff2'),
          url('https://fonts.synthetix.io/GT%20America%20Condensed%20Thin.woff') format('woff'),
          url('https://fonts.synthetix.io/GT%20America%20Condensed%20Thin.otf') format('opentype');
      }
      @font-face {
        font-family: 'GT America Condensed';
        font-style: italic;
        font-display: swap;
        font-weight: 100;
        src: local('GT America Condensed'),
          url('https://fonts.synthetix.io/GT%20America%20Condensed%20Thin%20Italic.woff2')
            format('woff2'),
          url('https://fonts.synthetix.io/GT%20America%20Condensed%20Thin%20Italic.woff')
            format('woff'),
          url('https://fonts.synthetix.io/GT%20America%20Condensed%20Thin%20Italic.otf')
            format('opentype');
      }
      @font-face {
        font-family: 'GT America Mono';
        font-style: normal;
        font-display: swap;
        font-weight: 700;
        src: local('GT America Mono'),
          url('https://fonts.synthetix.io/GT%20America%20Mono%20Bold.woff2') format('woff2'),
          url('https://fonts.synthetix.io/GT%20America%20Mono%20Bold.woff') format('woff'),
          url('https://fonts.synthetix.io/GT%20America%20Mono%20Bold.otf') format('opentype');
      }
      @font-face {
        font-family: 'Lustra Text';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src: local('Lustra Text'),
          url('https://fonts.synthetix.io/Lustra%20Text%20Thin.otf') format('opentype');
      }
    `}
      />
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
