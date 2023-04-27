import { CardButton } from "../Buttons"
import { Widget } from "../Widget"
import { StartButton, Settings } from "../Restmode"
import { Exit } from "../Home"
import { DisplayTheme } from "../Checkin"
import { Link, Outlet } from 'react-router-dom'
import { DisplayFeature } from "./Breathing"

import '../App.css';

export function Welcome(props) {
    return (
        <div>
            <Heading />
            <SubHeading />
            <ContinueButton/>
        </div>
    )
}

export function Heading(){
    return(
        <div className="hort-flex heading-frame">
            <div className='intro-guide-text'>
                welcome to the breathing exercise
            </div>
        </div>
    )
}

export function SubHeading(){
    return(
        <div className="subhead">
            let's control your breathing
        </div>
    )
}

export function ContinueButton(){
    return (
        <Link to="/breathing/intro">
            <button className="bottom-middle-btn button-outer-frame">
                <div className="button-inner-frame">
                    <div className='button-text'>continue</div>
                </div>
            </button>
        </Link>
    )
}