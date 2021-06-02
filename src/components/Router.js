import React, {useState} from "react";
import { HashRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile";
import Navigation from "components/Navigation";


 const AppRouter = ({isLoggedIn}) => {
     
     return (
        <Router>
            {isLoggedIn && <Navigation />}
            <Switch>
                {isLoggedIn ? (
                <>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/profile">
                        <Profile />
                    </Route> 
                </>
            ) : (
                <>
                    <Router exact path="/">
                        <Auth />
                    </Router>
                </>
            )}
            </Switch>
        </Router>
     );
};

export default AppRouter;

