import { React, useState } from 'react'
import data from "./ListData.json"

function List(props) {
    //create a new array by filtering the original array
    const filteredData = data.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.country.toLowerCase().includes(props.input)
        }
    })
    return (
        <ul>
            {filteredData.map((item) => (
                <div className="card">
               <li key={item.id}>{item.country},{item.capital}</li>
               </div>
            ))}
        </ul>
    )
}

export default List