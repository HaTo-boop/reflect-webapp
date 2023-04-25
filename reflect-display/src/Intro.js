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
            <div className="hort-flex intro-guide-frame">
                <div className='intro-guide-text'>
                    hello there, <br></br> welcome to <div className="pink-text">reflect</div>
                </div>
            </div>
            <span class="material-symbols-outlined">expand_more</span>
            <Information/>
            <Button />
        </div>
    )
}

export function Information(){
    return(
        <div className="inform">
            i will be your new personal reflection companion during this exciting time of your life 
        </div>
    )
}

export function Button(){
    return (
        <div className="button-outer-frame">
            <div className="button-inner-frame">
                <div className='button-text'>start journey</div>
            </div>
        </div>
    )
}