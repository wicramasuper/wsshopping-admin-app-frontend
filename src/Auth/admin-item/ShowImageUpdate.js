import React from 'react'
import {API} from "../../config";

const ShowImage = ({item,url})=>(
    <div className="product-image">
        <img src={`${API}/admin/product/image/${item}`} alt={item.item_name} className="mb-3" 
         style={{ maxHeight: "100%", maxWidth: "100%" }}></img>
    </div>
)

export default ShowImage;