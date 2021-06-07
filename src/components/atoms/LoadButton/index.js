import React from 'react';
import { Button, Container } from '@material-ui/core';
import { LoadButtonStyles } from './LoadButton.styles';


export const LoadButton = () => {
    const styles = LoadButtonStyles();

    return (
            <Button className={styles.button} variant='outlined' color='primary'
            >
                Load More
            </Button>
    );

};
