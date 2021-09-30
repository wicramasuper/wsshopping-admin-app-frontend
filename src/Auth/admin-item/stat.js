import {API} from "../../config";

export const getstats = () => {

    //if we say limit as undefined, we can get all the products
    return fetch(`${API}/admin/orderstats`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};