import { CardButton } from "./Buttons"
import { Widget } from "./Widget"
import './App.css';

// Components appeared in restmode of the mirror
export function OkButton(props) {
    return (
        <button className="okButton glassmorphism hort-flex">
            Click<span id="ok"> Ok </span>to Start
        </button>
    )
}

export function Settings(props) {
    return (
        <span class="material-symbols-outlined glassmorphism hort-flex">settings</span>
    )
}

export function Affirmations(props) {
    const msg = "My baby can feel my peace." 
    return (
        <div className="affirmation glassmorphism hort-flex">
            {msg}
        </div>
    )
}

function Clock(props) {
    //API
    return(
        <div className="clock">
            <p id="time"> 10:00 </p> 
            <p id="date"> friday, march 2 </p>
        </div>
    )
}
function Weather(props) {
    //API
    return (
        <div className="weather">
            Weather
        </div>
    )

}

export function RestWidget(props) {
    return (
        <div id='rest-widget' className='widget glassmorphism vert-flex'>
            <Clock/>
            <Weather/>
            <div id='theme'>
                monthly theme
                <CardButton imgSrc="/public/balance_theme.png" content="balance"/>
            </div>
        </div>
    )
}
