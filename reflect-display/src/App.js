import logo from './logo.svg';
import './App.css';

import { OkButton, Affirmations, RestWidget } from './Restmode';

function App() {
  // React components have similar 
  return (
    <div className="App">
      <RestWidget/>
      <Affirmations/>
      <OkButton/>
    </div>
  );
}

export default App;
