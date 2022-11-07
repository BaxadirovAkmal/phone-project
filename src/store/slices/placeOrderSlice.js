import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import qs from 'qs';
import {changePageHandler, getActiveUrl} from '../actions/placeOrderActions';

export const getAllProducts = createAsyncThunk("permission/getAllProducts", async (object) => {
    try {
        return await axios.get(`https://dummyjson.com/products?${qs.stringify(object)}`)
    } catch (err) {
        throw new Error(err)
    }
})
export const getSearchedItems = createAsyncThunk("permission/getSearchedItems", async (object) => {
    try {
        return await axios.get(`https://dummyjson.com/products/search?${qs.stringify(object)}`)
    } catch (err) {
        throw new Error(err)
    }
})

export const placeOrderSlice = createSlice({
    name: 'permission',
    initialState: {
        loading: false,
        error: null,
        placeOrderList: [],
        paginationData: {
            current: 1,
            pageSize: 10,
            start: 0,
            limit: 10
        },
        searchedItems: [],
        activeUrl: '/'
    },
    reducers: {},
    extraReducers: {
        [getAllProducts.pending]: (state) => {
            state.loading = true
        },
        [getAllProducts.fulfilled]: (state, action) => {
            state.loading = false
            state.placeOrderList = action.payload?.data
        },
        [getAllProducts.rejected]: (state, action) => {
            state.loading = false
            state.placeOrderList = []
            state.error = action.payload?.message
        },
        [changePageHandler]: (state, action) => {
            state.paginationData = action.payload
        },
        [getSearchedItems.pending]: (state) => {
            state.loading = true
        },
        [getSearchedItems.fulfilled]: (state, action) => {
            state.loading = false
            state.placeOrderList = action.payload?.data
        },
        [getSearchedItems.rejected]: (state, action) => {
            state.loading = false
            state.placeOrderList = []
            state.error = action.payload?.message
        },
        [getActiveUrl]: (state, action) => {
            state.activeUrl = action.payload
        }
    }
})

export default placeOrderSlice.reducer