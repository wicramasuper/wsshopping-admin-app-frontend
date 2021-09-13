import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';


import { green, pink } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import PageviewIcon from '@material-ui/icons/Pageview';
import AssignmentIcon from '@material-ui/icons/Assignment';

import { createTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom';
import SoloAlert from 'soloalert'
import axios from 'axios';
import { MDBCol } from "mdbreact";


const columns = [
  { id: 'supplierName',
    label: 'Supplier Name',
    minWidth: 100,
    align: 'center',
    main: '#f44336',
  },
  {
    id: 'supplierEmail',
    label: 'Supplier Email',
    minWidth: 170,
    align: 'center',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'phoneNumber',
    label: 'Phone Number',
    minWidth: 170,
    align: 'center',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'productType',
    label: 'Product Type',
    minWidth: 170,
    align: 'center',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'supplierType',
    label: 'Supplier Type',
    minWidth: 170,
    align: 'center',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'supplierItemType',
    label: 'Supplier Item Type',
    minWidth: 170,
    align: 'center',
    // format: (value) => value.toFixed(2),
  },
  {
    id: 'location',
    label: 'Location',
    minWidth: 170,
    align: 'center',
    // format: (value) => value.toFixed(2),
  },
  {
    id: 'branchWillingToSupply',
    label: 'Branch Willing To Supply',
    minWidth: 170,
    align: 'center',
    // format: (value) => value.toFixed(2),
  },
  {
    id: 'date',
    label: 'Date',
    minWidth: 170,
    align: 'center',
    // format: (value) => value.toFixed(2),
  },
];

function SupplierDetailsTable(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  SupplierDetailsTable('', '', '','' ),
  
];

const useStyles = makeStyles((theme) => ({
  root: {
    
    width: '100%',
    margin: theme.spacing(0),
        width: theme.spacing(150),
        height: theme.spacing(60),
        marginTop: theme.spacing(0),
        ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
        
  },
  root2: {
    width: '100%',
    margin: theme.spacing(35),
        width: theme.spacing(157),
        height: theme.spacing(60),
        marginTop: theme.spacing(0),
    
  },
  green: {
    color: '#fff',
    backgroundColor: green[500],
  },
  container: {
    maxHeight: 450,
  },
}));

export default function SupplierDetails() {

  const [supplier,setSupplier]=useState([]);
  const [searchTerm,setSearchTerm]=useState('');
  const [filtered,setfiltered]=useState([]);
  const [supplierName, setsupplierName] =useState([]);


  useEffect(()=>{
    fetch('http://localhost:9000/supplier/').then(
      res=>res.json()
    ).then((data)=>{
      setSupplier(data);
    })
  },[]);


  async function delet(id) {
    SoloAlert.confirm({

        title: "Confirm Delete",
        body: "Are you sure",
        theme: "dark",
        useTransparency: true,
        onOk: async function () {

            try {
                const result = await (await axios.delete(`http://localhost:9000/supplier/deleteSup/${id}`)).status; console.log(result)

                if (result === 200) {
                    SoloAlert.alert({
                        title: "Welcome!",
                        body: "Deletion is successful",
                        icon: "success",
                        theme: "dark",
                        useTransparency: true,
                        onOk: function () {
                            window.location = "/supplierDetails"
                        },

                    });
                }
            } catch (err) {
                SoloAlert.alert({
                    title: "Oops!",
                    body: "Something went wrong",
                    icon: "error",
                    theme: "dark",
                    useTransparency: true,
                    onOk: function () {

                    },

                });
            }
        },
        onCancel: function () {
            SoloAlert.alert({
                title: "Oops!",
                body: "You canceled delete request",
                icon: "warning",
                theme: "dark",
                useTransparency: true,
                onOk: function () {

                },

            });
        },

    })
}

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  //color picker
  const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: '#f44336',
      },
    },
  });

  return (
    <div className={classes.root2}>
    <Typography variant="h4" gutterBottom>
        Supplier Details
        {/* <Avatar className={classes.green}>
        <AssignmentIcon />
      </Avatar> */}
      </Typography>
      <MDBCol md="6">
      <input class="form-control" id="myInput" type="text" placeholder="Search.." onChange={e => { setSearchTerm(e.target.value) }} />
    </MDBCol>

    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>

          {supplier.filter((value)=>{
  if(searchTerm===""){
    return value;
  }else if(value.supplierName.toLowerCase().includes(searchTerm.toLowerCase())){
    return value;
  }
})
.map((supp,i)=>(

            // {supplier !=0 ? supplier.map((supp)=>{
            //   return (
                <TableRow key={supp._id}>
                  <TableCell>{supp.supplierName}</TableCell>
                  <TableCell>{supp.supplierEmail}</TableCell>
                  <TableCell>{supp.phoneNumber}</TableCell>
                  <TableCell>{supp.productType}</TableCell>
                  <TableCell>{supp.supplierType}</TableCell>
                  <TableCell>{supp.supplierItemType}</TableCell>
                  <TableCell>{supp.location}</TableCell>
                  <TableCell>{supp.branchWillingToSupply}</TableCell>
                  <TableCell>{supp.date}</TableCell>
                  <TableCell><Link to={"/updateSup/"+supp._id} type="submit" class="btn btn-primary" ><i class="fa fa-trash"></i>  UPDATE</Link></TableCell>
                  <TableCell><button type="submit" class="btn btn-danger" onClick={(e) => { delet(supp._id) }}><i class="fa fa-trash"></i>  DELETE</button></TableCell>
                </TableRow>
               
              
            ))}
            
            {/* {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })} */}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </div>
  );
}
