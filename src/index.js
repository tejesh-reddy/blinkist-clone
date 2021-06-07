import React from 'react';
import { hot } from 'react-hot-loader/root'
import ReactDOM from 'react-dom';
import { App } from './components/App';
import { ThemeProvider } from '@material-ui/core';
import { DefaultTheme } from './theme';

const render = (Component) =>
  ReactDOM.render(
      <ThemeProvider theme={DefaultTheme}><Component/></ThemeProvider>
  , document.getElementById("root"));

render(hot(App))

