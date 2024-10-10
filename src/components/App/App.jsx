import React from 'react';
import axios from 'axios';
import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom/cjs/react-router-dom.min';

import PizzaForm from '../PizzaForm/PizzaForm';
import PizzaList from '../PizzaList/PizzaList';
import PizzaListItem from '../PizzaListItem/PizzaListItem';
import Checkout from '../Checkout/Checkout';


function App() {
  const dispatch = useDispatch();

  const fetchPizza = () => {
    axios.get('/api/pizza').then(response => {
  //    console.log('GET RESPONSE DATA', response.data)
      dispatch({
        type: 'SET_PIZZA',
        payload: response.data
      })
    }).catch(err => {
      console.error('GET ERROR', err)
    })
  }

  useEffect(() => {
    fetchPizza()
  },[])

  // router sketch out below


  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
      
    <Router>
      <div>
        <li>
          <Link to="/">Pizzas</Link>
        </li>
        <li>
          <Link to="/checkout">Checkout</Link>
        </li>
        <Route exact path="/">
        <PizzaList />
        </Route>

       
      <Route exact path="/checkout">
      <Checkout />
      </Route>
      </div>

    </Router>






    </div>
  );
}

export default App;
