import React from 'react';
import { makeStyles } from '@material-ui/core';

export const BookCardStyles = makeStyles((theme) => {
    return({
    root: {
        width: '100%',
        padding: '0',
        margin: '0',
        border: '1px transparent'
    },
    icon: {
        width: '0.6em',
        height: '0.6em',
    },
    image: {
        width: '100%',
        maxHeight: 300,
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        height: '8em',
        width: '100%',
    },
    actions: {
        padding: 0,
    }
    });
});
