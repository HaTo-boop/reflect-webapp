import { Routes, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import { OkButton, Affirmations, RestWidget, RestMode } from './Restmode';
import { CHECKIN } from './Checkin';



function App() {
  // React components have similar 
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<RestMode />} />
        <Route path="checkin" element={<CHECKIN />} />
      </Routes>
      
    </div>
  );
}

export default App;

/* --- currently testing daily checkin, add it back in App when done
<RestWidget/>
<Affirmations/>
<OkButton/>
*/