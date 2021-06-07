import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@material-ui/core';
import { NavButton } from '../../atoms/NavButton'; 
import logo from '../../atoms/logo.svg';
import { NavBarStyles } from './NavBar.styles';


export const NavBar = () => {

    let styles = NavBarStyles();

    return(
        <AppBar position='static' color='transparent' className={styles.main}>
            <Toolbar className={styles.root}>
                <Box className={styles.group}>
                <img src={logo} className={styles.logo} alt="Blinkist logo"/>
                <NavButton><Typography variant='body1'>Explore</Typography></NavButton>
                <NavButton><Typography variant='body1'>Library</Typography></NavButton>
                <NavButton><Typography variant='body1'>Add Book</Typography></NavButton>
                </Box>
                <NavButton><Typography variant='body1'>Account</Typography></NavButton>
            </Toolbar>
        </AppBar>   
    )
};
