import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    items:[],
    totalQuantity:0
}
const cartReducer = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItemToCard:(state,action)=> {
            const newItem = action.payload
            const existingItem = state.items.find(item => item.id === newItem.id)
            state.totalQuantity++;
            if(!existingItem) {
                state.items.push({
                    id:newItem.id,
                    price:newItem.price,
                    quantity:1,
                    name:newItem.name,
                    description:newItem.description,
                    totalPrice:newItem.price
                })
            } else {
               existingItem.quantity++;
                    existingItem.totalPrice = existingItem.totalPrice + newItem.price
            }
            },

        removeItemFromCard : (state,action) => {
            const id = action.payload
            const existingItem = state.items.find(item => item.id === id)
            state.totalQuantity--;
            if(existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id)

            } else {
                 existingItem.quantity--;
                    existingItem.totalPrice = existingItem.totalPrice - existingItem.price
            }
        },
        setBackEndCarts: (state,action) => {
            let newQuantity=0;
            action.payload.beItems.map((item) => {
                newQuantity =  newQuantity + item.quantity
            })

            state.items = action.payload.beItems
            state.totalQuantity=newQuantity
        }
    }
})



export const  cartSliceActions = cartReducer.actions
export default cartReducer.reducer;
