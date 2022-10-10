import {createSlice} from "@reduxjs/toolkit";

const authInitialState = {
    authentication:false
}
const authSlice = createSlice({
    name:'Authentication',
    initialState:authInitialState,
    reducers:{
        login: (state) => {state.authentication = true},
        logout: (state) => {state.authentication = false}
    }

})
export const authActions = authSlice.actions
export default authSlice.reducer
