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

import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const drawerWidth = 140;

const useStyles = makeStyles((theme) => ({
  root: {
   flexGrow: 1,
 },
 paper: {

   padding: theme.spacing(2),
   textAlign: 'center',
   color: 'theme.palette.text.secondary',
   height: 150
 },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor:'blue',

  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),

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

    <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            AapKiDavai
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
        backgroundColor="blue"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {['My Account', 'My Order', 'Track Order', 'Vault'].map((text, index) => (
            <ListItem button key={text}>

              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Wallet', 'Basket', 'Wishlist'].map((text, index) => (
            <ListItem button key={text}>

              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div style={{margin:80, marginLeft:150, marginRight:10}} >
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
      </div>
      <div  style={{marginLeft:150}} >
      <Grid container spacing={2} >
        <Grid container item xs={12} spacing={2}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={2}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={2}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={2}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={2}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={2}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={2}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={2}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={2}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={2}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  </div>

  );
}

export default App;
