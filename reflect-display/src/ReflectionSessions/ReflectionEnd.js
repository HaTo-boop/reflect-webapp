import '../App.css';
import { Link } from 'react-router-dom';
import React from 'react';


export function ReflectionEnd(props) {
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
                you've just accomplished something amazing: you allowed yourself the time and space for self-awareness and personal understanding!            </div>
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



