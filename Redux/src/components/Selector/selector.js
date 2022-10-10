const authSelector = (state) => (
    console.log('state',state),
    {
authentication:state.auth.authentication
})

export default authSelector
