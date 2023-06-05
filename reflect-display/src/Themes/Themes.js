import { DisplayTheme } from "../Checkin"
import { Outlet } from 'react-router-dom';
import '../App.css';

export function THEMES({currentTheme}) {
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
                <div className='current-feature-text'>choose a theme</div>
            </div>
        </div>
    )
}

