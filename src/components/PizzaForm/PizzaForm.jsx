// import React, {useState} from "react";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";

// export default function PizzaForm(){
//     let fetchPizza = useSelector(store => store.pizzaList)
//     const dispatch = useDispatch();

//     let [pizzaToAdd, setPizzaToAdd] = useState({name: ''})
//    // useState({name: '', description: '', price: 0, image_path: ''})

//     const handlePizza = (event) => {
//         event.preventDefault();

//         axios.post('/api/pizza', pizzaToAdd).then(response => {
//            fetchPizza()
//         }).catch(err => {
//             console.error('POST CLIENT ERROR', err)
//         })

        
//         dispatch({
//             type: 'ADD_PIZZA',
//             payload: pizzaToAdd
//         });

//         setPizzaToAdd('')
//     }

//     // const addPizza = (event) => {
        
//     //     console.log('pizzaToAdd:', event.target)

        
//     // }

//     return(
//         // <form onSubmit={handlePizza}>
//         //     <input 
//         //     onChange={(event) => setPizzaToAdd({name: event.target.value})}
//         //     type="text"
//         //     placeholder="Pizza Name"
//         //     value={pizzaToAdd.name}
//         //     />
//         //     <button type="submit" onClick={() => {type: 'ADD_PIZZA'}}>Submit Pizza</button>


//         // </form>

//         <div></div>
//     )

// }