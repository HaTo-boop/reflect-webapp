import '../App.css';

import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';

 // Declare variable to store data
 let therapyData = [];

 // Buttons to choose sessions
export async function TherapyChoices() {
    let data;

    const response = await fetch("/data/reflect-exp-therapy.json");

    data = await response.json();
    console.log("in TherapyChoices:", data);

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

 // Getting exposure therapy data
//  Option 1: use Promise (with fetch())
therapyData = fetch("/data/reflect-exp-therapy.json")
     .then(response => response.json())
     .then(data => {
        console.log("Printing within then:\n", data)
        // therapyData = data.map((x) => x); // assign to therapyData & create a deep copy of data (value)
        return data;
     })
     .then()
     .catch(error => console.error(error));
console.log("Printing therapyData outside series of then\n",therapyData);

// Option 2: async function with await
export async function FetchJSON() {
    let data;

    const response = await fetch("/data/reflect-exp-therapy.json");

    data = await response.json();

    
    // Handling onclick
    // IMPROVE: use if-else to condense to 1 function
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
