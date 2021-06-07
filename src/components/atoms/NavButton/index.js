import { Button } from '@material-ui/core';
import React from 'react';
import { NavButtonStyles } from './NavButton.styles';


export const NavButton = ({children}) => {

    const styles = NavButtonStyles();
    
    const getClasses = () => {
        return styles.button;
    }

    return(
        <div className={getClasses()}>
            {children}
        </div>
    )
};
