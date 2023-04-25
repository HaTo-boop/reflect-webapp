import '../App.css';

import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';

 // Page displaying buttons to choose exposure therapy session
 // NOTE: Not used in this project to avoid adding another layer of choice for user
 // - prompts: array of chosen session's prompts
 // - title, intention: strings, chosen session's title and intention
 //  [!]: Does not connect to specific session page. Not display title and intention of each session
 //  [!]: css not updated
export function TherapyChoices() {
    const [session, setSession] = useState(null);
    const [title, setTitle] = useState("");
    const [intention, setIntention] = useState("");
    const [prompts, setPrompts] = useState([]);
    
    console.log('render')
    // hook only run when there is a change in session
    useEffect(() => {
        fetch('/data/reflect-exp-therapy.json')
            .then(response => response.json())
            .then(json => {
                console.log("Chosen session: ", session, typeof(session));
                // Declare var to store chosen session data
                let chosen = '';
                
                // Filter for chosen session
                // BUG (R): string comparison not working as expected => filter() was the problem, not sure why
                function isChosenSes(sesObj, chosenSes) {
                    console.log("sesObj: ", sesObj.session, typeof(sesObj.session));
                    console.log(sesObj.session === chosenSes);

                    return sesObj.session === chosenSes;
                }
                
                json.forEach(element => {
                    if (isChosenSes(element, session)) {
                        chosen = element;
                    }
                });
                
                // console.log("inside fetch", prompts);
                console.log("Chosen session's object: ", chosen);

                // IMPROVE? setState to set multiple state at once
                setTitle(chosen.title);
                setIntention(chosen.intention);
                setPrompts(chosen.prompts);
                
            })
    }, [session])

    return (
        <div className='hort-flex'> 
            <button className="therapy-session glassmorphism" onClick={() => setSession('ses1')}>
                Sessions 1
            </button>

            <button className="therapy-session glassmorphism" onClick={() => setSession('ses2')}>
                Sessions 2
            </button>

            <button className="therapy-session glassmorphism" onClick={() => setSession('ses3')}>
                Sessions 3
            </button>
        </div>
        
    )
}


