import './App.css';
import React, {useContext} from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login.js';
import Navbar from './components/Navbar.js';
import Search from './components/Search.js';
import HeroState from './context/hero/HeroState.js';
import AuthState from './context/auth/AuthState';
import PrivateRoute from './components/routing/PrivateRoute';
import setAuthToken from './utils/setAuthToken';

if(localStorage.token){
  setAuthToken(localStorage.token);
  
}

const App = () => {
  
  return (
    <AuthState>
      <HeroState>
        <Router>
          <div className="App">
            <Navbar />
            <Routes>
              <Route path='/' element={localStorage.token?<Search />:<Login />} />
            </Routes>
          </div>
        </Router>
      </HeroState>
    </AuthState>

  );
}

export default App;


