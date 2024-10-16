import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Checkout(){
    const dispatch = useDispatch()
    const handleCheckout = () => {

        dispatch({
            type: 'SET_ORDER',
            payload: []
        })
    }

    const allPizzaList = useSelector(store => store.pizzaOrder)
    console.log('Checkout', allPizzaList)

    return(
        <div>
            <ul>
            {allPizzaList.map((pizza) =>(
                <li key={pizza.id}>{pizza.name}: ${pizza.price} </li>
            ))}
            </ul>
            <button onClick={handleCheckout}>Checkout</button>

        </div>



    )
}