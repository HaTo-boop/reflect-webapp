import { CardButton } from "./Buttons"
import { Widget } from "./Widget"
import { StartButton, RestWidget, Settings } from "./Restmode"
import { Exit } from "./Home"
import './App.css';

export function BREATHING(props) {
    return (
        <div>
            <Welcome/>
            <UserGuide/>
            <Settings/>
            <StartButton/>
            <Exit/>
        </div>
    )
}

export function Welcome(props) {
    return (
        <div className="affirmation glassmorphism">
            welcome to the breathing exercise 
        </div>
    )
}

export function UserGuide(props) {
    return (
        <div className="guide glassmorphism hort-flex">
            Breathing exercises reduce stress, promote relaxation, and improve mental clarity, lung function, and cardiovascular health.
        </div>
     )
}