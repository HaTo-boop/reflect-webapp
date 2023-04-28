import { CardButton } from "../Buttons"
import { Widget } from "../Widget"
import { StartButton, Settings } from "../Restmode"
import { Exit } from "../Home"
import { DisplayTheme } from "../Checkin"
import { Link, Outlet } from 'react-router-dom';

import '../App.css';

export function THEMES(props) {
    return (
        <div>
            <DisplayTheme />
            <DisplayFeature />
            <Outlet/> {/* Letting the program know where to display children's content */}
        </div>
    )
}

export function DisplayFeature(){
    return (
        <div className='current-feature-frame'>
            <div className='pink-ellipse'>
                <div className='current-feature-text'>breathing exercise</div>
            </div>
        </div>
    )
}

