const globalSelector = (state) => ({
    shoppingCartVisible: state.uiSlice.shoppingCartVisible,
    notification: state.uiSlice.notification,
    totalQuantity:state.cart.totalQuantity,
    cartItems:state.cart.items
})
export default globalSelector
