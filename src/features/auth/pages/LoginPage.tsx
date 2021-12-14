import { Box, Button, makeStyles, Paper, Typography } from '@material-ui/core';
import { useAppDispatch } from 'app/hooks';
import * as React from 'react';
import { authAction } from '../authSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    minHeight: '100vh',
    backgroundColor: '#081421'
  },
  paper: {
    padding: '16px',
    display: 'flex',
    flexFlow: 'row nowrap',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#001830 !important',
    color: '#8a8a9a'
  },
  title: {
    color: '#fff'
  }
}));


export default function LoginPage() {
  const classes = useStyles()
  const dispatch = useAppDispatch()

  const handleLogin = () => {
    dispatch(authAction.login({
      username: 'Tim',
      password: '1234'
    }))
  }
  return (
    <div className={classes.root}>
      <Paper elevation={24} className={classes.paper}>
        <Typography variant='h5' component='h1' className={classes.title}>Student management</Typography>
        <Box mt={4} >
          <Button variant="contained" color="secondary" onClick={handleLogin}>
            Login
          </Button>
        </Box>
      </Paper>
    </div >
  );
}
