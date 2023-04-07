import { CardButton } from "./Buttons"
import { Widget } from "./Widget"
import './App.css';

// Components appeared in restmode of the mirror
export function OkButton(props) {
    return (
        <button className="okButton">Click Ok to Start</button>
    )
}

export function Settings(props) {
    return (
        <button className="settings"> </button>
    )
}

export function Affirmations(props) {
    const msg = "My baby can feel my peace." 
    return (
        <div className="affirmation">
            {msg}
        </div>
    )
}

function Clock(props) {
    //API
    return(
        <div>
            <p id="time"> 10:00 </p> 
            <p id="date"> friday, march 2 </p>
        </div>
    )
}
function Weather(props) {
    //API
    return (
        <div class="weather">
            Weather
        </div>
    )

}

export function RestWidget(props) {
    return (
        <div id='rest-widget' class='widget'>
            <Clock/>
            <Weather/>
            <div id='theme'>
                monthly theme
                <CardButton imgSrc="/public/balance_theme.png" content="balance"/>
            </div>
        </div>
    )
}
