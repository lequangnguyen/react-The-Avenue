import React from 'react';
import { scroller } from 'react-scroll';
import Drawer from '@material-ui/core/Drawer';
import { List, ListItem } from '@material-ui/core';


const SideDrawer = (props) => {

    const scrollToElement = (element) => {
        scroller.scrollTo(element, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -150

        })
    }

    return (
        <Drawer
            anchor='right'
            open={props.open}
            onClose={() => props.onClose(false)}
        >
            <List component='nav'>
                <ListItem button onClick={() => scrollToElement("event_start")}>
                    Event starts in
                </ListItem>
                <ListItem button onClick={() => scrollToElement("venue_nfo")}>
                    Venue NFO
                </ListItem>
                <ListItem button onClick={() => scrollToElement('highlights')}>
                    Highlights
                </ListItem>
                <ListItem button onClick={() => scrollToElement('pricing')}>
                    Pricing
                </ListItem>
                <ListItem button onClick={() => scrollToElement('location')}>
                    Location
                </ListItem>

            </List>

        </Drawer>
    );
};

export default SideDrawer;