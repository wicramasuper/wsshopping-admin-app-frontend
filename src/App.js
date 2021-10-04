import './App.css';
// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
/*import AddInventory from './components/classComponent';/* <AddInventory/>*/
 import AddBranch from './components/Branch';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
// import { Sidebar } from 'semantic-ui-react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Switch from 'react-bootstrap/esm/Switch';
import AddSupplier from './components/supplier';
// import GeneratePO from './components/purchaseOrder';
import CreateContract from './components/contract';
import ContractDetails from './components/contractDetails';
import SupplierDetails from './components/supplierDetails';
import supplierUpdate from './components/supplierDetailsUpdate';
// import PurchaseOrderDetails from './components/purchaseOrderDetails';
import GeneratePO from './components/PO';
import HomePage from './components/Home';
import contractUpdate from './components/contractDetailsUpdate';
import BranchDetails from './components/BranchDetails';
import BranchUpdate from './components/BranchDetailsUpdate'
// import POFinalReviewForm from "./components/POFinalReviewForm";

function App() {
  return (
    <Router>
      {/* <Header/> */}
      <Sidebar/>
      {/* <div>Home Page</div> */}
      <section>
        <Switch>
         
          <Route exact path="/branchAdd" component={AddBranch}/>
          <Route exact path="/supplierAdd" component={AddSupplier}/>
          <Route exact path="/generatePO" component={GeneratePO}/>
          <Route exact path="/contractAdd" component={CreateContract}/>
          <Route exact path="/contractDetails" component={ContractDetails}/>
          <Route exact path="/supplierDetails" component={SupplierDetails}/>
          <Route exact path="/updateSup/:id" component={supplierUpdate}/>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/updateCont/:id" component={contractUpdate}/>
          <Route exact path="/branchDetails" component={BranchDetails}/>
          <Route exact path="/updateBranch" component={BranchUpdate}/>
          {/* <Route exact path="/POFinalForm" component={POFinalReviewForm}/> */}
          {/* <Route exact path="/poDetails/:id" component={PurchaseOrderDetails}/> */}
          
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
