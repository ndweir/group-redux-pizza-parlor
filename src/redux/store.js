import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

// Be sure to replace this reducer! 🙂
const pizzaList = (state = [], action) => {

  if(action.type === 'SET_PIZZA'){
    return action.payload
  }

  if(action.type === 'ADD_PIZZA'){
    return [...state, action.payload]
  }

  if(action.type === 'ADD_PIZZA_ORDER'){
    return [...state, action.payload]
  }

  return state;
}

const store = createStore(
  combineReducers({
    pizzaList, // 👈 Be sure to replace this, too!
  }),
  applyMiddleware(logger),
);


export default store;
