import { CardButton } from "../Buttons"
import { Exit } from "../Home"
import '../App.css';
import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useState } from 'react';

// function Welcome(props) {
//     return (
//         <div className="affirmation glassmorphism hort-flex">
//             welcome to exposure therapy
//         </div>
//     )
// }

// function UserGuide(props) {
//     return (
//         <div className="guide glassmorphism hort-flex">
//             let’s take some time and reflect on your day. <br/>
//                <br></br>
//             reflection can help you develop greater self-awareness, make more informed decisions, reduce stress and anxiety, promote personal growth, and improve your relationships with others
//         </div>
//     )
// }

export function THERAPY(props) {
    return (
        <div>
            <TherapyWidget/>
            <Outlet/>
            <Exit/>
        </div>
    )
}

export function TherapyWidget(props) {
    return (
        <div id='rest-widget' className='widget glassmorphism vert-flex'>
            <div id="timer">
                timer
            </div>

            <div id='theme'>
                monthly theme
                {/* <CardButton imgSrc="/public/balance_theme.png" content="balance"/> */}
                <div style={{ margin:"10px auto" }}><b style={{ fontSize:"35px" }}>balance</b></div>
            </div>
        </div>
    )
}

const testArray = ['a', 'b', 'c'];

export function PromptContentTherapy(promptsArray) {
    // prog: how far the user is progressing in the session (=index of prompt in array)
    // Initial state: starting from the first prompt
    const [prog, setProg] = useState(0);
   
    const nextPrompt = () => {
        setProg(prog + 1);
    }

    if (prog < promptsArray.length) {
        return (
            <div>
                <div className="guide glassmorphism hort-flex">
                    {promptsArray[prog]}
                </div>
                <button className="okButton" onClick={nextPrompt}>
                    Continue
                </button>
            </div>
         )
    } else {
        return (
            <div>
                <div className="guide glassmorphism hort-flex">
                    This is the end of the session. Choose what you want to do next.
                </div>
                <div className="hort-flex">
                    {/* BUG: Linking not working - intend to link back to begining of  session (with first propmt) but not replaying*/}
                    <Link to="/therapy/therapyTest">
                        <button className="okButton">
                            repeat session
                        </button>
                    </Link>
                    {/* TODO: Create page to choose what therapy session to do */}
                    
                </div>
            </div>
        )
    }
}