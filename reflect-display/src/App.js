import { Routes, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import { RESTMODE } from './Restmode';
import { CHECKIN } from './Checkin';
import { HOME } from './Home';
import { THERAPY, PromptContentTherapy } from './TherapySessions/Therapy';
import { FetchJSON, TherapyChoices } from './TherapySessions/TherapyChoices'
import { BREATHING } from './Breathing';
import { SETTINGS } from './Settings';
import { TherapyIntro } from './TherapySessions/TherapyIntro';
import { Themes } from './Themes';
import { REFLECTION } from './Reflection';
import { ReflectionIntro, PromptContentReflect } from './ReflectionSessions/ReflectionIntro';


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
  TherapyChoices();
  // Structure of the main App
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<RESTMODE />} />
        <Route path="/home" element={<HOME />} />
        <Route path="/checkin" element={<CHECKIN />} />
        <Route path="/therapy" element={<THERAPY />}>
          <Route path="" element={<TherapyIntro/>} />
          <Route path="therapyTest" element={<PromptContentTherapy/>} />
          <Route path="sessions" element ={<TherapyChoices/>}/>
        </Route>
        <Route path="/reflection" element={<REFLECTION />}>
          <Route path="" element={<ReflectionIntro/>} />
          <Route path="reflectionTest" element={<PromptContentReflect/>} />
        </Route>
        <Route path="/breathing" element={<BREATHING />} />
        <Route path="/settings" element={<SETTINGS />} />
        <Route path="/themes" element={<Themes />} />
      </Routes> 
      {/* <PromptContent/> */}
    </div>
  );
}

export default App;