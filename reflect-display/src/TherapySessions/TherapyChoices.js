import '../App.css';

import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';

import { fetchJSON } from '../App';

function FetchJSON() {
   
}

 // Declare variable to store data
 let therapyData = [];

 // Getting exposure therapy data
 // useEffect(() => {
     
 // }, []);
 therapyData = fetch("/data/reflect-exp-therapy.json")
     .then(response => response.json())
     .then(data => {
        console.log("Printing within fetch:\n", data)
        // therapyData = data.map((x) => x); // assign to therapyData & create a deep copy of data (value)
        return data;
     })
     .then()
     .catch(error => console.error(error));
console.log("Printing therapyData\n",therapyData);
// Handling onclick
// IMPROVE: use if-else to condense to 1 function
function session1() {

}

// Buttons to choose sessions
export function TherapyChoices() {
    return (
        <div className='hort-flex'> 
            <button className="therapy-session glassmorphism" id="sesh1">
                Sessions 1
            </button>

            <button className="therapy-session glassmorphism" id="sesh2">
                Sessions 2
            </button>

            <button className="therapy-session glassmorphism" id="sesh3">
                Sessions 3
            </button>
        </div>
    )
}