import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import { Dashboard, PeopleAlt } from '@material-ui/icons';
import React from 'react';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },

    link: {
        color: 'inherit',
        textDecoration: 'none',

        '&.active > div': {
            backgroundColor: '#3f51b5',
            color: "#fff",
        },
        '&.active svg': {
            color: "#fff",
        },
    },
}));

export function Sidebar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {/* <List component="nav" aria-label="main mailbox folders"> */}
            <Box mt={4}>
                <NavLink to="/admin/dashboard" className={classes.link}>
                    <ListItem button>
                        <ListItemIcon>
                            <Dashboard />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                </NavLink>

                <NavLink to="/admin/students" className={classes.link}>
                    <ListItem button>
                        <ListItemIcon>
                            <PeopleAlt />
                        </ListItemIcon>
                        <ListItemText primary="Students" />
                    </ListItem>
                </NavLink>
            </Box>
            {/* </List> */}
        </div>
    );
}