import {configureStore} from '@reduxjs/toolkit'
import UiSliceReducer from './UiReducer'
import CartReducer from "./cartReducer";
const store = configureStore({
    reducer:{
        uiSlice:UiSliceReducer,
        cart:CartReducer
    }
})
export default store
