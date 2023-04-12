import { Routes, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import { RESTMODE } from './Restmode';
import { CHECKIN } from './Checkin';
import { HOME } from './Home';
import { THERAPY } from './Therapy';
import { BREATHING } from './Breathing';
import { SETTINGS } from './Settings';
import { TherapyIntro } from './TherapySessions/TherapyIntro';
import { TP1 } from './TherapySessions/tp1';


function App() {
  // React components have similar 
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<RESTMODE />} />
        <Route path="home" element={<HOME />} />
        <Route path="checkin" element={<CHECKIN />} />
        <Route path="therapy" element={<THERAPY />}>
          <Route path="" element={<TherapyIntro/>} />
          <Route path="prompt1" element={<TP1/>} />

        </Route>
        <Route path="breathing" element={<BREATHING />} />
        <Route path="settings" element={<SETTINGS />} />
      </Routes>
      {/* <img src="public\card.png" alt="Happy"/> */}
    </div>
  );
}

export default App;

/* --- currently testing daily checkin, add it back in App when done
<RESTMODE/>
<CHECKIN/>
<HOME/>
*/