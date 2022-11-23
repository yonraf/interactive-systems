import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import HomePage from './components/pages/HomePage'
import BrowsePage from './components/pages/BrowsePage'
import PropertyPage from './components/pages/InspectPage'
import SupportPage from './components/pages/SupportPage'

import "./App.css";
import Listing from "./components/pages/Listing";

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ LandingPage } />
                    <Route path="/login" component={ LoginPage } />
                    <Route path="/register" component={ RegisterPage } />
                    <Route path="/forget-password" component={ ForgetPasswordPage } />
                    <Route path="/home" component={ HomePage } />
                    <Route path="/browse" component={ BrowsePage } />
                    <Route path="/support" component={ SupportPage } />
                    <Route path="/property" component={ PropertyPage } />
                    <Route path="/listing" component={Listing} />
                </Switch>
            </div>
        </Router>
    )
}
