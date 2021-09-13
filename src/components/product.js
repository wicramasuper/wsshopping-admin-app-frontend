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
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import axios from 'axios';


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
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    purple: {
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500],
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    // avatar: {
    //   margin: theme.spacing(1),
    //   backgroundColor: theme.palette.secondary.main,
    // },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

export default function AddProduct() {
  // typeOfData [stateData, stateUpdateFunction] = useState(initialData)
//   let initialValue = [];
//   const [products, setProduct] = useState(initialValue);
//   const formData = createRef();
  // addproduct handler method
//   const add = (event) => {
    // event.preventDefault();
    //console.log(event.target.product_name.value);
    // const formData = event.target;
    // const newProduct = {
    //     product_name: formData.product_name.value,
    //     price: formData.price.value,
    //     qty: formData.qty.value
    // }
    //console.log(formData.current)
    // const newProduct = {
    //   product_name: formData.current.product_name.value,
    //   price: formData.current.price.value,
    //   qty: Number(formData.current.qty.value),
    // };
    //console.log(newProduct);
    // add a new product inside products array
    // setProduct([...products, newProduct]);
    //console.log(products);
//   };
  // increment qty value by 1
//   const increQty = (event) => {
//     //console.log(event.target.value)
//     const indexOfArray = event.target.value;
//     products[indexOfArray].qty = products[indexOfArray].qty + 1;
//     setProduct([...products]);
//   };
  // decrement qty value by 1
//   const decreQty = (event) => {
//     const indexOfArray = event.target.value;
//     products[indexOfArray].qty = products[indexOfArray].qty - 1;
//     setProduct([...products]);
//   };
  const classes = useStyles();

  //code goes here...

  const [product,setProduct] = useState({
    productName: "",
    description: "",
    countInStock: "",
    price: "",
    date: new Date(),
    supplierId: [1],
    branch: ""
  })

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(product);
      axios.post('http://localhost:9000/product/add',product).then(res => {
          alert('Product Successfully added!');
      }).catch(error => {
          console.log(error.message);
          alert(error.message);
      })
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <div className={classes.root}>
      <Avatar className={classes.purple}>AP</Avatar>
    </div>
        <Typography component="h1" variant="h5">
          ADD Product
        </Typography>
        <form className={classes.form} noValidate onSubmit={(e) => {handleSubmit(e)}}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
             <TextField
                autoComplete="pname"
                name="productName"
                variant="outlined"
                required
                fullWidth
                id="productName"
                label="Product Name"
                autoFocus
                onChange={(e) => setProduct({...product,productName: e.target.value})}
              />
              </Grid>
             <Grid item xs={12}>
             <TextField
                autoComplete="stockcount"
                name="countInStock"
                variant="outlined"
                required
                fullWidth
                id="countInStock"
                label="CountIn Stock"
                autoFocus
                onChange={(e) => setProduct({...product,countInStock: e.target.value})}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="price"
                label="Price"
                name="price"
                autoComplete="Price"
                autoFocus
                onChange={(e) => setProduct({...product,price: e.target.value})}
              />
               </Grid>
                <Grid item xs={12}>
                <TextField
                autoComplete="des"
                name="description"
                variant="outlined"
                required
                ful lWidth
                id="description"
                label="Product Description"
                autoFocus
                onChange={(e) => setProduct({...product,description: e.target.value})}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="date"
                label="Date"
                name="date"
                autoComplete="date"
                onChange={(e) => setProduct({...product,date: e.target.value})}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="supplierId"
                label="SupplierId"
                type="text"
                id="supplierId"
                onChange={(e) => setProduct({...product,supplierId: e.target.value})}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="branch"
                label="Branch"
                type="text"
                id="branch"
                onChange={(e) => setProduct({...product,branch: e.target.value})}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="A new product is added to the Inventory"
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
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                check available products
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
