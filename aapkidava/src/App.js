import React from 'react';
import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import IconButton from '@material-ui/core/IconButton';
import './App.css';


const useStyles = makeStyles((theme) => ({
  root: {
   flexGrow: 1,
 },
 paper: {

   padding: theme.spacing(2),
   textAlign: 'center',
   color: theme.palette.text.secondary,
 },
}));


function App() {
  const classes = useStyles();

  function FormRow() {
      return (
        <React.Fragment>
          <Grid item xs={4}>
            <Paper className={classes.paper}>Health Drink</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>Paracetamol</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>Disprine</Paper>
          </Grid>
        </React.Fragment>
      );
    }

  return (
    <div className="App">
    <div>
      <header className="App-header">
        <h5>AppKiDava </h5>
      </header>
    </div>

      <AppBar position="static" color="default">
        <Tabs
          indicatorColor="primary"
          textColor="red"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Medicine"  />
          <Tab label="Ayurvedic"  />
          <Tab label="Health Product"  />
          <Tab label="Personal Care"  />
          <Tab label="Generic Medicine"  />
          <Tab label="Consult Doctor" />
          <Tab label="My order"  />
        </Tabs>
      </AppBar>
      <div >
      <Grid container spacing={2} >
        <Grid container item xs={12} spacing={5}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={5}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={5}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={5}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={5}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={5}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={5}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={5}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={5}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={5}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  </div>

  );
}

export default App;
