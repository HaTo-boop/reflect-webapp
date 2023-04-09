import { CardButton } from "./Buttons"
import './App.css';

// Components appeared in the daily checkin of the mirror

function Greetings(props) {
    return (
        <div className="affirmation glassmorphism hort-flex">
            hello avery, how are you doing, really?
        </div>
    )
}

function Skip(props) {
    return (
        <button id="skip-button" className="glassmorphism">
            i'll tell you later
        </button>
    )
}

export function CHECKIN(props) {
    return (
        <div id='daily-checkin' className='glassmorphism vert-flex'>
            <Greetings/>
            <div className="checkin-card">
                <CardButton imgSrc="public/card.png" content=""/>
            </div>
            <Skip/>
        </div>
    )
}