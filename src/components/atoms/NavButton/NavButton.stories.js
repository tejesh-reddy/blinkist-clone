import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { NavButton } from '.';
import { DefaultTheme } from '../../../theme';
export default {
component: NavButton,
title: 'NavButton'
};

export const Default = () => <ThemeProvider theme={DefaultTheme}><NavButton>Navigation</NavButton></ThemeProvider>