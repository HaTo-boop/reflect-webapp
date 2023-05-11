import { CardButton } from "../Buttons"
import { Exit } from "../Home"
import '../App.css';
import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getRandomIndex, PromptContentDisplay } from "../App";
import { DisplayTheme } from "../Checkin";
import { TherapyEnd } from "./TherapyEnd";

// Shared components for Therapy
export function THERAPY(props) {
    return (
        <div>
            <DisplayTheme />
            <DisplayFeature />
            <Outlet/>
        </div>
    )
}

export function DisplayFeature(){
    return (
        <div className='current-feature-frame'>
            <div className='pink-ellipse'>
                <div className='current-feature-text'>exposure therapy</div>
            </div>
        </div>
    )
}

export function PromptContentTherapy(promptsArray) {
    // `prog`: how far the user is progressing in the session (=index of prompt in array)
    // Initial state: starting from the first prompt
    const [prog, setProg] = useState(0);
   
    const nextPrompt = () => {
        setProg(prog + 1);
    }

    if (prog < promptsArray.length) {
        return (
            <div>
                <div className="hort-flex heading-frame">
                    <div className='intro-guide-text'>
                    {promptsArray[prog]}
                    </div>
                </div>
                <button className="bottom-middle-btn" onClick={nextPrompt}>
                    <div className="button-outer-frame">
                        <div className="button-inner-frame">
                            <div className='pink-btn-content'>
                                <div className='button-text'>continue</div>
                            </div>
                        </div>
                    </div>
                </button>
            </div>
         )
    } else {
        return (
            <div>
                <TherapyEnd/>
            </div>
        )
    }
}

// Handle continue button click in TherapyIntro.js . Displaying info of random
export function ToRandSes() {
    const [sesId, setSesId] = useState(0);  //can be omit since only need to display prompt - will do latre bc low in priority
    const [prompts, setPrompts] = useState(() => {return []});

    console.log('ToRandSes renders');
    // hook only run when there is a change in sesId
    useEffect(() => {
        fetch('/data/reflect-exp-therapy.json')
            .then(response => response.json())
            .then(json => {
                // generate a random index to choose a random session from list of sessions in josn file
                setSesId(getRandomIndex(json.length));
                // PRINT to inspect
                console.log("length: ", json.length);
                console.log("Chosen sesId: ", sesId);

                // Declare var to store chosen session data
                let chosen = json[sesId];
                
                console.log("Chosen session's object: ", chosen);

                // update prompts to be the array of prompts for the session
                setPrompts(chosen.prompts);
                
            })
    }, [sesId]);


    return (
        <div>
            {PromptContentTherapy(prompts)}
        </div>
    )

}

// export function TherapyWidget(props) {
//     return (
//         <div id='rest-widget' className='widget glassmorphism vert-flex'>
//             <div id="timer">
//                 timer
//             </div>

//             <div id='theme'>
//                 monthly theme
//                 {/* <CardButton imgSrc="/public/balance_theme.png" content="balance"/> */}
//                 <div style={{ margin:"10px auto" }}><b style={{ fontSize:"35px" }}>balance</b></div>
//             </div>
//         </div>
//     )
// }


