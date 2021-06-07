import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { DefaultTheme } from '../../../theme';
import { NavBar } from '.';

export default {
component: NavBar,
title: 'NavBar'
};

export const Default = () => <ThemeProvider theme={DefaultTheme}><NavBar/></ThemeProvider>
