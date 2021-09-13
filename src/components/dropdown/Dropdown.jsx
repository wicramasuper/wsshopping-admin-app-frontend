import React from 'react'

import './dropdown.css'

const Dropdown = props => {
    return (
        <div className='dropdown'>
            <button className="dropdown_toggle">
               {
                  props.icon ? <i className={props.icon}> </i> : ''

               }

               {
                   props.badge ? <span className='dropdown_toggle-badge'> {props.badge}</span> :
                   ''
               }
               {
                   props.customToggle ? props.customToggle():''
               }


            </button>
            <div className="drpdown_content">
                {
                    props.contentData && props.renderItems ? props.contentData.map((item , index) => props.renderItems(item,index)) :''
                   
                }
                {
                    props.renderFooter ? (
                        <div className="dropdown_footer">
                            {props.renderFooter()}

                        </div>
                    ) : ''
                }


            </div>
           
        </div>
    )
}

export default Dropdown
