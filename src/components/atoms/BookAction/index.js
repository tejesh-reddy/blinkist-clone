import React from 'react';
import { Button } from '@material-ui/core';
import { BookActionStyles } from './BookAction.styles';

export const BookAction = ({Icon, actionHandler, children}) => {

    const styles = BookActionStyles();

    return(
        <Button variant='contained' color='secondary'
        className={styles.root}
        startIcon={<Icon />}
        onClick={actionHandler}>{children}</Button>
    )
};
