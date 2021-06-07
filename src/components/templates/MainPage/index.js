import { Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { NavBar } from '../../organisms/NavBar';
import { StatusTab } from '../../atoms/StatusTab';
import { BookList } from '../../organisms/BookList';


export const MainPage = ({data}) => {
    let [tab, setTab] = useState(0);

    const tabChange = (event, newValue) => {
        setTab(1-tab);
    }
    return(<>
    <NavBar/>
    <Typography variant='h2' style={{ fontWeight: 800, marginBottom: '0.5em' }}>My Library</Typography>
    <StatusTab value={tab} handleTabChange={tabChange} data={data} Component={BookList}/>
    </>);
};
