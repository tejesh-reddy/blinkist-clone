import React from 'react';
import { HelpButton } from '.';
import { storiesOf } from '@storybook/react';
import { DefaultTheme } from '../../../theme';
import { ThemeProvider } from '@material-ui/core';

export default {
component: HelpButton,
title: 'HelpButton' 
};

export const Default = () => <ThemeProvider theme={DefaultTheme}><HelpButton/></ThemeProvider>;