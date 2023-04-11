import { CardButton } from "./Buttons"
import './App.css';

import { Link } from "react-router-dom"

// Components appeared in the daily checkin of the mirror

export function CHECKIN(props) {
    return (
        <div id='daily-checkin' className='glassmorphism vert-flex'>
            <Greetings/>
            <div className="checkin-card">
                <img src="public\card.png" alt="Happy"/>
            </div>
            <Skip/>
        </div>
    )
}

function Greetings(props) {
    return (
        <div className="affirmation glassmorphism hort-flex">
            hello avery, how are you doing, really?
        </div>
    )
}

function Skip(props) {
    return (
        <Link to="/home">
            <button id="skip-button" className="glassmorphism">
                i'll tell you later
            </button>
        </Link>
    )
}