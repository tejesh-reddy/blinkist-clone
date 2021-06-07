import React from 'react';
import { BookAction } from '.';
import AddIcon from '@material-ui/icons/Add';
import { ThemeProvider } from '@material-ui/styles';
import { DefaultTheme } from '../../../theme';

export default {
component: BookAction,
title: 'BookAction'
};

export const Default = () => <ThemeProvider theme={DefaultTheme}><BookAction Icon={AddIcon}>Book Action</BookAction></ThemeProvider> 
