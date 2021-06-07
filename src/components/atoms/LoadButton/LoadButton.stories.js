import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { LoadButton } from '.';
import { DefaultTheme } from '../../../theme';

export default {
component: LoadButton,
title: 'LoadButton'
};

export const Default = () => <ThemeProvider theme={DefaultTheme}><LoadButton/></ThemeProvider>