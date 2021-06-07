import React from 'react';
import { makeStyles } from '@material-ui/core';
export const LoadButtonStyles = makeStyles((theme) => ({
    root: {

    },
    button: {
        border: '1px solid black',
        borderRadius: '8%',
        padding: '0.5em 7em',
        textAlign: 'center',

        '&:hover': {
            border: '1px solid black',
        }
    }
}));
