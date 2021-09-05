import React,{useState,useEffect} from 'react';
import Layout from '../core/layout';
import {Link}  from 'react-router-dom';
//Insert product API


import {getProductsList,deleteProduct} from "../Auth/admin-item/listProduct";


const ManageProductList =()=>{
    const [products,setProducts] =useState([]);

    const loadProducts = () =>{
        getProductsList().then(data =>{
            if(data.error) {
                console.log(data.error);
            }else{
                setProducts(data);
            }
        });
    };


    const destroy = productId => {
        var x = window.confirm("are you sure ?");
       
        
        if(x===true) {
        deleteProduct(productId).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {

                loadProducts();
            }
        });

    }else{
        loadProducts();
    }

    };

    useEffect(() => {
        loadProducts();
    }, []);


    return(
        <Layout title="Manage Product"
    description="Manage Crud Product" className="container-fluid">
<div className="row">
            
            <div className="col-12">
                <h2 className="text-center">Total {products.length}</h2>
               <hr/>
                <ul className="list-group">
                    {products.map((p,i)=>(
                        
                        <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
                        <strong>{p.item_name}</strong>
                        <Link to={`/updateProduct/${p._id}`}>
                            <span className="badge badge-warning">Update</span>
                        </Link>
                        
                        
                        <span onClick={()=>destroy(p._id)} className="badge badge-danger badge=pill" style={{cursor: "pointer"}}>Delete</span>
                        
                        </li> 
                    ))}


                </ul>
            </div>


            </div>
        



    </Layout>





    )



}


export default ManageProductList;