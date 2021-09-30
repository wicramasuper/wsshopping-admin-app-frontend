import React, { useState, useEffect } from 'react';
//import Layout from '../core/layout';
import Sidebar from '../../core/sidebar';

import { getstats } from "../../Auth/admin-item/stat";
//import { Link } from 'react-router-dom';
//import Swal from 'sweetalert2';

import Pdf from "react-to-pdf";

const ref = React.createRef();
const newDate = new Date();
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();

const Greenstats = () => {
    const [orderStats, setStats] = useState([]);

    const loadStats = () => {
        getstats().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setStats(data);
            }
        });
    };




    useEffect(() => {
        loadStats();
    }, []);

    return (
        <Sidebar>







<Pdf targetRef={ref} filename={date+"_"+month+"_"+year+"_"+"Red"}>
                {({ toPdf }) => <button onClick={toPdf}>Download as PDF</button>}
            </Pdf>

            <div className="col-8">





                <div className="Post" ref={ref}>



                <table class="table">
                    <thead>
                        <tr style={{ color: 'red' }}>
                            <th>Customer</th>
                            <th>Cancel rate</th>
                            <th>Complete rate</th>
                        </tr>
                    </thead>
                    {orderStats.map((p, i) => (
                        <tbody>
                            <tr>
                                <td>
                                    {((p.cancel / (p.completed + p.cancel)) * 100).toFixed(2) > 30 &&
                                        <h4>
                                            {p.username}


                                        </h4>
                                    }</td>
                                <td>
                                    {((p.cancel / (p.completed + p.cancel)) * 100).toFixed(2) > 30 &&
                                        <h4>
                                            {((p.cancel / (p.completed + p.cancel)) * 100).toFixed(2)}%


                                        </h4>
                                    }</td>
                                <td>
                                    {((p.cancel / (p.completed + p.cancel)) * 100).toFixed(2) > 30 &&
                                        <h4>
                                            {((p.completed / (p.completed + p.cancel)) * 100).toFixed(2)}%


                                        </h4>
                                    }</td>



                            </tr>
                        </tbody>



                    ))}
                </table></div>


</div>

        </Sidebar>
    )



}

export default Greenstats;