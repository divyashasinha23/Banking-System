import React from 'react';
import { BrowserRouter as Router, withRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Navbar from './components/Navbar';
import Transfer from './components/Transfer';
import Footer from './components/pages/Footer/Footer';
import Home from './components/pages/HomePage/Home';
import Profile from './components/Profile';
import LoginForm from './components/LoginForm';
import User from './components/dummyUser';
import PublicRoute from './Utils/PublicRoute';
import PrivateRoute from './Utils/PrivateRoute';
import Transaction from './components/Transactions';
import AdminLogin from './components/AdminLogin';
import AdminNavbar from './components/AdminNavbar';
import BankDetails from './components/BankDetails';
import AllUser from './components/AllUser';
import dummyUser from './components/dummyUser';

function App() {
  return (
    <Router>
     <Switch>
       <Route path="/" exact>
         <Navbar />
         <Home />
         <Footer/>
       </Route>

        <PublicRoute path='/sign-in' exact>
          <Navbar />
          <LoginForm />
          <Footer/>
        </PublicRoute>

         <PublicRoute path='/sign-in-admin' exact>
           <Navbar />
         <AdminLogin />
         <Footer/>
         </PublicRoute>

         <PublicRoute path='/dummy-user' exact>
           <Navbar />
         <dummyUser />
         </PublicRoute>

        <Route path='/transfer' exact render = {props => {}}>
          <Navbar />
          <Transfer />
          <Footer />
        </Route>   

         <PrivateRoute path='/user-details' exact>
           <Navbar/>
           <Profile />
           <Footer />
         </PrivateRoute>
      
        <PrivateRoute path='/user-transactions' exact>
          <Navbar />
          <Transaction />
        </PrivateRoute>

        <Route path="/users" exact>
          <AdminNavbar/>
          <AllUser />
         
        </Route>

        <Route path="/bank-details" exact>
          <AdminNavbar/>
          <BankDetails />
          <Footer />
        </Route>
    
     </Switch>
    
     </Router>
    
  );
}

export default App;
