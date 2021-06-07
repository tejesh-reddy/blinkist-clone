import { Container } from '@material-ui/core';
import React, { useState } from 'react';
import { DefaultBooks } from '../helpers/data';
import { MainPage } from './templates/MainPage';
import ReplayIcon from '@material-ui/icons/Replay';
import DoneIcon from '@material-ui/icons/Done';

export const App = () => {

    const [books, setBooks] = useState(DefaultBooks);
    const [finishedBooks, setFinishedBooks] = useState([]);
    const addBook = (newBook) => {
        setFinishedBooks([...finishedBooks, newBook]);
        setBooks(books.filter(book => book.title !== newBook.title));
    }
    const removeBook = (bookToRemove) => {
        setBooks([...books, bookToRemove]);
        setFinishedBooks(finishedBooks.filter(book => book.title !== bookToRemove.title));
    }

    const addHandler = (book) => {
        return () => addBook(book);
    }
    const removeHandler = (book) => {
        return () => removeBook(book);
    }


    let data = [
        {
            label: 'Currently Reading',
            args: {
                books,
                actionHandler: addHandler,
                actionIcon: DoneIcon,
                actionText: 'Mark as Read',
                noBooksText: "You've read em all! :)"
            }
        },
        {
            label: 'Finished',
            args: {
                books: finishedBooks,
                actionHandler: removeHandler,
                actionIcon: ReplayIcon,
                actionText: 'Read Again',
                noBooksText: "You haven't read anything completely yet :)"
            }
        }
    ];

    return(
        <Container maxWidth='md'>
            <MainPage data={data}/>
            <div style={{ height: '30px'}}/>
        </Container>
    )
}