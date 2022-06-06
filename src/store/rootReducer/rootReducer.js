// const store = require('redux')
import { combineReducers, createStore } from "redux";

const initialState = {
  counter: 0, 
  isShowButton: false,
}

const initialLoginState = {
  token: '',
  isAuthorized: false
}

const loginReducer = (prevState = initialLoginState, action) => {
  if(action.type === 'LOGIN') {
    if(action.loginId) {
      return {
        token: action.loginId,
        isAuthorized: true
    }
    }
  }

  // ....
  return prevState
}

const counterReducer = (prevState = initialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      ...prevState, // {counter: 0, isLoggedIn: false }
      counter: prevState.counter + 1,
    };
  }

  if(action.type === "INCREASE") {
    return {
      ...prevState,
      counter: prevState.counter + action.increaseNum
    }
  }

  if (action.type === "DECREMENT") {
    return {
      ...prevState,
      counter: prevState.counter - 1,
    };
  }

  if(action.type === 'TOGGLE') {
    return {
      ...prevState,
      isShowButton: !prevState.isShowButton
    }
  }

  return prevState;
};

// const store = createStore(counterReducer);
const rootReducer = combineReducers({
  login:loginReducer,
  counter:counterReducer
})

export default rootReducer;
