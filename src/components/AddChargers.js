import React, { useState } from "react";

export default function AddChargers() {

    return (
        <div> 
            <h3> Add Service Chargers </h3>

<div classname="container">
            <form>
          
            <div class="form-group">
                    <label for=" name" class="form-label"> Name</label>
                    <input type="text" class="form-control" id=" name"/>
                </div>


                <div class="form-group">
                    <label for="OrderNo" class="form-label">OrderID</label>
                    <input type="text" class="form-control" id="OrderID" aria-describedby="OrderID"/>
                    <div id="OrderID" class ="form-text">.</div>
                </div>

                <div class="form-group">
                    <label for=" serviceChargers" class="form-label"> serviceChargers</label>
                    <input type="number" class="form-control" id=" serviceChargers"/>
                </div>
                <br/>
                <button type="submit" class="btn btn-primary">Send To The delivery</button>
            </form>
        </div>
    </div>

    )


}