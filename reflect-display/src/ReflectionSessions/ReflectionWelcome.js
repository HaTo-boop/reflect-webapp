import { CardButton } from "../Buttons"
import { Exit } from "../Home"
import '../App.css';

import { Link } from 'react-router-dom';

import { useState } from 'react';

export function ReflectionWelcome() {
    return (
        <div>
            <Heading/>
            <SubHeading />
            <Continue />
        </div>
    )
}

export function Heading(){
    return(
        <div className="hort-flex heading-frame">
            <div className='intro-guide-text'>
                welcome to <br /> reflection time
            </div>
        </div>
    )
}

export function SubHeading(){
    return(
        <div className="subhead">
            let's take some time to reflect on your day
        </div>
    )
}

export function Continue(){
    return (
        <Link to="/reflection/intro">
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

const testArray = ['x', 'y', 'z'];

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
                    {/* BUG: Linking not working - intend to link back to begining of  session (with first propmt) but not replaying*/}
                    <Link to="/reflection/reflectionTest">
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

{/* <Link to="reflectionTest">
    <button className="okButton">
        Continue
    </button>
</Link> */}