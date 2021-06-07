import React from 'react';
import { makeStyles } from '@material-ui/core';
export const StatusTabStyles = makeStyles((theme) => {
    return {
        root: {
            borderBottom: '0.2px solid #cdc'
        },
        active: {
            fontWeight: 800,
            color: theme.palette.secondary.main,
        },
        tabOption: {
            marginTop: '2em',
        }
    }
});
