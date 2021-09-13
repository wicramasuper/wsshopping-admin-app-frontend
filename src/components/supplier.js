import React from 'react';
import { useState, createRef } from "react";
import { useEffect } from "react"
import { useParams } from "react-router";
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
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

export default function AddSupplier() {

  const [supplierName, setsupplierName] = useState("");
    const { id } = useParams();

    const [supplierEmail, setSupplierEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [productType, setProductType] = useState("");
    const [supplierType, setSupplierType] = useState("");
    const [supplierItemType, setSupplierItemType] = useState("");
    const [location, setLocation] = useState("");
    const [branchWillingToSupply, setBranchWillingToSupply] = useState("");
    const [date, setDate] = useState("");
   

    const [value, setValue] = React.useState('internalSupplier');
  
    const handleChange = (event) => {
      setValue(event.target.value);
    }

    

  const classes = useStyles();

  //code goes here...


  const [supplier,setSupplier] = useState({
    supplierName: "",
    supplierEmail: "",
    phoneNumber: "",
    productType:"",
    supplierType: "",
    supplierItemType:"",
    location:"",
    branchWillingToSupply:"",
    date: new Date(),
    // contracts: [{}]
  })

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(supplier);
      axios.post('http://localhost:9000/supplier/add',supplier).then(res => {
          alert('Supplier Successfully added!');
      }).catch(error => {
          console.log(error.message);
          alert(error.message);
      })
  }

  return (
    <Container component="main" maxWidth="xs" >
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" >
          ADD Supplier
        </Typography>
        <form className={classes.form} noValidate onSubmit={(e) => {handleSubmit(e)}}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
             <TextField
                autoComplete="SupplierID"
                name="supplierName"
                variant="outlined"
                required
                fullWidth
                id="supplierName"
                label="Supplier Name"
                autoFocus
                onChange={(e) => setSupplier({...supplier,supplierName: e.target.value})}
                // onChange={(e) => e.target.checked ? setContract({...supplier,supplierName: e.target.value}):(null)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
             <TextField
                autoComplete="SupplierEmail"
                name="supplierEmail"
                variant="outlined"
                required
                fullWidth
                id="supplierEmail"
                label="supplier Email"
                autoFocus
                onChange={(e) => setSupplier({...supplier,supplierEmail: e.target.value})}
              />
              </Grid>


            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phoneNumber"
                label="phoneNumber"
                name="phoneNumber"
                autoComplete="PhoneNumber"
                autoFocus
                onChange={(e) => setSupplier({...supplier,phoneNumber: e.target.value})}
              />
               </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="productType"
                label="Product Type"
                name="Product Type"
                autoComplete="Product Type"
                autoFocus
                onChange={(e) => setSupplier({...supplier,productType: e.target.value})}
              />
               </Grid>
            <Grid item xs={12} sm={6}>
                 <FormControl component="fieldset">
                <FormLabel component="legend">Supplier Type</FormLabel>
                <RadioGroup aria-label="supplierType" name="supplierType" value={value} onChange={handleChange}>
                    <FormControlLabel value="internalSupplier" control={<Radio />} label="Internal Supplier" onChange={(e) => setSupplier({...supplier,supplierType: e.target.value})}/>
                    <FormControlLabel value="externalSupplier" control={<Radio />} label="External Supplier" onChange={(e) => setSupplier({...supplier,supplierType: e.target.value})} />
                    <FormControlLabel value="wickrama Supplier" control={<Radio />} label="Wickrama Supplier" onChange={(e) => setSupplier({...supplier,supplierType: e.target.value})}/>
                    {/* <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" /> */}
                </RadioGroup>
                
                </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                      <TextField
                  id="date"
                  label="Date"
                  type="Date"
                  defaultValue="2021-09-14"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(e) => setSupplier({...supplier,date: e.target.value})}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                autoComplete="supplierItemType"
                name="supplierItemType"
                variant="outlined"
                required
                ful lWidth
                id="supplierItemType"
                label="Supplier Item Type"
                autoFocus
                onChange={(e) => setSupplier({...supplier,supplierItemType: e.target.value})}
              />
               
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="location"
                label="Location"
                name="location"
                autoComplete="location"
                onChange={(e) => setSupplier({...supplier,location: e.target.value})}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="branchWillingToSupply"
                label="branchWillingToSupply"
                type="text"
                id="branchWillingToSupply"
                onChange={(e) => setSupplier({...supplier,branchWillingToSupply: e.target.value})}
              />
            </Grid>
            {/* <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="date"
                label="Date"
                autoComplete="date"
                id="date"
                onChange={(e) => setSupplier({...supplier,date: e.target.value})}
              />
            </Grid> */}
            
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
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
           ADD SUPPLIER
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
           RESET ALL
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
