import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";

// component imports
import Header from "./components/Header";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Event from "./components/Event";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Switch>
          <Route exact path="/" render={props => <Login {...props} />} />
          <Route
            path="/registration"
            render={props => <Registration {...props} />}
          />
          <PrivateRoute path="/profile/:id" component={Profile} />
          <PrivateRoute path="/event/:id" component={Event} />
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
