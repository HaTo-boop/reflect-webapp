import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import logo from './logo.svg';
import './App.css';

import { INTRO } from './Intro';
import { INTRO_CONT } from './IntroCont';
import { RESTMODE } from './Restmode';
import { CHECKIN } from './Checkin';
import { HOME } from './Home';
import { THERAPY, PromptContentTherapy, HandleBeginClick } from './TherapySessions/Therapy';
import { TherapyWelcome } from './TherapySessions/TherapyWelcome';
import { TherapyIntro } from './TherapySessions/TherapyIntro';
import { FetchJSON, TherapyChoices } from './TherapySessions/TherapyChoices'
import { BREATHING } from './Breathing/Breathing';
import { BreathingIntro } from './Breathing/BreathingIntro';
import { SETTINGS } from './Settings';
import { REFLECTION, ToRandRef } from './ReflectionSessions/reflection';
import { ReflectionWelcome, PromptContentReflect } from './ReflectionSessions/ReflectionWelcome';
import { ReflectionIntro } from './ReflectionSessions/ReflectionIntro';
import { BreathingWelcome } from './Breathing/Welcome';
//import { Instruction } from './Breathing/InstructionTrash';
import { Exercise } from './Breathing/Exercise';
//import { Explaination } from './Breathing/ExplainationTrash';
import { End } from './Breathing/End';
import { THEMES } from './Themes/Themes';
import { Intention} from './Themes/Intention';
import { ChooseTheme } from './Themes/ChooseTheme';

// Fetching data using async function
// Trying to fetch JSON data using (1) async function and (2) then() (one line needs to finish execution before moving to next)
// 1. Tested on our local reflect-exp-therapy.json - both gives the same error (Unexpected token/character...)
//    - In console (developer tool) of Chrome, location of error seems to be the index.html file (public folder)
// 2. Tested on a test json file hosted on a web server
//    - Async function: did not give error, but output is undefined
//    - then(): return the right json data

// SOLUTION !!
// Problem with path of file: https://stackoverflow.com/questions/36369082/relative-paths-with-fetch-in-javascript
// => Path of file should be relative to html, not the js file where it's called
//    (not too sure why but here's the given explanation)
//    fetch('data.json') is requesting http://mydomain.com/data.json - have to be relative to the domain root (assuming the html file)

// Async function still doesn work
const testJSON = "/data/reflect-exp-therapy.json";
const testJSON2 = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";

function App() {
  const [theme, setTheme] = useState('general');

  // Structure of the main App
  return (
    <div className="App">
      <Routes>
        <Route index path="/intro" element={<INTRO />} />
        <Route index path="/intro-continue" element={<INTRO_CONT />} />

        <Route index path="/" element={<RESTMODE />} />
        <Route path="/home" element={<HOME />} />
        <Route path="/checkin" element={<CHECKIN />} />

        <Route path="/therapy" element={<THERAPY />}>
          <Route path="" element={<TherapyWelcome/>} />
          <Route path="intro" element={<TherapyIntro/>} />
          <Route path="therapyTest" element={<PromptContentTherapy/>} />
          <Route path="session" element ={<HandleBeginClick/>}/>
        </Route>

        <Route path="/reflection" element={<REFLECTION />}>
          <Route path="" element={<ReflectionWelcome/>} />
          <Route path="intro" element={<ReflectionIntro/>} />
          <Route path="reflectionTest" element={<PromptContentReflect/>} />
          <Route path="questions" element={<ToRandRef/>}/>
        </Route>

        <Route path="/breathing" element={<BREATHING />}> {/*first 2 comp - want to have in 2 children*/}
          <Route path="" element={<BreathingWelcome />} /> {/* latter 3 comp of BREATHING */}
          <Route path="intro" element={<BreathingIntro />} /> 
          <Route path="exercise" element={<Exercise />} /> 
          <Route path="end" element={<End />} /> 
        </Route>

        <Route path="/settings" element={<SETTINGS />} />
        
        <Route path="/themes" element={<THEMES />}>
          <Route path="" element={<Intention />} />
          <Route path="choose-theme" element={<ChooseTheme/>} />
        </Route>

      </Routes> 
      {/* <PromptContent/> */}
    </div>
  );
}

export default App;

// Random generator returning index for an array
// Used in: Affirmations, Reflection and Therapy
export function getRandomIndex(arrayLength) {
  if (arrayLength > 0 ) {
    return Math.floor(Math.random() * (arrayLength));
  } else {
    return 0;
  }
  
}

// NICE-TO-HAVE Improvement: still in the work - endPage is not passed correctly
// 
// Because function is used in more than 1 place, intend to create a component so that it's reusable. Problem is the end page for each
//  feature is different => Still figure out how to pass correctly
// Displaying the content of an array one by one, progress using a Continue button.
// Used in: Reflection and Therapy
// Params:
// - promptsArray: array to be displayed
// - endPage: pass the endPage components - specific to each feature
export function PromptContentDisplay(promptsArray, endPage) {
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
              {endPage}
          </div>
      )
  }
}

