import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import {connect} from "react-redux";
import globalSelector from "../../Selector/globalSelector";

const Cart = (props) => {
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
          {props.cartItems.map((item) => (
              <CartItem
                  key={item.id}
                  id={item.id}
                  item={{ title: item.name, quantity: item.quantity, total: item.totalPrice, price: item.price,id:item.id }}
              />
          ))}
      </ul>
    </Card>
  );
};

export default connect(globalSelector)(Cart);
