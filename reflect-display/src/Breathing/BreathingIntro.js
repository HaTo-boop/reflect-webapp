import '../App.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


export function BreathingIntro(props) {
    return (
        <div>
            <Heading />
            <ContinueButton />
            <Benefits />
        </div>
    )
}

export function Heading(){
    return(
        <div className="hort-flex heading-frame">
            <div className='intro-guide-text'>
                breathing exercise can help you:
            </div>
        </div>
    )
}

export function Benefits(){
    return(
        <div className="benefits-container">
            <div className='benefit-frame'>
                <div className="benefit-bullet"></div>
                <div className='benefit-text'>reduce stress</div>
            </div>

            <div className='benefit-frame benefit-frame-2'>
            <div className="benefit-bullet"></div>
                <div className='benefit-text'>promote relaxation</div>
            </div>

            <div className='benefit-frame benefit-frame-3'>
                <div className="benefit-bullet"></div>
                <div className='benefit-text'>improve mental clarity</div>
            </div>

            <div className='benefit-frame benefit-frame-4'>
                <div className="benefit-bullet"></div>
                <div className='benefit-text'>better lung functionality</div>
            </div>

            <div className='benefit-frame benefit-frame-5'>
                <div className="benefit-bullet"></div>
                <div className='benefit-text'>improve cardiovascular health</div>
            </div>
        </div>
    )
}

export function ContinueButton(){
    return (
        <Link to="/breathing/instruction">
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

