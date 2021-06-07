import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { BookList } from '.';
import { DefaultTheme } from '../../../theme';

export default {
component: BookList,
title: 'BookList'
};

export const Default = () => <ThemeProvider theme={DefaultTheme}><BookList/></ThemeProvider>