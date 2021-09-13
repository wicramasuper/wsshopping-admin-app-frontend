import React from 'react'

import './sidebar.css'
import logo from '../../assert/images/log.jpeg'
import sidebar_items from '../../assert/JsonData/sidebar_routes.json'
import { Link } from 'react-router-dom'


const SidebarItems = props =>{
    const active = props.active?'active':''

    return (
      <div className="sidebar_items">
          <div className={'sidebar_items-inner ${active}'}>
              <i className={props.icon}></i>
              <span>
                  {props.title}
              </span>

          </div>

      </div>

    )
}


const Sidebar = props => {

 const activeItem= sidebar_items.findIndex(item => item.route === props.location.pathname)

    return (
        <div className='sidebar'>
          <div className="sidebar_logo">
              <img src ={logo} alt="logo"/>
          </div>
          {
              sidebar_items.map ((item,index) => (

                  <Link to={item.route} key={index}>
                      <SidebarItems
                      
                        title={item.display_name}
                        icon={item.icon}
                        active={ index ===activeItem}

                      />
                  
                  </Link>
              ))
          }
        </div>
    )
}

export default Sidebar
