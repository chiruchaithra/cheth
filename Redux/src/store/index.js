import {createSlice,configureStore} from '@reduxjs/toolkit'
import AuthReducer from '../store/AuthReducer'
import counterReducer from '../store/CounterReducer'
const store = configureStore(({
    reducer: {
        counter:counterReducer,
    auth:AuthReducer
    }
}))

export default store
