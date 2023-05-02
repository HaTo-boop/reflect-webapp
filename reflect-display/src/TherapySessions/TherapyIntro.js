import '../App.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { ToRandSes } from "./Therapy";

export function TherapyIntro(props) {
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
                exposure therapy can help you:
            </div>
        </div>
    )
}

export function Benefits(){
    return(
        <div className="benefits-container">
            <div className='benefit-frame'>
                <div className="benefit-bullet"></div>
                <div className='benefit-text'>improve body image</div>
            </div>

            <div className='benefit-frame benefit-frame-2'>
            <div className="benefit-bullet"></div>
                <div className='benefit-text'>make positive changes in yourself-perception</div>
            </div>

            <div className='benefit-frame benefit-frame-3'>
                <div className="benefit-bullet"></div>
                <div className='benefit-text'>increase confidence in social situations</div>
            </div>

            <div className='benefit-frame benefit-frame-4'>
                <div className="benefit-bullet"></div>
                <div className='benefit-text'>become aware of your negative self-talk</div>
            </div>

            <div className='benefit-frame benefit-frame-5'>
                <div className="benefit-bullet"></div>
                <div className='benefit-text'>identify your distorted perceptions</div>
            </div>
        </div>
    )
}

export function ContinueButton(){
    return (
        <Link to="/therapy/session">
            <button className="bottom-middle-btn" onClick={ToRandSes}>
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

