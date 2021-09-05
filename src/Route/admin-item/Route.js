import React  from 'react';

import{BrowserRouter,Switch,Route} from 'react-router-dom';

import InsertProduct from '../../admin-item/insertProduct';

const Routes =()=>{
    return (
        <BrowserRouter>

            
            <Switch>
                
                <Route path="/admin/insertProduct" exact component={InsertProduct}/>
               
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;