import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function PizzaListItem({pizza}){
    console.log('Pizza List Item', pizza)

    const dispatch = useDispatch();

    const addPizzaToOrder = () => {
        dispatch({
            type: 'ADD_PIZZA',
            payload: pizza
        })
    }

    return (
        <div>
            {/* {pizza.image_path}  */}
            <div>
           <h3>{pizza.name}</h3> 
            {pizza.description}
            <div>${pizza.price}</div>
            </div>
            <button onClick={addPizzaToOrder}>Add Pizza To Order</button>

        </div>
    )

}