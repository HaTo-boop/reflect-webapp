import { Affirmations, RestWidget, Settings } from "./Restmode"
import { Exit } from "./Home"
import './App.css';

import { Link } from 'react-router-dom';

export function SETTINGS(props) {
    return (
        <div>
            <Title/>
            <Options/>
            <ChangeTheme/>
            <Exit/>
        </div>
    )
}

export function Title(props) {
    return (
        <div className="settings-title glassmorphism">
            settings
        </div>
    )
}

// Components appear in the homescreen 
export function Options(props) {
    return (
        <div className="preg-row horz-flex">
            <button className="glassmorphism" id="preg-button">
                i am pregnant
            </button>

            <button className="glassmorphism" id="postpar-button">
                i am postpartum 
            </button>
        </div>
    )
}

export function ChangeTheme(props) {
    return (
        <button className="glassmorphism change-theme" >
            change the theme
        </button>
    )
}

