import React from 'react';
import { Button } from '@material-ui/core';
import { HelpButtonStyles } from './HelpButton.styles';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

export const HelpButton = () => {

    const styles = HelpButtonStyles();

    return (
    <Button variant="contained" color="primary" 
    className={styles.helpButton} 
    startIcon={<HelpOutlineIcon/>}
    disableElevation>
        Help
        </Button>);
};
