import { CardButton } from "../Buttons"
import { Exit } from "../Home"
import '../App.css';
import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getRandomIndex } from "../App";
import { DisplayTheme } from "../Checkin";
import { TherapyEnd } from "./TherapyEnd";
import { Flower } from "../Breathing/Exercise";

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


// When Begin button is clicked, fetch the full exposure therapy data 
export function HandleBeginClick(props) {
    const [therData, setTherData] = useState([]);

    console.log('HandleBeginClick renders');

    useEffect(() => {
        fetch('/data/reflect-exp-therapy.json')
            .then(response => response.json())
            .then(json => {
                console.log("json: " ,json);
                // generate a random index to choose a random session from list of sessions in josn file
                // 105 - 113: can be in toRandSes
                
                setTherData(json);
                console.log("therData:", therData);
            });
        }, []);
    

    return (
        <div>
            {/* <ShowRandomSes data={therData}/> */}
            {therData}
        </div>
    )
}

// Handle continue button click in TherapyIntro.js . Displaying info of random
// SOLUTION: Want to move the state that store the data 
// IMPROVE: Name function based on what it's role on the page - important for debugging
// => CONSIDER: changing ToRandSes into something more indicative of what it does in the program
//      - Handle the click of the Begin button
function ShowRandomSes(data) {
    const [prompts, setPrompts] = useState([]);

    console.log('ShowRandomSes renders');
    // hook only run when there is a change in sesId
    // SOLUTION: Move fetching up to a parent component
    // "Lifting up state" - moving the state up to a parent component so that it can pass props down to children
    // => CONSIDER: Moving useEffect (Effect hook is for using data ONLY) onto a parent component - pass down props to ToRandSes
   
    let sesId = getRandomIndex(data.length);
    // PRINT to inspect
    console.log("length: ", data.length);
    console.log("Chosen sesId: ", sesId);

    // Declare var to store chosen session data
    let chosen = data[sesId];
    
    console.log("Chosen session's object: ", chosen);

    // update prompts to be the array of prompts for the session
    setPrompts(chosen.prompts);
    // ERROR 2: This is where Joel think the Re-rendering error is: would not want to reset   
    


    // ERROR 1: This is where Joel think the Invalid Hook Call error is: calling component as a function is violating the Rule of Hook
    // Never call component like how you call function
    // 1. Here, React is callling function using React argument (more expansive than my usual arg - has much more details)
    // My: prompts
    // React: prompts + other props for React to be able to display it.
    // 2. useState is not used in this case

    // If calling it as React Component doesn't work - 
    // Might work in once case, but might fall
    
    // CONSIDER: What parts of the page is my component here. What part of the page is PromptContentTherapy. How it's distinct from ToRandSes 
    return (
        <div>
            <PromptContentTherapy promptsArray={prompts} />
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

