import { Widget } from "./Widget"
import './App.css';

// Components appeared in restmode of the mirror
export function OkButton(props) {
    return (
        <button className="okButton">Click Ok to Start</button>
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
            Clock
        </div>
    )
}
function Weather(props) {
    //API
    return (
        <div>
            Weather
        </div>
    )

}

export function RestWidget(props) {
    return (
        <div>
            <Widget/>
        </div>
    )
}
