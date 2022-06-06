import { useDispatch, useSelector } from "react-redux";
import { asycnIncrement, asyncLogin } from "../store/actionCreators/actionCreators.";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const { counter, isShowButton } = useSelector((state) => state.counter);
  const {isAuthorized } = useSelector((state) => state.login);
  // const state  = useSelector((state) => state);
  const toggleCounterHandler = () => {
    dispatch({ type: "TOGGLE" });
  };

  const incrementHandler = () => {
    dispatch(asycnIncrement());
  };

  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" });
  };

  const increaseByFive = () => {
    dispatch({type: 'INCREASE', increaseNum: 5})
  }

  const loginHandler = () => {
    dispatch(asyncLogin({name: 'test', password: '123'}))
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isShowButton && <div className={classes.value}>{counter}</div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={incrementHandler}>increment</button>
      <button onClick={increaseByFive}>increase by 5</button>
      <button onClick={decrementHandler}>decrement</button>
      <button onClick={loginHandler}>Login</button>
      {isAuthorized && <h1>You have succefully registered</h1>}
    </main>
  );
};

export default Counter;
