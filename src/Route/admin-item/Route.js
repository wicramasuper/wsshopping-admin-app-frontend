import React  from 'react';

import{BrowserRouter,Switch,Route} from 'react-router-dom';

import InsertProduct from '../../admin-item/insertProduct';

import manageProductList from '../../admin-item/listProduct';

const Routes =()=>{
    return (
        <BrowserRouter>

            
            <Switch>
                
                <Route path="/admin/insertProduct" exact component={InsertProduct}/>
                <Route path="/admin/manageProduct" exact component={manageProductList}/>
               
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;