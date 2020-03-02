import React from "react";
import { Switch, Route } from "react-router-dom";

// component imports
import Header from "./components/Header";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Footer from "./components/Footer";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
          <Route path="/profile/:id" component={Profile} />
          <Route path="/event/:id" component={Event} />
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
