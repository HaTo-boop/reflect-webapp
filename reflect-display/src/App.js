import { Routes, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import { RESTMODE } from './Restmode';
import { CHECKIN } from './Checkin';
import { HOME } from './Home';
import { THERAPY } from './Therapy';
import { BREATHING } from './Breathing';
import { SETTINGS } from './Settings';
import { TherapyIntro, PromptContentTherapy } from './TherapySessions/TherapyIntro';
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
export async function getJSON() {
  const testJSON = "../public/data/reflect-exp-therapy.json"
  const testJSON2 = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"

  const response = await fetch(testJSON2)
  console.log(response.json().data);
}

fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

function App() {
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