import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

import { green, pink } from "@material-ui/core/colors";
import Avatar from "@material-ui/core/Avatar";
import FolderIcon from "@material-ui/icons/Folder";
import PageviewIcon from "@material-ui/icons/Pageview";
import AssignmentIcon from "@material-ui/icons/Assignment";

import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import KeyboardVoiceIcon from "@material-ui/icons/KeyboardVoice";
import Icon from "@material-ui/core/Icon";
import SaveIcon from "@material-ui/icons/Save";
import InfoIcon from "@material-ui/icons/Info";

import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import SoloAlert from "soloalert";
import axios from "axios";
import { MDBCol } from "mdbreact";

import { Header, Image, Modal } from "semantic-ui-react";
import jspdf from 'jspdf'
import "jspdf-autotable"
import img from '../components/wsLogo.jpg'
import img1 from '../components/signature.jpg'

//modal import

import Box from "@mui/material/Box";


const columns = [
  {
    id: "SupplierName",
    label: "Supplier Name",
    minWidth: 100,
    align: "center",
  },
  {
    id: "branchWillingToSupply",
    label: "Branch",
    minWidth: 170,
    align: "center",
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: "AgreementDate",
    label: "AgreementDate",
    minWidth: 170,
    align: "center",
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: "productType",
    label: "Product Type",
    minWidth: 170,
    align: "center",
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: "contractPeriod",
    label: "Contract Period",
    minWidth: 170,
    align: "center",
    // format: (value) => value.toFixed(2),
  },
  {
    id: "Description",
    label: "Description",
    minWidth: 170,
    align: "center",
    // format: (value) => value.toFixed(2),
  },
  // {
  //   id: 'update',
  //   label: 'Update',
  //   minWidth: 170,
  //   align: 'center',
  //   // format: (value) => value.toFixed(2),
  // },
  // {
  //   id: 'delete',
  //   label: 'Delete',
  //   minWidth: 170,
  //   align: 'center',
  //   // format: (value) => value.toFixed(2),
  // },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [createData("", "", "", "")];

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: theme.spacing(0),
    width: theme.spacing(150),
    height: theme.spacing(60),
    marginTop: theme.spacing(0),
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
  root2: {
    width: "100%",
    margin: theme.spacing(35),
    width: theme.spacing(157),
    height: theme.spacing(60),
    marginTop: theme.spacing(0),
  },
  green: {
    color: "#fff",
    backgroundColor: green[500],
  },
  container: {
    maxHeight: 450,
  },

  button: {
    margin: theme.spacing(1),
  },
}));

//modal import

const style = {
  position: "absolute",
  top: "50%",
  left: "75%",
  transform: "translate(-50%, -50%)",
  width: 400,
  // bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ContractDetails() {
  //modal code
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [contract, setContract] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setfiltered] = useState([]);
  const [SupplierName, setSupplierName] = useState([]);
  // var UserID =1;

  //This useEffect function used to get all contract's data
  useEffect(() => {
    fetch("http://localhost:9000/contract/")
      .then((res) => res.json())
      .then((data) => {
        setContract(data);
      });
  }, []);

  async function delet(id) {
    SoloAlert.confirm({
      title: "Confirm Delete",
      body: "Are you sure",
      theme: "dark",
      useTransparency: true,
      onOk: async function () {
        try {
          const result = await (
            await axios.delete(
              `http://localhost:9000/contract/deleteCont/${id}`
            )
          ).status;
          console.log(result);

          if (result === 200) {
            SoloAlert.alert({
              title: "Welcome!",
              body: "Deletion is successful",
              icon: "success",
              theme: "dark",
              useTransparency: true,
              onOk: function () {
                // window.location = "/contractDetails"
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
            onOk: function () {},
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
          onOk: function () {},
        });
      },
    });
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


  // genarate pdf

  const generatePDF = tickets => {

    const doc = new jspdf();
    const tableColumn = ["Contract ID", "Supplier Name", "Branch Willing To Supply", "Agreement Date", "Product Type", "Contract Period", "Description"];
    const tableRows = [];
    const date = Date().split(" ");
    const dateStr = date[1] + "-" + date[2] + "-" + date[3];

    tickets.map(ticket => {
        const ticketData = [
            ticket._id,
            ticket.SupplierName,
            ticket.branchWillingToSupply,
            ticket.AgreementDate,
            ticket.productType,
            ticket.contractPeriod,
            ticket.Description,
        ];
        tableRows.push(ticketData);
    })
    doc.text("WICKRAMA SUPER PLC", 70, 8).setFontSize(13);
    doc.text("Contract Detail Report", 14, 16).setFontSize(13);
    doc.text(`Report Genarated Date - ${dateStr}`, 14, 23);
    //right down width height
    doc.addImage(img, 'JPEG', 170, 8, 25, 25);
    doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY:35});
    doc.addImage(img1, 'JPEG', 135, 150,70, 40);
    doc.save("Contract Details Report.pdf");
};

  return (
    <div className={classes.root2}>
      <Typography variant="h4" gutterBottom>
        Contract Details
        {/* <Avatar className={classes.green}>
        <AssignmentIcon />
      </Avatar> */}
      </Typography>
      <div class="buttonn">
       <button type="button" class="btn btn-secondary btn-sm"  onClick={() => generatePDF(contract)} >GenerateReport</button> <br></br>
            </div>
      <MDBCol md="6">
        <input
          class="form-control"
          id="myInput"
          type="text"
          placeholder="Search.."
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
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
              {contract
                .filter((value) => {
                  if (searchTerm === "") {
                    return value;
                  } else if (
                    value.SupplierName.toLowerCase().includes(
                      searchTerm.toLowerCase()
                    )
                  ) {
                    return value;
                  }
                })
                .map((cont, i) => (
                  // return (
                  <TableRow key={cont._id}>
                    <TableCell>{cont.SupplierName}</TableCell>
                    <TableCell>{cont.AgreementDate}</TableCell>
                    <TableCell>{cont.branchWillingToSupply}</TableCell>
                    <TableCell>{cont.productType}</TableCell>
                    <TableCell>{cont.contractPeriod}</TableCell>
                    {/* <TableCell>{cont.Description} </TableCell> */}

                    <Modal
                      aria-labelledby="unstyled-modal-title"
                      aria-describedby="unstyled-modal-description"
                      open={open}
                      onClose={handleClose}
                    >
                      <Box sx={style}>
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                        >
                          Contract Information
                        </Typography>
                        
                        <TableCell>{cont.Description} </TableCell>
                      </Box>
                    </Modal>
                    <TableCell>
                      <Button variant="text" onClick={handleOpen}>Info</Button>
                    </TableCell>
                    <TableCell>
                      <Link
                        to={"/updateCont/" + cont._id}
                        type="submit"
                        class="btn btn-primary"
                      >
                        <i class="fa fa-trash"></i> UPDATE
                      </Link>
                    </TableCell>
                    <TableCell>
                      <button
                        type="submit"
                        class="btn btn-danger"
                        onClick={(e) => {
                          delet(cont._id);
                        }}
                      >
                        <i class="fa fa-trash"></i> DELETE
                      </button>
                    </TableCell>
                  </TableRow>

                  // )
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
