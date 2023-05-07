import '../App.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { ToRandRef } from './reflection';

export function ReflectionIntro(props) {
    return (
        <div>
            <Heading />
            <Benefits />
            <div className='ready-prompt'>are you ready?</div>
            <ContinueButton />
        </div>
    )
}

export function Heading(){
    return(
        <div className="hort-flex heading-frame">
            <div className='intro-guide-text'>
                reflection can help you:
            </div>
        </div>
    )
}

export function Benefits(){
    return(
        <div className="benefits-container">
            <div className='benefit-frame'>
                <div className="benefit-bullet"></div>
                <div className='benefit-text'>develop grester self-awareness</div>
            </div>

            <div className='benefit-frame benefit-frame-2'>
            <div className="benefit-bullet"></div>
                <div className='benefit-text'>make more informed decision</div>
            </div>

            <div className='benefit-frame benefit-frame-3'>
                <div className="benefit-bullet"></div>
                <div className='benefit-text'>reduce stress and anxiety</div>
            </div>

            <div className='benefit-frame benefit-frame-4'>
                <div className="benefit-bullet"></div>
                <div className='benefit-text'>promote personal growth</div>
            </div>

            <div className='benefit-frame benefit-frame-5'>
                <div className="benefit-bullet"></div>
                <div className='benefit-text'>improve your relationship with others</div>
            </div>
        </div>
    )
}

export function ContinueButton(){
    return (
        <Link to="/reflection/questions">
            <button className="bottom-middle-btn" onClick={ToRandRef}>
                <div className="button-outer-frame">
                    <div className="button-inner-frame">
                        <div className='pink-btn-content'>
                            <div className='button-text'>begin</div>
                        </div>
                    </div>
                </div>
            </button>
        </Link>
    )
}

