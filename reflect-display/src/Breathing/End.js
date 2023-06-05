import '../App.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


export function End(props) {
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
                well done!
                    <br></br>
                    <br></br>
                keep up the good work, i’m always here to support you
            </div>
        </div>
    )
}

export function FinishButton(){
    return (
        <Link to="/home">
            <button className="bottom-middle-btn">
                <div className="button-outer-frame finish-btn-outer">
                    <div className="button-inner-frame finish-btn-inner">
                        <div className='pink-btn-content'>
                            <div className='button-text'>finish</div>
                        </div>
                    </div>
                </div>
            </button>
        </Link>
    )
}



