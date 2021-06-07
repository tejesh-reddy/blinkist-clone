import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { BookCard } from '../../molecules/BookCard';


export const BookList = ({books, actionHandler, actionIcon, actionText, noBooksText}) => {

    return (
        (books !== null && books.length !== 0)?
        <Grid container spacing={4}>
        {books.map(book => (
        <Grid item xs={12} md={6} lg={4} key={book.title}>
            <BookCard book={book} actionHandler={actionHandler(book)} actionIcon={actionIcon} actionText={actionText}/>
        </Grid>))}
        </Grid> :
        <Typography variant='h6'>{noBooksText}</Typography>
    );
};
