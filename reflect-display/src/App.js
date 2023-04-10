import { Routes, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import { RESTMODE } from './Restmode';
import { CHECKIN } from './Checkin';
import { HOME } from './Home';
import { THERAPY } from './Therapy';



function App() {
  // React components have similar 
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<RESTMODE />} />
        <Route path="home" element={<HOME />} />
        <Route path="checkin" element={<CHECKIN />} />
        <Route path="therapy" element={<THERAPY />}/>

      </Routes>
    </div>
  );
}

export default App;

/* --- currently testing daily checkin, add it back in App when done
<RESTMODE/>
<CHECKIN/>
<HOME/>
*/