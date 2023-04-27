import '../App.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


export function Instruction(props) {
    return (
        <div>
            <Heading />
            <ContinueButton />
            <Flower />
        </div>
    )
}


export function Heading(){
    return(
        <div className="hort-flex heading-frame">
            <div className='small-heading-text'>
                you will synchronize your breath with the flower, and you are encouraged to do it as many times as you need to
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
        <Link to="/breathing/exercise">
            <button className="bottom-middle-btn button-outer-frame">
                <div className="button-inner-frame">
                    <div className='button-text'>start</div>
                </div>
            </button>
        </Link>
    )
}



