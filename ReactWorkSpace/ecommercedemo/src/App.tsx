import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import { routes } from './route';
function App() {
  console.log("Host URL"+process.env.PUBLIC_URL);
  return (
    <BrowserRouter children={ routes } />
  );
}

export default App;
