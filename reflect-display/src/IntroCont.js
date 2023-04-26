import './App.css';
import {Time, Weather} from './Restmode';
import { Link } from 'react-router-dom';



export function INTRO_CONT(){
    return (
        <div>
            <Time />
            <Weather />
            <Heading />
            <SubHeading />
            <AppOverview />
            <Button />
        </div>
    )
}

export function Heading(){
    return(
        <div className="head-intro-frame">
            <div className='intro-guide-text'>
                i'm here to help you take some <div className='yellow-text'>time for yourself</div>
            </div>
        </div>
    )
}

export function SubHeading(){
    return(
        <div className="subhead-text subhead-intro-frame">
            what you do is up to you 
        </div>
    )
}

export function AppOverview(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-1">breathing exercise</div>
                <div className="col-2">take a minute to center your breathing</div>
            </div>
            <div className="row">
                <div className="col-1">reflection time</div>
                <div className="col-2">reflect on your day with thoughtful prompts</div>
            </div>
            <div className="row">
                <div className="col-1">exposure therapy</div>
                <div className="col-2">build a better relationship with your body using clinically-proven techniques</div>
            </div>
        </div> 
    )
}

export function Button(){
    return (
        <Link to="/home">
            <button className="bottom-middle-btn button-outer-frame">
                <div className="button-inner-frame">
                    <div className='button-text'>continue</div>
                </div>
            </button>
        </Link>
     )
}