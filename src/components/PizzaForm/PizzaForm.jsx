import React, {useState} from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function PizzaForm(){
    let fetchPizza = useSelector(store => store.pizzaOrder)
    const dispatch = useDispatch();
    console.log('Fetch Pizza', fetchPizza)


    let [pizzaToAdd, setPizzaToAdd] = useState({customer_name: '', street_address: '', city: '', zip: 0, type: '', total: 0, time: 0, pizzas: []})
   // useState({name: '', description: '', price: 0, image_path: ''})

    const handlePizza = (event) => {
        event.preventDefault();

        axios.post('/api/order', pizzaToAdd).then(response => {
        //    fetchPizza()
           setPizzaToAdd('')
        }).catch(err => {
            console.error('POST CLIENT ERROR', err)
        })

         console.log('Pizza To Add', pizzaToAdd)
        // dispatch({
        //     type: 'ADD_PIZZA',
        //     payload: pizzaToAdd
        // });

    }

    const handleName = (event) => {
        setPizzaToAdd({
            ...pizzaToAdd,
            customer_name: event.target.value,
            pizzas: fetchPizza
        });
    }

    const handleStreet = (event) => {
        setPizzaToAdd({
            ...pizzaToAdd,
            street_address: event.target.value
        });
    }

    const handleCity = (event) => {
        setPizzaToAdd({
            ...pizzaToAdd,
            city: event.target.value
        });
    }

    const handleZip = (event) => {
        setPizzaToAdd({
            ...pizzaToAdd,
            zip: event.target.value
        });
    }

    return(
      
        <div>
              <form onSubmit={(event) => handlePizza(event)}>

            <div>
            <input 
            onChange={handleName}
            type="text"
            placeholder="Name"
            />
            </div>
           
            <div>
            <input 
            onChange={handleStreet}
            type="text"
            placeholder="Street Address"
            />
            </div>
           
            
            <div>
            <input 
            onChange={handleCity}
            type="text"
            placeholder="City"
            />
            </div>
            
            
            <div>
            <input 
            onChange={handleZip}
            type="number"
            placeholder="Zip Code"
            />
            </div>
            
            
            <button type="submit" onClick={() => {type: 'ADD_PIZZA'}}>Submit Order</button>
        </form>
        </div>
    )

}