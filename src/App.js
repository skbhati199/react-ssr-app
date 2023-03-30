import './App.css';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import About from './pages/About';
import Articles from './pages/Articles';
import Home from './pages/Home';
import {React} from 'react';

function App() {
  return (
    <BrowserRouter>
      <h1>Server-Side rendering example</h1>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/about'} path="about">About</Link>
        </li>
        <li>
          <Link to={'/articles'} path="articles">Articles</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/about" exact Component={About} />
        <Route path="/articles" exact Component={Articles} />
          
       
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
