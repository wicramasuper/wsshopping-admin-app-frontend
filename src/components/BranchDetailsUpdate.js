import React from 'react';
import { useState, createRef } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from 'axios';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { TextareaAutosize } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Paper from '@material-ui/core/Paper';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import { useParams } from "react-router";
import { useEffect } from "react"


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

    //display date
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },//end date

    root: {
      display: 'flex',
      '& > *': {
        // margin: theme.spacing(50),
        // width: theme.spacing(150),
        // height: theme.spacing(60),
        // marginTop: theme.spacing(8),
      },
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
    },
    paper: {
      marginTop: theme.spacing(0),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
   
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

export default function AddBranch() {

    const [branchName, setBranchName] = useState("");
    const { id } = useParams();

    const [AgreementDate, setagreementDate] = useState("");
    const [registereddate, setRegistereddate] = useState("");
    const [branchTell, setBranchTell] = useState("");
    const [description, setDescription] = useState("");
   

    useEffect(() => {
      async function getData(){
            const result = await (await axios.get(`http://localhost:9000/branch/${id}`)).data.data
            console.log(result)
            //console.log(result[0].supplierName)
            setBranchName(branchName.branchName);
            setagreementDate(AgreementDate.AgreementDate);
            setBranchTell(branchTell.branchTell);
            setDescription(description.description);
            // console.log(supplierName)
        }
        getData()
    }, [])


  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

//   const [contractold,setcontractold]=useState([]);

//   useEffect(()=>{
//   fetch(`http://localhost:9000/supplier/${id}`)
//   .then((res) => res.json())
//   .then((data) => {
//     setsupplierold(data);
//     console.log(data);
//   });
// }, []);
  

  //code goes here...

  const [branch,setBranch] = useState({
    branchName: "",
    registereddate: new Date(),
    branchTell:"",
    description: "",
  })

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(branch);
      axios.put(`http://localhost:9000/branch/updateBranch/${id}`,branch).then(res => {
          alert('Branch Updated Successfully!');
          window.location="/BranchDetails"
      }).catch(error => {
          console.log(error.message);  
          alert(error.message);
      })
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <div className={classes.root}>
      <Avatar className={classes.purple}>AB</Avatar>
    </div>
        <Typography component="h1" variant="h5">
          UPDATE BRANCH
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
                required
                ful lWidth
                id="registereddate"
                label="Branch registereddate"
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
            UPDATE
          </Button>
          <Grid container justifyContent="flex-end">
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

