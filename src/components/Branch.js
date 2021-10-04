import React, { useEffect } from "react";
import { useState, createRef } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import axios from 'axios';
import {Link} from 'react-router-dom';
import wslogo from "../images/wslogo.jpg"
import Paper from "@material-ui/core/Paper";


function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        <Link color="inherit" href="https://material-ui.com/">
        Wickrama Super Online Shopping Store
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const useStyles = makeStyles((theme) => ({

    appBar: {
      position: "relative",
    },
    paper: {
      marginTop: theme.spacing(1),
      // marginLeft:theme.spacing(4),
      padding: theme.spacing(0),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(0),
        marginBottom: theme.spacing(0),
        padding: theme.spacing(0),
      },
  
    },
    layout: {
      width: "auto",
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: "auto",
        marginRight: "auto",
      },
    },

    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    purple: {
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500],
    },
   
    // avatar: {
    //   margin: theme.spacing(1),
    //   backgroundColor: theme.palette.secondary.main,
    // },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

export default function AddBranch() {

  const classes = useStyles();

  //code goes here...

  const [branch,setBranch] = useState({
    branchName: "",
    registereddate: new Date(),
    branchTell: "",
    description: ""
  })

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(branch);
      axios.post('http://localhost:9000/branch/add',branch).then(res => {
          alert('Branch Successfully added!');
      }).catch(error => {
          console.log(error.message);
          alert(error.message);
      })
  }

  process.on('unhandledRejection', (reason, p) => {
    console.error('Unhandled Rejection at:', p, 'reason:', reason)
    process.exit(1)
  });

  return (
    <React.Fragment>
      <main className={classes.layout}>
          <Paper className={classes.paper} elevation={10}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
    <div id="slider">
      <figure>
        <img src={wslogo} alt />
      </figure>
      </div>
        <Typography component="h1" variant="h5">
          ADD BRANCH
        </Typography>
        <form className={classes.form} noValidate onSubmit={(e) => {handleSubmit(e)}}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
             <TextField
                autoComplete="pname"
                name="branchName"
                variant="outlined"
                required
                fullWidth
                id="branchName"
                label="Branch Name"
                autoFocus
                onChange={(e) => setBranch({...branch,branchName: e.target.value})}
              />
              </Grid>
               
            <Grid item xs={12}>
                  <TextField
                   name="registereddate"
                   variant="outlined"
                    id="registereddate"
                    label="Branch registereddate"
                    type="date"
                    defaultValue="2017-05-24"
                    sx={{ width: 187 }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    autoFocus
                    onChange={(e) => setBranch({...branch,registereddate: e.target.value})}
                  />
                </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="branchTell"
                label="Branch Tell NO"
                name="branchTell"
                autoComplete="branchTell"
                onChange={(e) => setBranch({...branch,branchTell: e.target.value})}
              />
            </Grid>
           
                <Grid item xs={12}>
                <TextField
                autoComplete="des"
                name="description"
                variant="outlined"
                required
                ful lWidth
                id="description"
                label="Branch Description"
                autoFocus
                onChange={(e) => setBranch({...branch,description: e.target.value})}
              />
           
          </Grid>    
          </Grid>     
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            ADD BRANCH
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/branchDetails" variant="body2">
                check available branches
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
     </Paper>
     {/* </div> */}
     {/* <Box mt={5}>
       <Copyright />
     </Box>
   </Container> */}
 {/* </div> */}
 </main>
 </React.Fragment>
  );
}
