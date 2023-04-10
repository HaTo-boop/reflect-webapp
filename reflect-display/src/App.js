import logo from './logo.svg';
import './App.css';

import { RESTMODE } from './Restmode';
import { CHECKIN } from './Checkin';
import { HOME } from './Home';


function App() {
  // React components have similar 
  return (
    <div className="App">
      <HOME/>
    </div>
  );
}

export default App;

/* --- currently testing daily checkin, add it back in App when done
<RESTMODE/>
<CHECKIN/>
*/