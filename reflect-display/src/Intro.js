import './App.css';
import {Time, Weather} from './Restmode';
import {RestWidget} from "./Restmode"

import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function INTRO(){
    return (
        <div>
            <RestWidget/>
            <Heading />
            {/* <span class="material-symbols-outlined">expand_more</span> */}
            <SubHeading/>
            <StartButton />
        </div>
    )
}

export function Heading(){
    return(
        <div className="hort-flex heading-frame">
            <div className='intro-guide-text'>
                hello there, <br></br> welcome to <span className="pink-text">reflect</span>
            </div>
        </div>
    )
}

export function SubHeading(){
    return(
        <div className="subhead">
            i am your new personal reflection guide during this exciting time of your life 
        </div>
    )
}

export function StartButton(props) {
    return (
        <Link to="/intro-continue">
            <button className="bottom-middle-btn">
                <div className="button-outer-frame">
                    <div className="button-inner-frame">
                        <div className='pink-btn-content'>
                            <div className='button-text'>start journey</div>
                        </div>
                    </div>
                </div>
            </button>
        </Link>   
    )
}

// export function ContinueButton(){
//     return (
//         <Link to="/intro-continue">
//             <button className="bottom-middle-btn button-outer-frame">
//                 <div className="button-inner-frame">
//                     <div className='button-text'>start journey</div>
//                 </div>
//             </button>
//         </Link>
//     )
// }
