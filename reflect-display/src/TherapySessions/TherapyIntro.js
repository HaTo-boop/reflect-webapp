import { CardButton } from "../Buttons"
import { Exit } from "../Home"
import '../App.css';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import { ToRandSes } from "./Therapy";

function Welcome(props) {
    return (
        <div className="affirmation glassmorphism hort-flex">
            welcome to exposure therapy
        </div>
    )
}

function UserGuide(props) {
    return (
        <div className="guide glassmorphism hort-flex">
            let’s take some time and reflect on your day. <br/>
               <br></br>
            reflection can help you develop greater self-awareness, make more informed decisions, reduce stress and anxiety, promote personal growth, and improve your relationships with others
        </div>
    )
}

// Continue button link to a random therapy session
// toRandSes defined in Therapy.js
export function TherapyIntro() {
    return (
        <div>
            <Welcome/>
            <UserGuide />
            <Link to="session">
                <button className="okButton" onClick={ToRandSes}>
                    Continue
                </button>
            </Link>
        </div>
    )

}
