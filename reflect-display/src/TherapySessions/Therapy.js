import { CardButton } from "../Buttons"
import { Exit } from "../Home"
import '../App.css';
import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getRandomIndex, PromptContentDisplay } from "../App";
import { DisplayTheme } from "../Checkin";
import { TherapyEnd } from "./TherapyEnd";
import { Flower } from "../Breathing/Exercise";


// Shared components for Therapy
export function THERAPY({currentTheme}) {
    return (
        <div>
            <DisplayTheme currentTheme={currentTheme}/>
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

// Handle continue button click in TherapyIntro.js . Displaying info of random
export function HandleBeginClickTherapy() {

    // Dynamic Data:
    // const [sesId, setSesId] = useState(0);  //can be omit since only need to display prompt - will do latre bc low in priority
    // const [prompts, setPrompts] = useState(() => {console.log('Inside prompt state');return []});

    // console.log('ToRandSes renders');
    // // hook only run when there is a change in sesId
    // useEffect(() => {
    //     fetch('/data/reflect-exp-therapy.json')
    //         .then(response => response.json())
    //         .then(json => {
    //             // generate a random index to choose a random session from list of sessions in josn file
    //             setSesId(getRandomIndex(json.length));
    //             // PRINT to inspect
    //             console.log("length: ", json.length);
    //             console.log("Chosen sesId: ", sesId);

    //             // Declare var to store chosen session data
    //             let chosen = json[sesId];
                
    //             console.log("Chosen session's object: ", chosen);

    //             // update prompts to be the array of prompts for the session
    //             setPrompts(chosen.prompts);
                
    //         })
    // }, [sesId]);

    // Static data: Prompt content of Session 1 from /public/reflect-exp-therapy.json
    const prompts = [
        "it may be uncomfortable, but if you are willing, please wear garments that will allow you to have a clear reflection of you",
        "alright, are you ready? ",
        "let's start by relaxing your body",
        "unclench your jaw",
        "drop your shoulders, shake your hands if you'd like",
        "breath in, breath out",
        "remember, you're navigating this at your own pace",
        "today, you will be focusing on your individual body parts and describing it using neutral language",
        "neutral language as in, terms that simply describe your body's characteristics without making any value judgments or comparisons to others\n\nuse descriptions that would help someone build a model of you",
        "let's take a look at your reflection",
        "starting with your head, use neutral language to describe the shapes and colors of your head\n\nfor instance, what is your hair color? what shape are your lips and eyes?",
        "now, use neutral language to describe the shapes and color of your torso\n\nfor instance, what shape best describes your torso?",
        "now, use neutral language to describe the shapes and colors of the bottom section of your body\n\nfor instance, what shape best describes your legs?",
        "if there were areas that you weren't as ready to talk about today, it's alright, come back to them when you're ready",
        "reflection time (please answer as your comfort allows)!\n\nwere there any areas you spent more time on and why?",
        "how are you feeling now that you've practiced describing your body using neutral language?",
        "well done\n\nbeing kind to yourself may not be easy but you're learning how to embrace yourself step-by-step!"
    ]
    

    return (
        <div>
            <PromptContentTherapy promptsArray={prompts}/>
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

export function PromptContentTherapy({promptsArray}) {
    // `prog`: how far the user is progressing in the session (=index of prompt in array)
    // Initial state: starting from the first prompt
    const [prog, setProg] = useState(0);
   
    const nextPrompt = () => {
        setProg(prog + 1);
    }

    console.log(promptsArray.length);

    if (prog < promptsArray.length) {
        // Adding breathing flower from ../Breathing/Exercise.js
        if (promptsArray[prog].includes("breath in, breath out")) {
            return (
                <div>
                    <div className="hort-flex heading-frame">
                        <div className='intro-guide-text'>
                        {promptsArray[prog]}
                        </div>
                    </div>
                    <Flower />
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
        }
    } else {
        return (
            <div>
                <TherapyEnd/>
            </div>
        )
    }
}

