import React, { useEffect } from "react";
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
import axios from "axios";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { TextareaAutosize } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Paper from "@material-ui/core/Paper";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import { useParams } from "react-router";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import { Header, Image, Modal } from "semantic-ui-react";
import { Form, Field } from "formik";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      <Link color="inherit" href="https://material-ui.com/">
        Wickrama Super Online Shopping Store
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  paper: {
    marginTop: theme.spacing(),
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(0),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
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
  //display date
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  }, //end date

  root: {
    display: "flex",
    "& > *": {
      // margin: theme.spacing(50),
      // width: theme.spacing(150),
      // height: theme.spacing(60),
      // marginTop: theme.spacing(8),
    },
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  paper: {
    marginTop: theme.spacing(0),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function AddContract() {
  const [SupplierName, setsupplierName] = useState("");
  const { id } = useParams();

  const [AgreementDate, setagreementDate] = useState("");
  const [branchWillingToSupply, setBranchWillingToSupply] = useState("");
  const [productType, setProductType] = useState("");
  const [contractPeriod, setContractPeriod] = useState("");
  const [Description, setdescription] = useState("");

  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const classes = useStyles();

  //code goes here...

  const [contract, setContract] = useState({
    SupplierName: "",
    AgreementDate: new Date(),
    branchWillingToSupply: "",
    productType: "",
    contractPeriod: new Date(),
    Description: "",
    suppliers: [{}],
  });

  const [supplier, setSuppliers] = useState([]);
  const [branch, setBranches] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contract);
    axios
      .post("http://localhost:9000/contract/add", contract)
      .then((res) => {
        alert("Contract Created Successfully!");
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  };

  useEffect(() => {
    fetch("http://localhost:9000/supplier/")
      .then((res) => res.json())
      .then((data) => {
        setSuppliers(data);
        console.log(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:9000/branch/")
      .then((res) => res.json())
      .then((data) => {
        setBranches(data);
        console.log(data);
      });
  }, []);


  return (
    <React.Fragment>
      <main className={classes.layout}>
          <Paper className={classes.paper} elevation={10}>
    {/* // <div className={classes.root}> */}
      {/* <Paper variant="outlined" square/> */}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
         <center> <Avatar className={classes.orange}>C</Avatar></center>
          <br />
          <Typography component="h1" variant="h5">
           <center> ADD CONTRACT</center>
          </Typography>
          <br />
          <form
            className={classes.form}
            noValidate
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                {/* <TextField
                 autoComplete="SupplierName"
                name="SupplierName"
                 variant="outlined"
                required
                 fullWidth
                 id="SupplierName"
                 label="Supplier Name"
                 autoFocus
                 onChange={(e) => setContract({...contract,SupplierName: e.target.value})}
               /> */}
                {/* <select>
              {supplier ? supplier.map((sup) => {
                return(
                // <div key={sup._id}>
                  <option value={sup._id}>{sup.supplierName}</option>
                // </div>
                  
                )
              }): (null)}
              </select> */}
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  // value={supplierName}
                  label="SupplierName"
                  sx={{ width: 395 }}
                  onChange={(e) =>
                    setContract({ ...contract, SupplierName: e.target.value })
                  }
                >
                  <MenuItem value="">
                    <em>Supplier Name</em>
                  </MenuItem>
                  {supplier
                    ? supplier.map((sup) => {
                        return (
                          <MenuItem value={sup.supplierName}>
                            {sup.supplierName}
                          </MenuItem>
                        );
                      })
                    : null}
                </Select>
              </Grid>

              <Grid item xs={12}>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    // value={supplierName}
                    label="Branch Willing To Supply"
                    sx={{ width: 395 }}
                    onChange={(e) =>
                      setContract({
                        ...contract,
                        branchWillingToSupply: e.target.value,
                      })
                    }
                  >
                    <MenuItem value="">
                      <em>Branch Willing To Supply </em>
                    </MenuItem>
                    {branch
                      ? branch.map((bran) => {
                          return (
                            <MenuItem value={bran.branchName}>
                              {bran.branchName}
                            </MenuItem>
                          );
                        })
                      : null}
                  </Select>
                </Grid>

              <Grid item xs={12} >
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="productType"
                  label="productType"
                  name="Product Type"
                  autoComplete="productType"
                  autoFocus
                  onChange={(e) =>
                    setContract({ ...contract, productType: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6} >
                <form className={classes.container} noValidate>
                  <TextField
                    id="AgreementDate"
                    variant="outlined"
                    label="AgreementDate"
                    type="date"
                    defaultValue="2021-09-14"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) =>
                      setContract({
                        ...contract,
                        AgreementDate: e.target.value,
                      })
                    }
                  />
                </form>
              </Grid>
              <Grid item xs={12} sm={6} >
                  <form className={classes.container} noValidate>
                    <TextField
                      id="contractPeriod"
                      variant="outlined"
                      label="Contract End Date"
                      type="date"
                      defaultValue="2021-09-14"
                      disablePast
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      onChange={(e) =>
                        setContract({
                          ...contract,
                          contractPeriod: e.target.value,
                        })
                      }
                    />
                  </form>
                  
                </Grid>
              <hr />
              <Grid item xs={12} >
                <TextField
                  id="Description"
                  label="Description"
                  multiline
                  rows={5}
                  sx={{ width: 395 }}
                  placeholder="Contract Aggrement Details"
                  variant="outlined"
                  onChange={(e) =>
                    setContract({ ...contract, Description: e.target.value })
                  }
                />
              </Grid>
               
                <br />
                <br />
                <br />
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
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
              APPROVE
            </Button>
            {/* <Grid container justifyContent="flex-end"></Grid> */}
          </form>
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
