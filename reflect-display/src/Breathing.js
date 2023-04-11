import { CardButton } from "./Buttons"
import { Widget } from "./Widget"
import { Affirmations, RestWidget, Settings } from "./Restmode"
import './App.css';

export function BREATHING() {
    return (
        <div>
            <Affirmations/>
            <RestWidget/>
            <Settings/>
        </div>
    )
}