import React from 'react';
import {Route, Routes} from "react-router-dom";
import PlaceOrder from '../PlaceOrder';
import DetailsAboutProduct from "../DetailsAboutProduct";

function Checkout() {
    return (
        <>
            <Routes>
                <Route path='*' element={<PlaceOrder/>}/>
                <Route path='view/:id' element={<DetailsAboutProduct/>}/>
            </Routes>
        </>
    );
}

export default Checkout;
