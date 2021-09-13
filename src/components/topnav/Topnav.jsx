import React from 'react'

import './topnav.css'
import Dropdown from '../dropdown/Dropdown'
import notifications from '../../assert/JsonData/notification.json'









const Topnav = () => {
    return (
        <div className='topnav'>
            <div className="topnav_search">
                <input type="text" placeholder='Search here ...'/>
                 <i className='bx bx-search'></i>

            </div>
          <div className="topnav_right">
              <div className="topnav_right-items">
             
                   {/*dropdown*/}

                   <Dropdown
                      icon = 'bx bx-user'
                   />
              </div>

              <div className="topnav_right-items">
                  
                   {/*dropdown*/}

                   <Dropdown 
                     icon ='bx bx-bell'
                     badge='12'
                   />
              </div>

              <div className="topnav_right-items">
              
                   {/*theme setting*/}

                   <Dropdown/>
              </div>


              
              


              
              </div> 
          

        </div>
    )
}

export default Topnav
