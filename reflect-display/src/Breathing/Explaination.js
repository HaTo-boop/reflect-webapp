import '../App.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


export function Explaination(props) {
    return (
        <div>
            <SubHeading />
            <ContinueButton />
            <Flower />
        </div>
    )
}

export function SubHeading(){
    return(
        <div className="hort-flex heading-frame">
            <div className='small-heading-text'>    
            after doing this exercise you may notice becoming more relaxed
                <br></br>
                <br></br>
            it happens because when you intentionally slow down your breathing, it calms down neural paths in the brain that are related to the arousal center   
            </div>
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
        <Link to="/breathing/end">
            <button className="bottom-middle-btn button-outer-frame">
                <div className="button-inner-frame">
                    <div className='button-text'>continue</div>
                </div>
            </button>
        </Link>
    )
}



