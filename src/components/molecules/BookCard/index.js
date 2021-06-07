import { Box, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react';
import { BookCardStyles } from './BookCard.styles';
import ScheduleIcon from '@material-ui/icons/Schedule';
import { BookAction } from '../../atoms/BookAction';
export const BookCard = ({book, actionIcon, actionText, actionHandler}) => {

    let styles = BookCardStyles();

    return(
        <Card className={styles.root}>
            <CardMedia title={book.title}/>
            <img className={styles.image} src={book.image || 'https://external-content.duckduckgo.com/iu/?u=https://149355078.v2.pressablecdn.com/wp-content/uploads/2017/12/03194922/Top-10-Magic-Books-of-2016.jpg&f=1&nofb=1'}/>
            <CardContent>
                <Box className={styles.content}>
                <Typography variant='h5'>{book.title}</Typography>
                <Typography variant='body1'>{book.author}</Typography>
                <Typography variant='caption'><ScheduleIcon className={styles.icon}/>&nbsp;{book.duration} min read</Typography>
                </Box>
            </CardContent>
            <CardActions className={styles.actions}>
            <BookAction actionHandler={actionHandler} Icon={actionIcon}>{actionText}</BookAction>
            </CardActions>
        </Card>
    )
};
