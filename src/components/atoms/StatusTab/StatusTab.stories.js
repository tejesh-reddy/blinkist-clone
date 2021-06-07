import { ThemeProvider } from '@material-ui/styles';
import React, { useState } from 'react';
import { DefaultTheme } from '../../../theme';
import { StatusTab } from '.';
export default {
component: StatusTab,
title: 'StatusTab'
};

let data = [
    {
        label: 'Active',
        args: {
            children: 'This is active'
        }
    },
    {
        label: 'Other',
        args: {
            children: 'Changed to this now'
        }
    }
];

let Comp = ({children}) => <div>{children}</div>;

export const Default = () => (<ThemeProvider theme={DefaultTheme}>
    <StatusTab value={0} handleTabChange={() => {}}
    data={data} Component={Comp}/>
    </ThemeProvider>)