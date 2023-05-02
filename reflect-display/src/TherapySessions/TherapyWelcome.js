
import { CardButton } from "../Buttons"
import { Widget } from "../Widget"
import { StartButton, Settings } from "../Restmode"
import { Exit } from "../Home"
import { DisplayTheme } from "../Checkin"
import { Link, Outlet } from 'react-router-dom'

import '../App.css';

import { ToRandSes } from "./Therapy";

// Continue button link to a random therapy session
// toRandSes defined in Therapy.js
export function TherapyWelcome() {
    return (
        <div>
            <Heading />
            <SubHeading />
            <Continue/>
        </div>
    )
}

export function Heading(){
    return(
        <div className="hort-flex heading-frame">
            <div className='intro-guide-text'>
                welcome to <br /> exposure therapy
            </div>
        </div>
    )
}

export function SubHeading(){
    return(
        <div className="subhead">
            let's build a better relationship with your body
        </div>
    )
}

export function Continue(){
    return (
        <Link to="/therapy/intro">
            <button className="bottom-middle-btn">
                <div className="button-outer-frame">
                    <div className="button-inner-frame">
                        <div className='pink-btn-content'>
                            <div className='button-text'>continue</div>
                        </div>
                    </div>
                </div>
            </button>
        </Link>
     )
}

// export function Continue(){
//     return (
//         <Link to="/session">
//             <button className="bottom-middle-btn button-outer-frame" onClick={ToRandSes}>
//                 <div className="button-inner-frame">
//                     <div className='button-text'>continue</div>
//                 </div>
//             </button>
//         </Link>
//      )
// }
