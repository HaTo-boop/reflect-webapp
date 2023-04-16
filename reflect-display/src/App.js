import { Routes, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import { RESTMODE } from './Restmode';
import { CHECKIN } from './Checkin';
import { HOME } from './Home';
import { THERAPY } from './Therapy';
import { BREATHING } from './Breathing';
import { SETTINGS } from './Settings';
import { PromptContent, TherapyIntro } from './TherapySessions/TherapyIntro';
import { TP1 } from './TherapySessions/tp1';

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
          <Route path="therapyTest" element={<PromptContent/>} />
        </Route>
        <Route path="/breathing" element={<BREATHING />} />
        <Route path="/settings" element={<SETTINGS />} />
      </Routes> 
      {/* <PromptContent/> */}
    </div>
  );
}

export default App;