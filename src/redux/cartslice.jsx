import { createSlice } from "@reduxjs/toolkit";
import { products } from "../components/data";

const initialState = {
    cart: [],
    item: products,
    totalPrice: 0,
    info: {},
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const newitem = state.item.find((item) => item.id === action.payload.id)
            const existingitem = state.cart.find((item) => item.id === newitem.id)
            let ispresent = false
            state.cart.forEach((data) => {
                if (data.id === newitem.id) {
                    ispresent = true
                }
            })
            if (ispresent) {
                if (existingitem) {
                    existingitem.quantity += 1
                }
                state.totalPrice += existingitem.price
            }
            else {
                state.cart.push(newitem)
                state.totalPrice += newitem.price
            }

        },

        infoHandle: (state, action) => {
            const productid = action.payload
            state.info[productid] = !state.info[productid]
        },

        deleteCart: (state, action) => {
            const cardId = action.payload
            state.cart = state.cart.filter((item) => item.id !== cardId)
        },

        increase: (state, action) => {
            const id = action.payload
            const cartItem = state.cart.find((item) => item.id === id)
            if (cartItem) {
                cartItem.quantity += 1
                if (cartItem.quantity === 0) {
                    cartItem.quantity = 1
                }
            }
        },

        decrease: (state, action) => {
            const id = action.payload
            const cartItem = state.cart.find((item) => item.id === id)
            if (cartItem) {
                cartItem.quantity -= 1
                if (cartItem.quantity === 0) {
                    cartItem.quantity = 1
                }
            }
        },
        setPrice: (state) => {
            const pricetotal = state.cart.reduce((sud, item) => {
                return sud + item.quantity * item.price
            }, 0)
            return {
                ...state, totalPrice: pricetotal
            }
        }



    },

})

export const { addToCart, infoHandle, deleteCart, increase, decrease, setPrice } = cartSlice.actions
export default cartSlice.reducer