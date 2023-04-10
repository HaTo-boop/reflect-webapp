import { CardButton } from "./Buttons"
import { Widget } from "./Widget"
import { Affirmations, RestWidget, Settings } from "./Restmode"
import './App.css';

// Components appear in the homescreen 
export function Features(props) {
    return (
        <div className="feature-col">
            <button className="feature-button">
                reflection time
            </button>

            <button className="feature-button">
                exposure therapy
            </button>
            
            <button className="feature-button">
                breathing exercise
            </button>

        </div>
    )
}

export function Exit(props) {
    return (
        <button className="exit glassmorphism">
            <span class="material-symbols-outlined hort-flex">logout</span>
        </button>
    )
}

export function HOME(props) {
    return (
        <div>
            <Affirmations/>
            <RestWidget/>
            <Settings/>
            <Features/>
            <Exit/>
        </div>
    )
}


