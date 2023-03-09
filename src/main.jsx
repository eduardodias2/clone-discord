import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './Pages/App';
import GlobalStyle from './styles/global'
import { ThemeProvider } from 'styled-components';
import themeColors from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme = {themeColors}>
    <App />
    <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
)
