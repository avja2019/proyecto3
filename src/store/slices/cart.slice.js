import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const urlBase = 'https://fakestoreapi.com';

const cart = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        setCart: (_state, action) => action.payload, 
        delCart: (state, {payload} ) => state.filter(
            (prod) => prod.id!==payload
        )
    }
});

export const {setCart, delCart} = cart.actions;

export default cart.reducer;

const path = '/cart';

// export const getCartsThunk = () => async(dispatch) => {
//     const url = `${urlBase}/carts/user/1`;
//     await axios.get(url)
//         .then(res => console.log(res.data))
//         .catch(err => console.log(err));
// }

export const getCartsThunk = () => async (dispatch) => {
    const url = `${urlBase}/carts/user/1`;
    try {
        const res = await axios.get(url);
        console.log(res.data); // Verifica la estructura de los datos
        dispatch(setCart(res.data)); // Establecer los datos en el estado de Redux
    } catch (err) {
        console.log(err);
    }
};


export const postCartThunk = (data) => (dispatch) => {
    const url = `${urlBase}/carts`; 
    axios.post(url, data)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));        
}

export const deleteProductThunk = (id) => (dispatch) => {
    const url = `${urlBase}/carts/user/${id}`;
    axios.delete(url)
        .then(() => {
            dispatch(delCart(id))
           console.log('delete success') 
        } )
        .catch(err => console.log(err));
        
}

export const updateProductThunk = (id, data) => (dispatch) => {
    const url = `${urlBase}/carts/user/${id}`;
    axios.put(url, data)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
}