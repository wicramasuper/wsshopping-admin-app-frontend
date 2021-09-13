import React from 'react'

import './layout.css' 
import Sidebar from '../sidebar/Sidebar'
import Routes from '../Routes'
import Topnav from '../topnav/Topnav'




import { BrowserRouter , Route} from 'react-router-dom'

const Layout = () => {
    return (
        <BrowserRouter>
        <Route render = {(props) => (
           <div className='layout'>
               <Sidebar { ...props}/>
               <div className ="layout_content">
                   <Topnav/>
                   <div className="layout_content-main">
                       <Routes/>
                       </div> 

               </div>

           </div>

        

        )}/>
        </BrowserRouter>

      
    )

  

    
}

export default Layout
