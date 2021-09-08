import React,{useState} from 'react';
//import Layout from '../core/layout';
import Sidebar from '../core/sidebar';
//Insert product API

import {insertProduct} from "../Auth/admin-item/insertProduct";

//empty image
import emptyImage from '../Images/blank-img.jpg';



const InsertProduct = () => {

    

    const [values,setValues] = useState({
        item_code : '',
        item_name : '',
        ite_category : '',
        item_type : '',
        item_quantity : '',
        item_image : '',
        item_weight : '',
        item_price : '',
        item_shipping:'',
        item_description : '',
        loading : false,
        error:'',
        insertedProduct:'',
        redirectToHome:false,
        formData : new FormData()
    });
    
    const {item_code,item_name,item_quantity,item_weight,item_price,item_shipping,item_description,formData,error,insertedProduct,loading} = values;

    const handleChange = name => event => {

        const value=name==='item_image' ? event.target.files[0] :event.target.value;
        formData.set(name,value);
        setValues({...values,[name]:value});

    };

    const clickSubmit = event => {

        event.preventDefault();

        setValues({...values,error:'',loading:true});


        // eslint-disable-next-line no-undef
        insertProduct(formData).then(data => {

            
            if(data.error){
                setValues({...values,error:data.error});
            }else{
                setValues({...values,
                    item_code : '',
                    item_name : '',
                    ite_category : '',
                    item_type : '',
                    item_quantity : '',
                    item_image : '',
                    item_weight : '',
                    item_price : '',
                    item_shipping:'',
                    item_description : '',
                    loading:'',
                    insertedProduct:data.item_name

                
                });

            }


        });

    };


    const newPostForm = () => (

//<div className="container col-md-8 offset-md-2">
        <form className="mb-3" onSubmit={clickSubmit}>
            <h4>Add Product</h4>


            <div className="row">
                <div className="form-group col-sm-6">

                    <div className="form-group">
                        <img src={emptyImage} alt={"empty"} style={{ height: "254px" }} />

                    </div>

                    <div className="form-group">
                        <label className="text-muted">Product Image</label><br></br>
                        <label className="btn btn-secondary">
                            <input onChange={handleChange('item_image')} type="file" name="item_image" accept="image/*" />
                        </label>
                    </div>

                    <div className="form-group">
                        <label className="text-muted">Quantity</label>
                        <input onChange={handleChange('item_quantity')} type="text" className="form-control" value={item_quantity} />
                    </div>

                    <div className="form-group">
                        <label className="text-muted">Shipping</label>
                        <select onChange={handleChange('item_shipping')} className="form-control" value={item_shipping} >
                            <option>Please select</option>
                            <option value="0">No</option>
                            <option value="1">Yes</option>
                        </select>
                    </div>
                </div>

                <div className="form-group col-sm-6">
                    <div className="form-group">
                        <label className="text-muted">Product Code</label>
                        <input onChange={handleChange('item_code')} type="text" className="form-control" value={item_code}/>
                    </div>

                    <div className="form-group">
                        <label className="text-muted">Product Name</label>
                        <input onChange={handleChange('item_name')} type="text" className="form-control" value={item_name} />
                    </div>


                    <div className="form-group">
                        <label className="text-muted">Product Category</label>
                        <select onChange={handleChange('item_category')} className="form-control">
                            <option>Please select</option>
                            <option value="Stationary">Stationary</option>
                            <option value="Beverages">Beverages</option>
                            <option value="Fruits">Fruits</option>
                            <option value="Vegetable">Vegetable</option>

                        </select>
                    </div>

                       
                    <div className="form-group ">
                        <label className="text-muted">Packing Type</label><br></br>
                        <input type="radio" id="repack" name="item_type" value="Prepack" />
                        <label >&nbsp;Prepack</label>
                        <br></br>
                        <input type="radio" id="loosePack" name="item_type" value="Loose Pack" />
                        <label>&nbsp;Loose Pack</label><br></br>
                    </div>
    
                    <div className="form-group">
                        <label className="text-muted">Weight</label>
                        <input onChange={handleChange('item_weight')} type="text" className="form-control" value={item_weight}/>
                    </div>

                   
                    <div className="form-group">
                        <label className="text-muted">Product Price</label>
                        <input onChange={handleChange('item_price')} type="text" className="form-control" value={item_price}/>
                    </div>

                </div>


                <div className="form-group col-sm-12">
                <div className="form-group">
                    <label className="text-muted">Product Description</label>
                    <textarea onChange={handleChange('item_description')} type="text" className="form-control"
                        rows="5" cols="500" placeholder="Description"
                        value={item_description}
                    />
                </div>

               </div>
            </div>





            <button className="btn btn-outline-primary btn-block">Insert</button>
        </form>
  //      </div>
    );

    //show success or failure
const showError = () => (
    <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
        {error}
    </div>
);

const showSuccess = () => (
    <div className="alert alert-info" style={{ display: insertedProduct ? '' : 'none' }}>
        <h2>"{`${insertedProduct}`}" Product Inserted Successfully!</h2>
    </div>
);

const showLoading = () =>
        loading && (
            <div className="alert alert-success">
                <h2>Loading...</h2>
            </div>
        );

    return (
       
        
       
         <Sidebar>{showError()}
         {showSuccess()}
         {showLoading()}
         {newPostForm()}</Sidebar>
        
    );
};

export default InsertProduct;