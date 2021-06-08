import React from 'react';
import { MainPage } from '.';
import { DefaultBooks } from '../../../helpers/data';
export default {
component: MainPage,
title: 'MainPage'
};

const args = {
    data: [
        {
            label: 'Currently Reading',
            args: {
                books: DefaultBooks,
                actionHandler: () => console.log('Finished book'),
                actionIcon: DoneIcon,
                actionText: 'Mark as Read',
                noBooksText: "You've read em all! :)"
            }
        },
        {
            label: 'Finished',
            args: {
                books: [],
                actionHandler: ()=>console.log('Read again'),
                actionIcon: ReplayIcon,
                actionText: 'Read Again',
                noBooksText: "You haven't read anything completely yet :)"
            }
        }
};

export const Default = () => <MainPage {...args}/>