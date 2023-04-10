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
      <THERAPY/>
    </div>
  );
}

export default App;

/* --- currently testing daily checkin, add it back in App when done
<RESTMODE/>
<CHECKIN/>
<HOME/>
*/