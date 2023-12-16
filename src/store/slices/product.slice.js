import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "products",
    initialState: {
        data: null
    },
    reducers: {
        setData: function(state, action) {
            return {
                ...state,
                data: action.payload
            }
        }
    }
})

export const productReducer = productSlice.reducer;
export const productAction = productSlice.actions;