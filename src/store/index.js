import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { productReducer } from './slices/product.slice'
import { userReducer } from "./slices/user.slice";
import { receiptReducer } from "./slices/receipt.slice";

const RootReducer = combineReducers({
    productStore: productReducer,
    userStore: userReducer,
    receiptStore: receiptReducer
})

export const store = configureStore({
    reducer: RootReducer
})

