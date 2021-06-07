import { AppBar, Box, Container, Paper, Tab, Tabs } from '@material-ui/core';
import React, { useState } from 'react';
import { StatusTabStyles } from './StatusTab.styles';


export const StatusTab = ({value, handleTabChange, data, Component}) => {

    let styles = StatusTabStyles();

    const TabOption = ({val, index}) => {
        return(
            <>
            {(val === index)? 
            <Component {...data[val].args}/>
            :
            false}
            </>
        )
    }

    return(
    <><Paper square
    elevation={0}
    className={styles.root}>
        <Tabs
        value={value}
        indicatorColor="secondary"
        onChange={handleTabChange}
        >
            <Tab value={0} label={data[0].label} className={(value === 0)? styles.active : null}/>
            <Tab value={1} label={data[1].label} className={(value === 1)? styles.active : null}/>
        </Tabs>
    </Paper>
    <Box className={styles.tabOption}><TabOption className={styles.tabOption} val={value} index={0}/>
    <TabOption className={styles.tabOption} val={value} index={1}/>
    </Box>
    </>
    );
};
