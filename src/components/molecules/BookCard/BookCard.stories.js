import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import { BookCard } from '.';
import { DefaultTheme } from '../../../theme';


export default {
component: BookCard,
title: 'BookCard'
};


export const Default = () => <ThemeProvider theme={DefaultTheme}><BookCard/></ThemeProvider>;