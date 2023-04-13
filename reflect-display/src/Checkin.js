import { CardButton } from "./Buttons"
import './App.css';

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
        <div className="horz-flex checkin-row">
            <button>
                <img src="happy.png" />
            </button>

            <button>
                <img src="inspired.png" />
            </button>

            <button>
                <img src="focused.png" />
            </button>
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