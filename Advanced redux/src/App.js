import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import globalSelector from "./Selector/globalSelector";
import {connect} from "react-redux";
import {useEffect,Fragment} from "react";
import {useDispatch} from "react-redux";
import {uiActions} from './store/UiReducer'
import {cartSliceActions} from './store/cartReducer'
import Notification from "./components/UI/Notification/Notification";

let IsInitial = true
function App(props) {
    const dispatch = useDispatch()
    const {cartItems,notification} = props

    useEffect( () => {
        const fetchData = async () => {
            const response = await fetch('https://advance-react-424ec-default-rtdb.firebaseio.com/cart.json')
            const resp =  await response.json()
            if(resp) {
                dispatch(cartSliceActions.setBackEndCarts({beItems:resp}))
            }
        }
        fetchData()
    },[])

    useEffect(() => {
        const sendCartData = async () => {
            dispatch(uiActions.showNotification({
                message: 'Sending cart data..',
                status: 'pending',
                title: 'Pending'
            }))
                const response = await fetch('https://advance-react-424ec-default-rtdb.firebaseio.com/cart.json', {
                    method: 'PUT',
                    body: JSON.stringify(cartItems)
                })
                if (!response.ok) {
                    throw new Error('Something went wrong')
                }


                dispatch(uiActions.showNotification({
                    message: 'Sent cart data successfully',
                    status: 'success',
                    title: 'Success'
                }))

        }
            if(IsInitial) {
                IsInitial=false
                return
            }

        sendCartData().catch((error => {
            dispatch(uiActions.showNotification({
                message:error.message,
                status:'error',
                title:'Error'
            }))
        }))

    },[cartItems])
  return (
      <Fragment>
          {notification && <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
          /> }
          <Layout>
              {props.shoppingCartVisible ? <Cart/> : ''}
              <Products />
          </Layout>
      </Fragment>

  );
}

export default connect(globalSelector)(App);
