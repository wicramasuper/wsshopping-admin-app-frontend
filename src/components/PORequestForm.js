import React from 'react';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { useState, createRef } from "react";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({

  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  

  root: {
    display: 'flex',
   
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

const options = ['Yakkala Branch', 'Gampaha Branch', 'Nittabuwa Branch','Kiribathgoda Branch','Kadawatha Branch','Mahara Branch'];
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

  const [value, setValue] = React.useState('female');

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

  const [porequest,setPOrequest] = useState({
    itemName: "",
    branch: "",
    supplierName: "",
    date: new Date(),
    priority: ""
  })

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(porequest);
      axios.post('http://localhost:9000/poroutes/add',porequest).then(res => {
          alert('Purchase Order added Successfully!');
      }).catch(error => {
          console.log(error.message);
          alert(error.message);
      })
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Purchase Request Form
      </Typography>
      <form className={classes.form} noValidate onSubmit={(e) => {handleSubmit(e)}}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="itemName"
            name="itemName"
            label="Item name"
            fullWidth
            autoComplete="given-name"
            onChange={(e) => setPOrequest({...porequest,itemName: e.target.value})}
          />
        </Grid>

        {/* <Grid item xs={12} sm={6}>
        <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          Select Branch
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="branch" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose}>Yakkala Branch</MenuItem>
                    <MenuItem onClick={handleClose}>Gampaha Brancht</MenuItem>
                    <MenuItem onClick={handleClose}>Nittabuwa Branch</MenuItem>
                    <MenuItem onClick={handleClose}>Kiribathgoda Branch</MenuItem>
                    <MenuItem onClick={handleClose}>Kadawatha Branch</MenuItem>
                    <MenuItem onClick={handleClose}>Mahara Branch</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
    </Grid> */}
    <Grid item xs={12} sm={6}>
    <Grid container direction="column" alignItems="center">
      <Grid item xs={12}>
        <ButtonGroup variant="contained" color="primary" ref={anchorRef} aria-label="split button">
          <Button onClick={handleClick}>{options[selectedIndex]}</Button>
          <Button
            color="primary"
            size="small"
            aria-controls={open ? 'split-button-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-label="select merge strategy"
            aria-haspopup="menu"
            onClick={handleToggle}
          >
            <ArrowDropDownIcon />
          </Button>
        </ButtonGroup>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="branch">
                    {options.map((option, index) => (
                      <MenuItem
                        key={option}
                        disabled={index === 2}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                        onChange={(e) => setPOrequest({...porequest,branch: e.target.value})}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Grid>
    </Grid>
    </Grid>

    <Grid item xs={12} sm={6} >
          <TextField
            required
            id="supplierName"
            name="supplierName"
            label="Supplier name"
            fullWidth
            autoComplete="given-name"
            onChange={(e) => setPOrequest({...porequest,supplierName: e.target.value})}
          />
        </Grid>

    <Grid item xs={12} >
          <TextField
            required
            id="priority"
            name="priority"
            label="Item Priority"
            fullWidth
            autoComplete="given-name"
            onChange={(e) => setPOrequest({...porequest,priority: e.target.value})}
          />
        </Grid>


        {/* <Grid item xs={12} >
        <FormControl component="fieldset">
      <FormLabel component="legend">Item Priority</FormLabel>
      <RadioGroup aria-label="priority" name="priority" value={value} onChange={(e) => setPOrequest({...porequest,priority: e.target.value})}>
        <FormControlLabel value="critical" control={<Radio />} label="Critical" />
        <FormControlLabel value="normal" control={<Radio />} label="Normal" />
        <FormControlLabel value="highPriority" control={<Radio />} label="High Priority" />
      </RadioGroup>
    </FormControl>
    </Grid> */}


        {/* <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
          /> */}
        {/* </Grid> */}
        {/* <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
          />
        </Grid> */}
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid> */}

<Grid item xs={12} >
       <TextField
        id="date"
        label="Order Date"
        type="date"
        defaultValue="2021-09-14"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e) => setPOrequest({...porequest,date: e.target.value})}
      />
      </Grid>
      </Grid>
      <br/>
      <br/>
      <Grid item xs={12} >
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