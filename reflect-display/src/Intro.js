import './App.css';
import {Time, Weather} from './Restmode';

import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function INTRO(){
    return (
        <div>
            <Time />
            <Weather />
            <Heading />
            {/* <span class="material-symbols-outlined">expand_more</span> */}
            <SubHeading/>
            <ContinueButton />
        </div>
    )
}

export function Heading(){
    return(
        <div className="hort-flex heading-frame">
            <div className='intro-guide-text'>
                hello there, <br></br> welcome to <div className="pink-text">reflect</div>
            </div>
        </div>
    )
}

export function SubHeading(){
    return(
        <div className="subhead">
            i will be your new personal reflection companion during this exciting time of your life 
        </div>
    )
}

export function ContinueButton(){
    return (
        <Link to="/intro-continue">
            <button className="bottom-middle-btn button-outer-frame">
                <div className="button-inner-frame">
                    <div className='button-text'>start journey</div>
                </div>
            </button>
        </Link>
    )
}