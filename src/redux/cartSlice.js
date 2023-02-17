import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state,action) => {
            state.products = [ ...state.products, action.payload]
        },
        removeItem: (state,action) => {
            state.products = state.products.filter(item => item.id !== action.payload.id)
        },
        resetCart: (state) => {
            state.products = []
        },
    },
})

// Action creators are generated for each case reducer function
export const { addToCart,removeItem,resetCart} = cartSlice.actions;

export const selectItems = (state) => state.cart.products;
export default cartSlice.reducer;