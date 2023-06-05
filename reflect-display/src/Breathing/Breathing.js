import { DisplayTheme } from "../Checkin"
import { Link, Outlet } from 'react-router-dom';

import '../App.css';

export function BREATHING({currentTheme}) {
    return (
        <div>
            <DisplayTheme currentTheme={currentTheme}/>
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

