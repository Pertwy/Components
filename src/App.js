import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Nav2 from './components/Nav2/Nav2';

function App() {
  return (
    <>
    
    <Router>
      <Nav2/>
      
      <Route path="/" component={Home}/>
    </Router>
    </>
  );
}

export default App;
