import React from 'react';
import logo from './logo.svg';
import UseAnimations from 'react-useanimations';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h5>AppKiDava </h5>
         <UseAnimations animationKey="heart"/>
      </header>
    </div>

  );
}

export default App;
