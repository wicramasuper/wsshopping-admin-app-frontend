import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import InsertAdvertisement from "../../admin-offers/insertAdvertisement"
import ManageAdvertisements from "../../admin-offers/manageAdvertisements"
import updateAdvertisement from '../../admin-offers/updateAdvertisement'
import Advertisement from '../../admin-offers/advertisement'

import InsertPromotion from '../../admin-offers/insertPromotion'
import ManagePromotions from '../../admin-offers/managePromotions'
import UpdatePromotion from '../../admin-offers/updatePromotion'
import Promotion from '../../admin-offers/promotion'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/admin/managePromotions" component = { ManagePromotions }></Route>
                <Route path="/admin/manageAds" component = { ManageAdvertisements }></Route>
                <Route path="/admin/insertPromotion" component = { InsertPromotion }></Route>
                <Route path="/admin/insertAd" component = { InsertAdvertisement }></Route>
                <Route path="/admin/updatePromotion/:promotionId" component = { UpdatePromotion }></Route>
                <Route path="/admin/updateAd/:advertisementId" component = {updateAdvertisement }></Route>
                <Route path="/admin/promotion/:promotionId" component = { Promotion }></Route>
                <Route path="/admin/advertisement/:advertisementId" component = { Advertisement }></Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;