import React  from 'react';

import{BrowserRouter,Switch,Route} from 'react-router-dom';

import InsertProduct from '../../admin-item/insertProduct';

import manageProductList from '../../admin-item/listProduct';
import updateProduct from '../../admin-item/updateProduct';

const Routes =()=>{
    return (
        <BrowserRouter>

            
            <Switch>
                
                <Route path="/admin/insertProduct" exact component={InsertProduct}/>
                <Route path="/admin/manageProduct" exact component={manageProductList}/>
                <Route path="/updateProduct/:productId" exact component={updateProduct}/>
               
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;