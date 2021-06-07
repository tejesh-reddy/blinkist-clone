import React from 'react';
import { makeStyles } from '@material-ui/core';


export const NavBarStyles = makeStyles((theme) => {
    return {
        root: {
            width: '98%',
            display: 'flex',
            justifyContent: 'space-between',
            border: 'none',
            background: 'none',
        },
        main: {
            border: '0',
            boxShadow: '0px 0px',
            marginBottom: '2em',
        },
        logo: {
            width: 130,
            height: 80,
            marginRight: theme.spacing(2),
        },
        group: {
            width: '60%',
            display: 'flex',
            marginLeft: '-2em',
            justifyContent: 'space-between',
            alignItems: 'center',
        }
    }
});
