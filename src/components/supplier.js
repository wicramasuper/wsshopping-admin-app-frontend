import React from "react";
import { useState, createRef } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
// import TextField from "@material-ui/core/TextField";
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
import TextField from "@mui/material/TextField";
import { ValidatorComponent } from "react-material-ui-form-validator";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

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

    // marginTop: theme.spacing(),
    // marginBottom: theme.spacing(3),
    // padding: theme.spacing(2),
    // [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
    //   marginTop: theme.spacing(0),
    //   marginBottom: theme.spacing(6),
    //   padding: theme.spacing(3),
    // },
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
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  // paper: {
  //   marginTop: theme.spacing(),
  //   marginBottom: theme.spacing(3),
  //   padding: theme.spacing(2),
  //   [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
  //     marginTop: theme.spacing(0),
  //     marginBottom: theme.spacing(6),
  //     padding: theme.spacing(3),
  //   },
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

  const [value, setValue] = React.useState("internalSupplier");

  // //error handelling
  // const [supplierNameErr, setsupplierNameErr] = useState({});
  // const [locationErr, setLocationErr] = useState({});
  // ........../
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const classes = useStyles();

  //code goes here...

  const [supplier, setSupplier] = useState({
    supplierName: "",
    supplierEmail: "",
    phoneNumber: "",
    productType: "",
    supplierType: "",
    supplierItemType: "",
    location: "",
    branchWillingToSupply: "",
    date: new Date(),
    branches: [{}],
    category: [{}],
  });

  const [branch, setBranches] = useState([]);
  const [category, setCategory] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(supplier);

    axios
      .post("http://localhost:9000/supplier/add", supplier)
      .then((res) => {
        alert("Supplier Successfully added!");
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  };
  useEffect(() => {
    fetch("http://localhost:9000/branch/")
      .then((res) => res.json())
      .then((data) => {
        setBranches(data);
        console.log(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:9000/category/")
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
        console.log(data);
      });
  }, []);

  //modal part
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <main className={classes.layout}>
        {/* <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 1000,
              height: 600,
              marginLeft: 500,
            },
          }}
        > */}
        {/* <Paper elevation={3} /> */}
        <Paper className={classes.paper} elevation={10}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />

            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              <center> ADD Supplier </center>
            </Typography>
            {/* <Paper elevation={3} /> */}
            <form
              className={classes.form}
              noValidate
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="SupplierName"
                    name="supplierName"
                    variant="outlined"
                    required
                    fullWidth
                    id="supplierName"
                    sx={{ width: 395 }}
                    label="Supplier Name"
                    autoFocus
                    onChange={(e) =>
                      setSupplier({
                        ...supplier,
                        supplierName: e.target.value,
                      })
                    }
                    // onChange={(e) => e.target.checked ? setContract({...supplier,supplierName: e.target.value}):(null)}
                  />
                  {/* <div className="ui fluid selection dropdown">
                <input type="hidden" name="user" />
                <i className="dropdown icon"></i>
                <div className="default text">Select Supplier Name</div>
                <div className="menu">
                  {supplier ? supplier.map((sup) => {
                    return(
                      <div key={sup._id} className="item" data-value="jenny">
                      <img
                        className="ui mini avatar image"
                        src="/images/avatar/small/jenny.jpg"
                      />
                      Jenny Hess
                    </div>
                    )
                  }): (null)}
                  
                </div>
              </div> */}
                  {/* <select>
              {supplier ? supplier.map((sup) => {
                return(
                <div key={sup._id}>
                  <option value={sup._id}>{sup.supplierName}</option>
                </div>
                  
                )
              }): (null)}
              </select> */}
                </Grid>
                {/* {Object.keys(supplierNameErr).map((key)=>{
                      return <div style={{color : "red"}}>{supplierNameErr[key]}</div>
                    })} */}
                <Grid item xs={12}>
                  <TextField
                    autoComplete="SupplierEmail"
                    name="supplierEmail"
                    variant="outlined"
                    required
                    fullWidth
                    id="supplierEmail"
                    label="supplier Email"
                    // type="email"
                    autoFocus
                    onChange={(e) =>
                      setSupplier({
                        ...supplier,
                        supplierEmail: e.target.value,
                      })
                    }
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
                    type="phone"
                    autoComplete="PhoneNumber"
                    autoFocus
                    onChange={(e) =>
                      setSupplier({
                        ...supplier,
                        phoneNumber: e.target.value,
                      })
                    }
                  />
                </Grid>
                {/* <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="productType"
                    label="Product Category "
                    name="Product Type"
                    autoComplete="Product Type"
                    autoFocus
                    onChange={(e) =>
                      setSupplier({
                        ...supplier,
                        productType: e.target.value,
                      })
                    }
                  />
                </Grid> */}

                <Grid item xs={12}>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    // value={supplierName}
                    label="Product Category"
                    sx={{ width: 395 }}
                    onChange={(e) =>
                      setSupplier({
                        ...supplier,
                        productType: e.target.value,
                      })
                    }
                  >
                    <MenuItem value="">
                      <em>Product Category</em>
                    </MenuItem>
                    {category
                      ? category.map((cat) => {
                          return (
                            <MenuItem value={cat.category}>
                              {cat.category}
                            </MenuItem>
                          );
                        })
                      : null}
                  </Select>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Supplier Type</FormLabel>
                    <RadioGroup
                      aria-label="supplierType"
                      name="supplierType"
                      value={value}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="internalSupplier"
                        control={<Radio />}
                        label="Internal Supplier"
                        onChange={(e) =>
                          setSupplier({
                            ...supplier,
                            supplierType: e.target.value,
                          })
                        }
                      />
                      <FormControlLabel
                        value="externalSupplier"
                        control={<Radio />}
                        label="External Supplier"
                        onChange={(e) =>
                          setSupplier({
                            ...supplier,
                            supplierType: e.target.value,
                          })
                        }
                      />
                      <FormControlLabel
                        value="wickrama Supplier"
                        control={<Radio />}
                        label="Wickrama Supplier"
                        onChange={(e) =>
                          setSupplier({
                            ...supplier,
                            supplierType: e.target.value,
                          })
                        }
                      />
                      {/* <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" /> */}
                    </RadioGroup>
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                  {/* <TextField
                id="date"
                label="Date"
                type="date"
                defaultValue="2021-09-14"
                className={classes.textField}
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) =>
                  setSupplier({ ...supplier, date: e.target.value })
                }
              /> */}
                  <TextField
                    id="date"
                    label="Date"
                    type="date"
                    defaultValue="2017-05-24"
                    sx={{ width: 187 }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="supplierItemType"
                    name="supplierItemType"
                    variant="outlined"
                    required
                    ful
                    lWidth
                    sx={{ width: 395 }}
                    id="supplierItemType"
                    label="Supplier Item"
                    autoFocus
                    onChange={(e) =>
                      setSupplier({
                        ...supplier,
                        supplierItemType: e.target.value,
                      })
                    }
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
                    onChange={(e) =>
                      setSupplier({ ...supplier, location: e.target.value })
                    }
                  />
                </Grid>
                {/* {Object.keys(locationErr).map((key)=>{
                      return <div style={{color : "red"}}>{locationErr[key]}</div>
                    })} */}
                <Grid item xs={12}>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    // value={supplierName}
                    label="Branch Willing To Supply"
                    sx={{ width: 395 }}
                    onChange={(e) =>
                      setSupplier({
                        ...supplier,
                        branchWillingToSupply: e.target.value,
                      })
                    }
                  >
                    <MenuItem value="">
                      <em>Branch Willing To Supply</em>
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
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
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

              {/* <Grid container justifyContent="flex-end"></Grid> */}
            </form>
          </Container>
        </Paper>
        {/* <Box mt={5}>
              <Copyright />
            </Box> */}

        {/* </Box> */}
      </main>
    </React.Fragment>
  );
}
