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
  
  // const useStyles = makeStyles((theme) => ({
  //   paper: {
  //     marginTop: theme.spacing(0),
  //     display: 'flex',
  //     flexDirection: 'column',
  //     alignItems: 'center',
  //   },
  //   avatar: {
  //     margin: theme.spacing(1),
  //     backgroundColor: theme.palette.secondary.main,
  //   },
  //   form: {
  //     width: '100%', // Fix IE 11 issue.
  //     marginTop: theme.spacing(3),
  //   },
  //   submit: {
  //     margin: theme.spacing(3, 0, 2),
  //   },
  // }));

export default function AddContract() {

    const [SupplierName, setsupplierName] = useState("");
    const { id } = useParams();

    const [AgreementDate, setagreementDate] = useState("");
    const [branchWillingToSupply, setBranchWillingToSupply] = useState("");
    const [productType, setProductType] = useState("");
    const [contractPeriod, setContractPeriod] = useState("");
    const [Description, setdescription] = useState("");
   

    useEffect(() => {
      async function getData(){
            const result = await (await axios.get(`http://localhost:9000/contract/${id}`)).data.data
            console.log(result)
            //console.log(result[0].supplierName)
            setsupplierName(SupplierName.SupplierName);
            setagreementDate(AgreementDate.AgreementDate);
            setBranchWillingToSupply(branchWillingToSupply.branchWillingToSupply);
            setContractPeriod(contractPeriod.contractPeriod);
            setdescription(Description.Description);
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

  const [contract,setContract] = useState({
    SupplierName: "",
    AgreementDate: new Date(),
    branchWillingToSupply:"",
    productType: "",
    contractPeriod: new Date(),
    Description:""
  })

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(contract);
      axios.put(`http://localhost:9000/contract/updateCont/${id}`,contract).then(res => {
          alert('Contract Updated Successfully!');
          window.location="/contractDetails"
      }).catch(error => {
          console.log(error.message);  
          alert(error.message);
      })
  }

  return (
    <div className={classes.root}>
    {/* <Paper variant="outlined" square/> */}
    <Container component="main" maxWidth="xs">
       <CssBaseline />
       <div className={classes.paper}>
         {/* <Avatar className={classes.avatar}>
           <LockOutlinedIcon />
         </Avatar> */}
         <Avatar className={classes.orange}>C</Avatar>
        <br/>
         <Typography component="h1" variant="h5" >
           UPDATE CONTRACT
         </Typography>
         <br/>
         <form className={classes.form} noValidate onSubmit={(e) => {handleSubmit(e)}}>
           <Grid container spacing={2}>
             <Grid item xs={12} sm={6}>
              <TextField
                 autoComplete="SupplierName"
                name="SupplierName"
                 variant="outlined"
                required
                 fullWidth
                 id="SupplierName"
                 label="Supplier Name"
                 autoFocus
                 onChange={(e) => setContract({...contract,SupplierName: e.target.value})}
               />
             </Grid>
             
             <Grid item xs={12} sm={6}>
             <form className={classes.container} noValidate>
                <TextField
                variant="outlined"
                  id="AgreementDate"
                  label="AgreementDate"
                  type="date"
                  defaultValue="2021-09-14"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(e) => setContract({...contract,AgreementDate: e.target.value})}
                />
              </form>
               </Grid>
             
            <Grid item xs={12} sm={6}>
             <TextField
                 variant="outlined"
                 fullWidth
                 name="branchWillingToSupply"
                 label="branchWillingToSupply"
                 type="text"
                 id="branchWillingToSupply"
                 onChange={(e) => setContract({...contract,branchWillingToSupply: e.target.value})}
               />
             </Grid>
           <Grid item xs={12} sm={6}>
             <TextField
                 variant="outlined"
                 required
                 fullWidth
                 id="productType"
                 label="productType"
                 name="Product Type"
                 autoComplete="productType"
                 autoFocus
                 onChange={(e) => setContract({...contract,productType: e.target.value})}
               />
                </Grid>
            
             {/* <Grid item xs={12}>
             <TextareaAutosize
                 autoComplete="Description"
                 name="Description"
                 variant="outlined"
                 required
                 ful lWidth
                 id="Description"
                 label="Description"
                 autoFocus
                 maxRows={12}
                 aria-label="maximum height"
                 placeholder="Contract Aggrement Details"
                 defaultValue=""
                 onChange={(e) => setContract({...contract,Description: e.target.value})}
                
               />  
            </Grid> */}
            <hr/>
            <Grid item xs={12} sm={6}>
            <TextField  
          id="Description"
          label="Description"
          multiline
          rows={5}
          placeholder="Contract Aggrement Details"
          variant="outlined"
          onChange={(e) => setContract({...contract,Description: e.target.value})}
        />
        </Grid>
        <Grid item xs={6}>
               <Grid item xs={12} >
             <form className={classes.container} noValidate>
                <TextField
                variant="outlined"
                  id="contractPeriod"
                  label="Contract End Date"
                  type="date"
                  defaultValue="2021-09-14"
                  disablePast
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}


                  onChange={(e) => setContract({...contract,contractPeriod: e.target.value})}
                />
              </form>
               </Grid>
               <br/>
               <br/>
               <br/>
      
       </Grid>
        <Grid item xs={12}>
               <FormControlLabel
                 control={<Checkbox value="allowExtraEmails" color="primary" />}
                 label="Do hereby declare that what is stated above is true to the best of my information."
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
     </div>
  );
}
