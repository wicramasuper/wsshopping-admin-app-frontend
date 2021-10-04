import React from 'react';
import "./style.css"
import {Link} from 'react-router-dom';
import wsLogo from './wsLogo.jpg';
import Header from './Header';

import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
//import { createTheme } from '@material-ui/core/styles';
// import purple from '@material-ui/core/colors/purple';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

// const theme = createTheme({
//   palette: {
//     secondary: {
//       main: '#f44336',
//       contrastText: '#f44336',
//     },
//   },
// });

export default function Sidebar(){

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  
return(
// const Sidebar =({children})=>(
  

    
    <div>
<aside class="sidebar position-fixed top-0 left-0 overflow-auto h-100 float-left" id="show-side-navigation1">
  <i class="uil-bars close-aside d-md-none d-lg-none" data-close="show-side-navigation1"></i>
  <div class="sidebar-header d-flex justify-content-center align-items-center px-3 py-4">
    <img
         class="rounded-pill img-fluid"
         width="160"
         src={wsLogo}
         
         alt=""/>
    <div class="ms-2">
      <h5 class="fs-6 mb-0">
        <Link></Link>
      </h5>
      <p class="mt-1 mb-0"></p>
    </div>
  </div>

  <div class="search position-relative text-center px-4 py-3 mt-2">
    
  </div>

  <ul class="categories list-unstyled">
    <li class="has-dropdown">
      <i class="uil-estate fa-fw"></i><Link style={{color:"red",fontSize:"22px"}} to="/"> Admin Dashboard</Link>
      
    </li>
    <li class="">
      <i class="uil-folder"></i><Link to="/">Item Management</Link>
    </li>
    
    {/* <li class="has-dropdown">
      <i class="uil-envelope-download fa-fw"></i><Link to="/"> Purchase & Inventory</Link>
       
    </li> */}
     {/* Link created to Purchase Management */}
    {/* <li>
    <div className={classes.root}>
      <div>
        <Button
        class="btn btn-secondary"
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          color="secondary"
        >
          Purchases Management
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                  <li className="nav-item">
                  <MenuItem onClick={handleClose}><Link to="/productadd" className="nav-link">Add Product</Link></MenuItem>
                  </li>
                    <MenuItem onClick={handleClose}>My </MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
    </li> */}

    {/* Link created to Supplier Management */}

    {/* <li>
    <div className={classes.root}>
      <div>
        <Button
        class="btn btn-secondary"
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          color="secondary"
        >
          Supplier Management
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                  <li className="nav-item">
                  <MenuItem onClick={handleClose}><Link to="/productadd" className="nav-link">Add Product</Link></MenuItem>
                  </li>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
    </li> */}

<li>
<div class="ui compact menu" class="ui purple basic button">
  <div class="ui simple dropdown item">
    Supplier Management
    <i class="dropdown icon"></i>
    <div class="menu">
      <div class="item"><Link to="/supplieradd" className="nav-link">Add suppliers</Link></div>
      <div class="item"><Link to="/supplierDetails" className="nav-link">Supplier Details</Link></div>
    </div>
  </div>
</div>
</li>

<li>
<div class="ui compact menu" class="ui blue basic button">
  <div class="ui simple dropdown item">
    Purchase Management
    <i class="dropdown icon"></i>
    <div class="menu">
      <div class="item"><Link to="/generatePO" className="nav-link">PO Management</Link></div>
      {/* <div class="item"><Link to="/POFinalForm" className="nav-link">PO Details</Link></div> */}
      <div class="item"></div>
    </div>
  </div>
</div>
</li>
<li>
<div class="ui compact menu" class="ui olive basic button"> 
  <div class="ui simple dropdown item">
    Inventory Management
    <i class="dropdown icon"></i>
    <div class="menu">
      <div class="item"><Link to="/branchAdd" className="nav-link">Create Branch</Link></div>
      <div class="item"><Link to="/branchDetails" className="nav-link">Branch Details</Link></div>
    </div>
  </div>
</div>
</li>
<li>
<div class="ui compact menu" class="ui negative basic button">
  <div class="ui simple dropdown item" >
    Contract Management
    <i class="dropdown icon"></i>
    <div class="menu">
      <div class="item"> <Link to="/contractAdd" className="nav-link">Contract Management</Link></div>
      <div class="item"> <Link to="/contractDetails" className="nav-link">Contract Details</Link></div>
    </div>
  </div>
</div>
</li>
    
    <li class="has-dropdown">
      <i class="uil-panel-add"></i><Link>User Report</Link>
      
    </li>
    <li class="">
      <i class="uil-map-marker"></i><Link> My Profile</Link>
    </li>
  </ul>
</aside>

<section id="wrapper">

  {<nav class="navbar navbar-expand-md">
    <div class="container-fluid mx-2">
      <div class="navbar-header">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#toggle-navbar" aria-controls="toggle-navbar" aria-expanded="false" aria-label="Toggle navigation">
          <i class="uil-bars text-white"></i>
        </button>
        <Link to="/" class="navbar-brand">WS<span class="main-color">Shopping</span></Link>
      </div>
      
    </div>
  </nav> }
{/*   
    <Header/> */}
  <div class="p-4">
    <div class="welcome">
      <div class="content rounded-3 p-3">
          <div class="body-bg"> 
      {/* <div>{children}</div> */}
      </div>

      </div>
      
   </div>
    
  </div>
</section>

</div>
);
}
