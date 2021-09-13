import React from 'react'

import {Route, Switch} from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Orders from '../pages/Orders'


const Routes= () => {
    return (
        <Switch>
            <Route path ='/' exact component={Dashboard}/>
            <Route path ='/orders' component={Orders}/>
            

            
            
        </Switch>
    )
}

export default Routes
