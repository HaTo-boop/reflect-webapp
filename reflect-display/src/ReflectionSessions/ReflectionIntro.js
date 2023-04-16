import { CardButton } from "../Buttons"
import { Exit } from "../Home"
import '../App.css';

import { Link } from 'react-router-dom';

import { useState } from 'react';

function Welcome(props) {
    return (
        <div className="affirmation glassmorphism hort-flex">
            welcome to reflection time
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

export function ReflectionIntro() {

    return (
        <div>
            <Welcome/>
            <UserGuide />
            <Link to="reflectionTest">
                <button className="okButton">
                    Continue
                </button>
            </Link>
        </div>
    )
}

export function PromptContentReflect() {
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
                    Well done! keep up the good work. Im always here to support u. 
                </div>
                <div className="hort-flex">
                    <Link to="reflectionTest">
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