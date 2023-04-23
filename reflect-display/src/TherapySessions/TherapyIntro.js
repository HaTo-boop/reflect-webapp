import { CardButton } from "../Buttons"
import { Exit } from "../Home"
import '../App.css';

import { Link } from 'react-router-dom';

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

export function TherapyIntro() {
    return (
        <div>
            <Welcome/>
            <UserGuide />
            <Link to="sessions">
                <button className="okButton">
                    Continue
                </button>
            </Link>
        </div>
    )

 // Logic:   
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
