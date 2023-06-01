import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';

import logo from './logo.svg';
import './App.css';

import { INTRO } from './Intro';
import { INTRO_CONT } from './IntroCont';
import { RESTMODE } from './Restmode';
import { CHECKIN } from './Checkin';
import { HOME } from './Home';
import { THERAPY, PromptContentTherapy, HandleBeginClickTherapy} from './TherapySessions/Therapy';
import { TherapyWelcome } from './TherapySessions/TherapyWelcome';
import { TherapyIntro } from './TherapySessions/TherapyIntro';
import { FetchJSON, TherapyChoices } from './TherapySessions/TherapyChoices'
import { BREATHING } from './Breathing/Breathing';
import { BreathingIntro } from './Breathing/BreathingIntro';
import { SETTINGS } from './Settings';
import { HandleBeginClickRef, REFLECTION } from './ReflectionSessions/reflection';
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
  // FURTHER IMPROVE: Change default to something like asking user to choose theme for the first time. More changes in content displayed needed
  const [theme, setTheme] = useState('gratitude');

  const allThemeCardClickHandlers = {
    balance: () => setTheme('balance'),
    change: () => setTheme('change'),
    confidence: () => setTheme('confidence'),
    gratitude: () => setTheme('gratitude'),
    growth: () => setTheme('growth'),
    health: () => setTheme('health'),
    strength: () => setTheme('strength'),
    truth: () => setTheme('truth'),
    patience: () => setTheme('patience')
  }

  // Structure of the main App
  return (
    <div className="App">
      <Routes>
        <Route index path="/intro" element={<INTRO />} />
        <Route index path="/intro-continue" element={<INTRO_CONT />} />
        <Route index path="/" element={<RESTMODE />} />
        <Route path="/home" element={<HOME currentTheme={theme}/>} />
        <Route path="/checkin" element={<CHECKIN currentTheme={theme}/>} />

        <Route path="/therapy" element={<THERAPY currentTheme={theme}/>}>
          <Route path="" element={<TherapyWelcome/>} />
          <Route path="intro" element={<TherapyIntro/>} />
          {/* <Route path="therapyTest" element={<PromptContentTherapy/>} /> */}
          <Route path="session" element ={<HandleBeginClickTherapy/>}/>
        </Route>

        <Route path="/reflection" element={<REFLECTION currentTheme={theme}/>}>
          <Route path="" element={<ReflectionWelcome/>} />
          <Route path="intro" element={<ReflectionIntro/>} />
          {/* <Route path="reflectionTest" element={<PromptContentReflect/>} /> */}
          <Route path="questions" element={<HandleBeginClickRef/>}/>
        </Route>

        <Route path="/breathing" element={<BREATHING currentTheme={theme}/>}> {/*first 2 comp - want to have in 2 children*/}
          <Route path="" element={<BreathingWelcome />} /> {/* latter 3 comp of BREATHING */}
          <Route path="intro" element={<BreathingIntro />} /> 
          <Route path="exercise" element={<Exercise />} /> 
          <Route path="end" element={<End />} /> 
        </Route>

        <Route path="/settings" element={<SETTINGS />} />
        
        <Route path="/themes" element={<THEMES currentTheme={theme}/>}>
          <Route path="" element={theme==='gratitude'? <Intention /> : <Navigate replace={false} to={"choose-theme"}/>} />
          {/* <Route path="" element={<Intention />} /> */}
          <Route path="choose-theme" element={<ChooseTheme currentTheme={theme} allOnClickHandlers={allThemeCardClickHandlers}/>} />
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

