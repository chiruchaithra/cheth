import classes from './CartButton.module.css';
import {useDispatch} from 'react-redux'
import {uiActions} from '../../store/UiReducer'
import globalSelector from "../../Selector/globalSelector";
import {connect} from "react-redux";

const CartButton = (props) => {
    const dispatch =useDispatch()
    const toggleCounterHandler = () => {
        dispatch(uiActions.toggle())
    };
  return (
    <button className={classes.button} >
      <span onClick={toggleCounterHandler}>My Cart</span>
      <span className={classes.badge}>{props.totalQuantity}</span>
    </button>
  );
};

export default connect(globalSelector)(CartButton);
