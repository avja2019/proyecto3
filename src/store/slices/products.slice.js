import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import urlBase from "../../utils/urlBase";

const products = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProducts: (_state, { payload }) => payload
    }
})

export const { setProducts } = products.actions

export default products.reducer

export const getProductsThunk = () => (dispatch) => {
    const url = `${urlBase}/products`
    axios.get(url)
        .then(res => dispatch(setProducts(res.data)))
        .catch(err => console.log(err))
}