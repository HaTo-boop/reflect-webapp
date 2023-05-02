import { CardButton } from "../Buttons"
import { Exit } from "../Home"
import '../App.css';
import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getRandomIndex } from "../App";
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
                <button className="bottom-middle-btn button-outer-frame" onClick={nextPrompt}>
                    <div className="button-inner-frame">
                        <div className='button-text'>continue</div>
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
    const [sesId, setSesId] = useState(0);
    // const [title, setTitle] = useState("");
    // const [intention, setIntention] = useState("");
    const [prompts, setPrompts] = useState([]);

    console.log('render');
    // hook only run when there is a change in sesId
    useEffect(() => {
        fetch('/data/reflect-exp-therapy.json')
            .then(response => response.json())
            .then(json => {

                setSesId(getRandomIndex(json.length));
                // PRINT to inspect
                console.log("length: ", json.length);
                console.log("Chosen sesId: ", sesId);

                // Declare var to store chosen session data
                let chosen = json[sesId];
                
                console.log("Chosen session's object: ", chosen);

                // IMPROVE? setState to set multiple state at once
                // setTitle(chosen.title);
                // setIntention(chosen.intention);
                setPrompts(chosen.prompts);
                
            })
    }, [sesId]);


    return (
        <div className="hort-flex heading-frame">
            <div className='intro-guide-text'>
            {/* Session Title: {title}
            <br></br>
            {intention}
            <button className="okButton" onClick={() => PromptContentTherapy(prompts)}>
                Continue
            </button> */}
                {PromptContentTherapy(prompts)}
            </div>
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


