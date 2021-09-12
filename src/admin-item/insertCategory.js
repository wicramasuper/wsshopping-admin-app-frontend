import React,{useState} from 'react';
//import Layout from '../core/layout';
import Sidebar from '../core/sidebar';
//Insert product API

import {insertCategory} from "../Auth/admin-item/insertCategory";

const InsertCategory = () => {


    const [values,setValues] = useState({
        category : '',
        error:"",
        success:false
       
    });

    const {category,success,error} = values;

    const handleChange = name => event => {

       
        setValues({...values,error:false,success:false,[name]:event.target.value});
        
    };

    const clickSubmit=event =>{

        event.preventDefault();
        setValues({ ...values, error: false,success:false });

        if(category!==""){

        insertCategory({category}).then(data=>{
            if(data.error){
                setValues({...values,error:data.error,success:false});
            }
            else{
                setValues({
                    ...values,
                    category:'',
                    error:"",
                    success:true
                    



                });
            }
        });
    
    }};


    const categoryForm=()=>(
    

        <form>
            <div className="form-group">
            <label className="" style={{fontSize:"20px"}}>Category Name </label>
            <input onChange={handleChange('category')} type="text" className="form-control" value={category} />
        </div>
        <button onClick={clickSubmit} className="btn btn-outline-primary btn-block" >Insert Category</button>
        </form>


    )

        //show success or failure
const showError = () => (
    <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
        {error}
    </div>
);

const showSuccess = () => (
    <div className="alert alert-info" style={{display: success ? "" :'none'}}>
        <h2>"New Category Inserted Successfully!</h2>
    </div>
);

return (

<Sidebar>
    {showError()}
    {showSuccess()}
    {categoryForm()}
</Sidebar>

    )


} 
export default InsertCategory;