import { CardButton } from "../Buttons"
import { Exit } from "../Home"
import '../App.css';

import { Link } from 'react-router-dom';

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

const testArray = ['a', 'b', 'c'];

function nextPrompt() {
    
}

export function TherapyIntro() {
    return (
        <div>
            <Welcome/>
            <UserGuide />
            <button className="okButton" onclick={nextPrompt}>
                Continue
            </button>
        </div>
    )
}