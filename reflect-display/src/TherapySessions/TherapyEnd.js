import '../App.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


export function TherapyEnd(props) {
    return (
        <div>
            <img className="left-stars" src="/left_stars.png" alt="stars" />
            <Heading />
            <img className="right-stars" src="/right_stars.png" alt="stars" />
            <FinishButton />
        </div>
    )
}

export function Heading(){
    return(
        <div className="hort-flex heading-frame">
            <div className='intro-guide-text'>
                you did it!
                    <br></br>
                    <br></br>
                being kind to yourself may not be easy but you're learning how to embrace yourself step-by-step!
            </div>
        </div>
    )
}

export function FinishButton(){
    return (
        <Link to="/home">
            <button className="bottom-middle-btn button-outer-frame finish-btn-outer">
                <div className="button-inner-frame finish-btn-inner">
                    <div className='button-text'>finish</div>
                </div>
            </button>
        </Link>
    )
}



