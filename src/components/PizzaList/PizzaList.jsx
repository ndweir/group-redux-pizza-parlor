import { useSelector } from "react-redux";
import React from "react";
import PizzaListItem from "../PizzaListItem/PizzaListItem";

export default function PizzaList(){
    const allPizzaList = useSelector(store => store.pizzaList)
  //  console.log('ALL PIZZAS', allPizzaList)
    return(
        <div>
            <ul>
                {allPizzaList.map((pizza) => {
                    return <PizzaListItem key={pizza.id} pizza={pizza} />
                })}

            </ul>
        </div>
    )
}