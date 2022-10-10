import {Component} from "react";
import classes from './Counter.module.css';
import {useSelector,useDispatch,connect} from 'react-redux'
import {counterActions} from '../store/CounterReducer'
const Counter = () => {
    const dispatch = useDispatch();

  const counter = useSelector(state => ({
      counter:state.counter.counter,
      showCounter: state.counter.showCounter
}))

// const showCounter = useSelector(state => state.globalState.showCounter)
    const toggleCounterHandler = () => {
        dispatch(counterActions.toggle())
    };

    const incrementHandler = () => {
      dispatch(counterActions.increment())
    }

    const decrementHandler = () => {
        dispatch(counterActions.decrement())
  }

  const increaseHandler = () => {
      dispatch(counterActions.increase({amount:5}))// {type:'SOME_UNIQUE_IDENTIFIER', payload}
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
        {counter.showCounter && <div className={classes.value}>{counter.counter}
        </div> }
        <button onClick={() => dispatch(counterActions.increment())}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
export default  Counter

//CLASS BASED COMPONENT REDUX

// class Counter extends Component {
//     incrementHandler = () => {
//         this.props.increment()
//
// }
//
//     decrementHandler = () => {
//         this.props.decrement()
//     }
//     toggleCounterHandler() {
//
//     }
//     render() {
//         return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{this.props.counter}
//       </div>
//         <button onClick={this.incrementHandler}>Increment</button>
//         <button onClick={this.decrementHandler}>Decrement</button>
//       <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
//     }
// }
//
// const mapStateToProps = (state) => {
//     return {
//         counter:state.counter
//     }
// }
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         increment: () => dispatch({type:'increment'}),
//         decrement: () => dispatch({type:'decrement'})
//     }
//
// }
// export default connect(mapStateToProps,mapDispatchToProps)(Counter);
