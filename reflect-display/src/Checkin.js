import { CardButton } from "./Buttons"
import './App.css';
/*import card from './card.png';*/

import { Link } from "react-router-dom"

// Components appeared in the daily checkin of the mirror

export function CHECKIN(props) {
    return (
        <div>
            <Greetings/>
            <Cards/>
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

function Cards(props) {
    return (
        <div className="checkin-row">
            <div className="checkin-card-1">
                <img src="happy.png" />
            </div>

            <div className="checkin-card-2">
                <img src="inspired.png" />
            </div>

            <div className="checkin-card-3">
                <img src="focused.png" />
            </div>
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