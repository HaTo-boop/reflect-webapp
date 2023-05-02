import '../App.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


export function Exercise(props) {
    return (
        <div>
            <Heading />
            <SubHeading />
            <ContinueButton />
            <Flower />
        </div>
    )
}


export function Heading(){
    return(
        <div className="hort-flex heading-frame">
            <div className='intro-guide-text'>
            inhale when the flower expands, and exhale when the flower contracts  
            </div>
        </div>
    )
}

export function SubHeading(){
    return(
        <div className="small-subhead">
            press continue when you feel ready to move on
        </div>
    )
}

export function Flower(){
    return(
        <div className="center-btn">
            
        </div>
    )
}

export function ContinueButton(){
    return (
        <Link to="/breathing/explaination">
            <button className="bottom-middle-btn">
                <div className="button-outer-frame">
                    <div className="button-inner-frame">
                        <div className='pink-btn-content'>
                            <div className='button-text'>continue</div>
                        </div>
                    </div>
                </div>
            </button>
        </Link>
    )
}



