import React from "react";
import { Switch, Route } from "react-router-dom";

// component imports
import Header from "./components/Header";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Event from "./components/Event";
import EventForm from "./components/EventForm";

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
          <Route path="/profile/:id" component={Profile} />
          <Route path="/event/:id" render={props => <Event {...props} />} />
          <Route path="/eventform" component={EventForm} />
          
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
