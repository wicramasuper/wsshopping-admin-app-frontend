import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

import jspdf from 'jspdf'
import "jspdf-autotable"
import img from '../components/wsLogo.jpg'
import img1 from '../components/signature.jpg'

const rows = [
  { id: 'itemName',
    label: 'Item Name',
    minWidth: 100,
    align: 'center',
    main: '#f44336',
  },
  { id: 'itemPrice',
    label: 'Item Price',
    minWidth: 100,
    align: 'center',
    main: '#f44336',
  },
  { id: 'itemQuantity',
    label: 'Item Quantity',
    minWidth: 100,
    align: 'center',
    main: '#f44336',
  },
  {
    id: 'totalItemPrice',
    label: 'Total Item Price',
    minWidth: 170,
    align: 'center',
    // format: (value) => value.toLocaleString('en-US'),
  },
];

const products = [
  { name: '', desc: '', price: '' },
  { name: 'Delivery Type', desc: '', price: 'Free' },
];
const addresses = ['No 386', 'Kandy', 'Road', 'Nittabuwa', 'SRILANKA'];
const payments = [
  { name: 'Card Type', detail: 'Credit Card' },
  { name: 'Card Number', detail: '6527 1332 4286 2542' },
  { name: 'Card Holder Name', detail: 'Amerasinghe N.D.K' },
  { name: 'CVV code', detail: '216' },
  { name: 'Expiry Date', detail: '12/24' },
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function POFinalReviewForm() {
  const classes = useStyles();

  const [poRequestManage,setpoRequestManage]=useState([]);
  const [searchTerm,setSearchTerm]=useState('');
  const [filtered,setfiltered]=useState([]);
  const [itemName, setitemName] =useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/poroutes/")
      .then((res) => res.json())
      .then((data) => {
        setpoRequestManage(data);
      });
  }, []);

const sum =[];

// genarate pdf

const generatePDF = tickets => {

  const doc = new jspdf();
  const tableColumn = ["order ID", "Item Name", "Item Price", "Item Quantity", "Item Name"];
  const tableRows = [];
  const date = Date().split(" ");
  const dateStr = date[1] + "-" + date[2] + "-" + date[3];

  tickets.map(ticket => {
      const ticketData = [
          ticket._id,
          ticket.itemName,
          ticket.itemPrice,
          ticket.itemQuantity,
          ticket.totalItemPrice,
      ];
      tableRows.push(ticketData);
  })
  doc.text("WICKRAMA SUPER PLC", 70, 8).setFontSize(13);
  doc.text("Purchase Order Detail Report", 14, 16).setFontSize(13);
  doc.text(`Report Genarated Date - ${dateStr}`, 14, 23);
  //right down width height
  doc.addImage(img, 'JPEG', 170, 8, 25, 25);
  doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY:35});
  doc.addImage(img1, 'JPEG', 120, 80,70, 40);
  doc.save("Contract Details Report.pdf");
};

  return (
    <React.Fragment>
      <div class="buttonn">
       <button type="button" class="btn btn-secondary btn-sm" onClick={() => generatePDF(poRequestManage)} >GenerateReport</button> <br></br>
            </div>
            <br/>
      <Typography variant="h6" gutterBottom>
        <u>Order summary</u>
      </Typography>

<div style={{display:"none"}}>
    {poRequestManage.map((productPO)=>(sum.push(productPO.itemPrice*productPO.itemQuantity)))}
</div>


      <List disablePadding>
        {poRequestManage.map((product) => (
        
            
          <ListItem className={classes.listItem} key={product.itemName}>
            <ListItemText primary={product.itemName} secondary={"Rs: "+product.itemPrice +" X "+product.itemQuantity+" items"} />
            <Typography variant="body2">{"Rs: "+product.itemPrice*product.itemQuantity}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            {"Rs: "+sum.reduce((a,b)=>a+b,0)}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            <u>Delivery Details</u>
          </Typography>
          <br/>
          <Typography gutterBottom>Wickrama Super</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            <u>Payment Details</u>
          </Typography>
          <br/>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}