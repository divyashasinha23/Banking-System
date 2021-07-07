import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Transfer from './components/Transfer';
import Footer from './components/pages/Footer/Footer';
import Home from './components/pages/HomePage/Home';

import Login from './components/Login';

function App() {
  return (
    <Router>
     <Navbar />
     <Switch>
       <Route path="/" exact component=
       {Home}
        />
        <Route path='/sign-in' exact component =
        {Login}
        />
        <Route path='/transfer' exact component =
        {Transfer}
        />
     </Switch>
     <Footer/>
     </Router>
    
  );
}

export default App;
