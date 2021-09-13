import './App.css';
// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
/*import AddInventory from './components/classComponent';/* <AddInventory/>*/
 import AddProduct from './components/product';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
// import { Sidebar } from 'semantic-ui-react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Switch from 'react-bootstrap/esm/Switch';
import AddSupplier from './components/supplier';
import GeneratePO from './components/PO';
import CreateContract from './components/contract';
import ContractDetails from './components/contractDetails';
import SupplierDetails from './components/supplierDetails';
import supplierUpdate from './components/supplierDetailsUpdate';

function App() {
  return (
    <Router>
      {/* <Header/> */}
      <Sidebar/>
      <section>
        <Switch>
          <Route exact path="/productAdd" component={AddProduct}/>
          <Route exact path="/supplierAdd" component={AddSupplier}/>
          <Route exact path="/generatePO" component={GeneratePO}/>
          <Route exact path="/contractAdd" component={CreateContract}/>
          <Route exact path="/contractDetails" component={ContractDetails}/>
          <Route exact path="/supplierDetails" component={SupplierDetails}/>
          <Route exact path="/updateSup/:id" component={supplierUpdate}/>
          
        </Switch>
      </section>
    </Router>
    // <Router>
    // <div className="App">
    //   <header className="App-header">
    //   <Header/>
    //     <h1>Wickrama Super Inventory Management</h1>
       
    //     <AddProduct/>
        
    //   </header>
    // </div>
    // </Router>
  );
}

export default App;
