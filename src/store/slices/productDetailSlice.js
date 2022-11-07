import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {getAllProducts} from "./placeOrderSlice";
import {setProductToMoreDetails} from "../actions/productDetailsActions";

export const getSelectedProduct = createAsyncThunk("productDetails/getSelectedProduct", async (data) => {
    try {
        return await axios.get(`https://dummyjson.com/products/${data}`)
    } catch (err) {
        throw new Error(err)
    }
})

export const productDetailSlice = createSlice({
    name: 'productDetails',
    initialState: {
        loading: false,
        error: null,
        item: {},
        selectedProduct: {}
    },
    reducers: {},
    extraReducers: {
        [setProductToMoreDetails]: (state, action) => {
            state.item = action.payload
        },
        [getSelectedProduct.pending]: (state) => {
            state.loading = true
        },
        [getSelectedProduct.fulfilled]: (state, action) => {
            state.loading = false
            state.selectedProduct = action.payload?.data
        },
        [getAllProducts.rejected]: (state, action) => {
            state.loading = false
            state.selectedProduct = {}
            state.error = action.payload?.message
        }
    }
})

export default productDetailSlice.reducer