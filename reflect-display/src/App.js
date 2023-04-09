import logo from './logo.svg';
import './App.css';

import { OkButton, Affirmations, RestWidget } from './Restmode';
import { CHECKIN } from './Checkin';


function App() {
  // React components have similar 
  return (
    <div className="App">
      <CHECKIN/>
    </div>
  );
}

export default App;

/* --- currently testing daily checkin, add it back in App when done
<RestWidget/>
<Affirmations/>
<OkButton/>
*/