import React from 'react'

import statusCards from '../assert/JsonData/status-card-data.json'
import StatusCard from '../components/status-cards/StatusCard'
import Chart from 'react-apexcharts'
import { Link } from 'react-router-dom'
import Table from '../components/table/Table'


const ChartOptions = {
    series:[{
        name:'Pick & Go',
        data:[40,70,20,90,36,80,30,91,60]

    },{
      name : 'Home Delivery' , 
      data : [40,30,70,80,40,16,40,20,51,10]

    }],
    options: {
        color : ['#DAA520' , '#8B0000'],
        chart : {
            background:'transparent'
        },
        dataLables:{
            enabled:false
        },
        stroke:{
            curve:'smooth'
        },
        xaxise:{
            categories:['jan','feb','Mar','Apr','May','Jun','Jul','Aug','Sep']
        },
        legend:{
            position:'top'
        },
        grid:{
            show:false
        }
    }
}


const topCustCustomer ={
    head:[
        'User',
        'Order No',
        'total spending',
        'delivery type'
    ],

    body:[
        {
            "username":"kamal perera",
            "order":"3",
            "price":"RS.1500",
            "DeliveryType":"pick&Go"
        },

        {
            "username":"sunil perera",
            "order":"1",
            "price":"RS.1000",
            "DeliveryType":"Home Delivery"
        },

        {
            "username":"kamal silva",
            "order":"4",
            "price":"RS.900",
            "DeliveryType":"pick&Go"
        },

        {
            "username":"amal liyanage",
            "order":"2",
            "price":"RS.2000",
            "DeliveryType":"pick&Go"
        },

        {
            "username":"kasun perera",
            "order":"1",
            "price":"RS.3500",
            "DeliveryType":"pick&Go"
        },



    ]
}



const renderCustomerHead =(item,index) =>(
    <th key={index }> {item}</th>
)

const renderCustomerBody =(item,index) =>(
    <tr key={index }> 
     <td>{item.username}</td>
     <td>{item.order}</td>
     <td>{item.price}</td>
     <td>{item.DeliveryType}</td>
    
    </tr>
)


const latestOrders = {

   header:[
      "order ID",
      "User Name",
      "Total Price",
      "Date",
      "DeliveryType",
      "status" ,
      "Chargers"
   ],

   body:[
       {
           ID:"#00D1723",
           UserName:"kamal perera",
           TotalPrice:"RS.1000",
           Date:"17 jun 2021",
           DeliveryType:"home delivery",
           status:"pending"
       },
   ]

}



const renderOrderHead =(item,index) =>(
    <th key={index }> {item}</th>
)

const renderOrderBody =(item,index) =>(
    <tr key={index }> 
     <td>{item.ID}</td>
     <td>{item.UserName}</td>
     <td>{item.Totalprice}</td>
     <td>{item.Date}</td>
     <td>{item.DeliveryType}</td>
 
     <td>
         <span> {item.status} </span>
         
         </td>  
    </tr>
)





const Dashboard = () => {
    return (
        <div>
           <h2 className="page-header">Dashboard</h2>
           <div className="row">
               <div className="col-6">
                   <div className="row">

                    {
                       statusCards.map((item , index) =>(
                           <div className="col-6">
                               {/* card here  */}

                               {item.title}

                               <StatusCard
                                  icon = {item.icon}
                                  count= {item.count}
                                  title = {item.title}
                               
                               />



                           </div>
                       ))

                    }


                   </div>

               </div>

               <div className="col-6"> 
                 <div className="card full-height">
                     {/*chart*/}
                     <Chart
                          options={ChartOptions.options}
                          series={ChartOptions.series}
                          type='line'
                          height='100%'
                     />
                 </div>

               </div>
               <div className="col-4">
                  <div className="card">
                      <div className="card_header">
                          <h3>Top Customers</h3>

                      </div>
                      <div className="card_body">
                          {/*table*/}
                          <Table
                             headData={topCustCustomer.head}
                             renderHead ={(item,index) => renderCustomerHead(item,index)}
                             bodyData={topCustCustomer.body}
                             renderBody ={(item,index) => renderCustomerBody(item,index)}

                          />

                      </div>
                      <div className="card_footer">
                          <Link to ='/'> view all</Link>

                      </div>

                  </div>

               </div>
               <div className="col-8"> 
                   <div className="card">
                       <div className="card_header">
                           <h3> latest orders</h3>

                       </div>
                       <div className="card_body">
                           <Table
                           
                           headData={latestOrders. header}
                             renderHead ={(item,index) => renderOrderHead(item,index)}
                             bodyData={latestOrders.body}
                             renderBody ={(item,index) => renderOrderBody(item,index)}

                           
                           />

                       </div>
                          <div className="card_footer"></div>
                          <Link to='/orders'> view all </Link>
                   </div>
               </div>

           </div>
        </div>
    )
}

export default Dashboard
