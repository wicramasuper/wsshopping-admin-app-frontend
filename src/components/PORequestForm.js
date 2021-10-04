import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { useState, createRef } from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import axios from "axios";
import { useEffect } from "react";
import Select from "@mui/material/Select";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },

  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

const options = [
  "Yakkala Branch",
  "Gampaha Branch",
  "Nittabuwa Branch",
  "Kiribathgoda Branch",
  "Kadawatha Branch",
  "Mahara Branch",
];
export default function PurchaseRequestForm() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const [value, setValue] = React.useState("female");
  const [branch, setBranches] = useState([]);
  const [supplier, setSuppliers] = useState([]);

  const e = (event) => {
    setValue(event.target.value);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const [porequest, setPOrequest] = useState({
    itemName: "",
    itemPrice:"",
    itemQuantity:"",
    branch: "",
    supplierName: "",
    date: new Date(),
    priority: "",
    totalItemPrice:"",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(porequest);
    axios
      .post("http://localhost:9000/poroutes/add", porequest)
      .then((res) => {
        alert("Purchase Order added Successfully!");
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
    fetch("http://localhost:9000/supplier/")
      .then((res) => res.json())
      .then((data) => {
        setSuppliers(data);
        console.log(data);
      });
  }, []);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Purchase Request Form
      </Typography>
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
              required
              variant="outlined"
              fullWidth
              id="itemName"
              name="itemName"
              label="Item name"
              fullWidth
              autoComplete="given-name"
              onChange={(e) =>
                setPOrequest({ ...porequest, itemName: e.target.value })
              }
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              variant="outlined"
              fullWidth
              id="itemPrice"
              name="Item Price"
              label="Item Price"
              fullWidth
              autoComplete="given-name"
              onChange={(e) =>
                setPOrequest({ ...porequest, itemPrice: e.target.value })
              }
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              variant="outlined"
              fullWidth
              id="itemQuantity"
              name="Item Quantity"
              label="Item Quantity"
              fullWidth
              autoComplete="given-name"
              onChange={(e) =>
                setPOrequest({ ...porequest, itemQuantity: e.target.value })
              }
            />
          </Grid>

          <Grid item xs={12} sm={6}>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    // value={supplierName}
                    label="Branch"
                    sx={{ width: 565 }}
                    onChange={(e) =>
                      setPOrequest({ ...porequest, branch: e.target.value })
                    }
                  >
                    <MenuItem value="">
                      <em>Branch </em>
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

          <Grid item xs={12} sm={6}>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  // value={supplierName}
                  label="SupplierName"
                  sx={{ width: 565 }}
                  onChange={(e) =>
                    setPOrequest({ ...porequest, supplierName: e.target.value })
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

          <Grid item xs={12} sm={6}>
            <TextField
              required
              variant="outlined"
              fullWidth
              id="priority"
              name="priority"
              label="Item Priority"
              fullWidth
              autoComplete="given-name"
              onChange={(e) =>
                setPOrequest({ ...porequest, priority: e.target.value })
              }
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
            required
            variant="outlined"
              id="date"
              label="Order Date"
              type="date"
              sx={{ width: 200 }}
              defaultValue="2021-09-14"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) =>
                setPOrequest({ ...porequest, date: e.target.value })
              }
            />
          </Grid>

          {/* <Grid item xs={12} sm={6}>
            <TextField
              required
              variant="outlined"
              fullWidth
              id="totalItemPrice"
              name="Total Item Price"
              label="totalItemPrice"
              fullWidth
              autoComplete="given-name"
              onChange={(e) =>
                setPOrequest({ ...porequest, totalItemPrice: e.target.value })
              }
            />
          </Grid> */}
        </Grid>
        <br />
        <br />
        <Grid item xs={12}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            SUBMIT
          </Button>
        </Grid>
      </form>
    </React.Fragment>
  );
}
