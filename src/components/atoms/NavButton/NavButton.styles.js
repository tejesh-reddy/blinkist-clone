import React from 'react';
import { makeStyles } from '@material-ui/core';


export const NavButtonStyles = makeStyles((theme) => {
    return({
        button: {
            padding: '0.5em',
            backgroundColor: '#fff',
            margin: theme.spacing(2),
            '&:hover': {
                border: 'none',
                borderBottom: `2px solid ${theme.palette.secondary.main}`,
                background: 'none',
                cursor: 'pointer',
            }
        },
    })
});
