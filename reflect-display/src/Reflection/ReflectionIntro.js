import { CardButton } from "../Buttons"
import { Exit } from "../Home"
import '../App.css';

import { Link } from 'react-router-dom';

import { useState } from 'react';

function Welcome(props) {
    return (
        <div className="affirmation glassmorphism hort-flex">
            welcome to exposure therapy
        </div>
    )
}

function UserGuide(props) {
    return (
        <div className="guide glassmorphism hort-flex">
            let’s take some time and reflect on your day. <br/>
               <br></br>
            reflection can help you develop greater self-awareness, make more informed decisions, reduce stress and anxiety, promote personal growth, and improve your relationships with others
        </div>
    )
}

const testArray = ['a', 'b', 'c'];

export function TherapyIntro() {

    return (
        <div>
            <Welcome/>
            <UserGuide />
            <Link to="therapyTest">
                <button className="okButton">
                    Continue
                </button>
            </Link>
        </div>
    )

    
    // First page
        // TherapyIntro
        // (Page - choose which therapy to folliow)
            // Call function nextPrompt (through onclick)
                // redefine UserGuide - guide content -> prompt text
                // rerender the page (<div>) 
                    // without the Welcome
                    // with new prompt
                    // (recursion) with Continue button that calls nextPrompt again


    // Base case
        // Ending page - YOu have finish the therapy
        // 2 buttons
            // 1. return to home page (link to homepage)
            // 2. repeat this session or choose another session (link to page after TherapyIntro)

}

export function PromptContent() {
    // prog: how far the user is progressing in the session (=index of prompt in array)
    // Initial state: starting from the first prompt
    const [prog, setProg] = useState(0);
   
    const nextPrompt = () => {
        setProg(prog + 1);
    }

    if (prog < testArray.length) {
        return (
            <div>
                <div className="guide glassmorphism hort-flex">
                    {testArray[prog]}
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
                    <Link to="therapyTest">
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