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
import { TP1 } from './TherapySessions/tp1';
import { Themes } from './Themes';
import { REFLECTION } from './Reflection';
import { ReflectionIntro, PromptContentReflect } from './ReflectionSessions/ReflectionIntro';



function App() {
  // React components have similar 
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