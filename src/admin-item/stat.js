import React, { useState, useEffect } from 'react';
//import Layout from '../core/layout';
import { Link } from 'react-router-dom';
import Chart from "react-google-charts";

import Sidebar from '../core/sidebar';

import { getstats } from "../Auth/admin-item/stat";
import StatsCards from '../core/statsCards';
//import Swal from 'sweetalert2';


const ManageOrderstats = () => {
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
            <StatsCards></StatsCards>

            <div className="row">

                <div className="d-flex justify-content-center">
                    <h1>Order Stats</h1>
                    <Chart
                        width={'1000px'}
                        height={'600px'}
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['Status', 'Rate'],
                            ['Completed', 700],
                            ['Cancelled', 150],
                            ['Progressing', 100],

                        ]}
                        options={{

                            // Just add this option
                            is3D: true,
                        }}
                        rootProps={{ 'data-testid': '2' }}
                    />
                </div>
            </div>

            

        </Sidebar>





    )



}


export default ManageOrderstats;