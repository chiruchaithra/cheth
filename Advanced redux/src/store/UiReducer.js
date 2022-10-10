import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    shoppingCartVisible: false,
    notification:null
}

const uiReducer = createSlice({
    name:'Ui',
    initialState,
    reducers: {
        toggle(state)  {
            state.shoppingCartVisible=!state.shoppingCartVisible
        },

        showNotification: (state,action) => {
            state.notification = {
                status:action.payload.status,
                title:action.payload.title,
                message:action.payload.message
            }
        }
    }
})
export const uiActions = uiReducer.actions
export default uiReducer.reducer
