import { createSlice } from "@reduxjs/toolkit";

const receiptSlice = createSlice({
    name: "receipt",
    initialState: {
        cart: null,
        // cart: [],
        receipt: []
    },
    reducers: {
        setReceipt: function(state, action) {
            return {
                ...state,
                receipt: action.payload
            }
        },
        setCart: function(state, action) {
            return {
                ...state,
                cart: action.payload
            }
        },

        //------------------------------
        deleteReceipt: function(state, action) {
            return {
                ...state,
                // receipt: action.payload,
                receipt: state.receipt.filter(item => item.id !== action.payload)
            }
        },
    }
})

export const receiptReducer = receiptSlice.reducer;
export const receiptAction = receiptSlice.actions;