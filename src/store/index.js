import {configureStore} from "@reduxjs/toolkit";
import placeOrderReducer from './slices/placeOrderSlice';
import productDetailsReducer from './slices/productDetailSlice';

import logger from 'redux-logger';

export default configureStore({
    reducer: {
        placeOrder: placeOrderReducer,
        productDetails: productDetailsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})