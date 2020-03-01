import React from "react";

// component imports
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Footer from "./components/Footer";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div>
        <Switch>
          <Login exact path="/" />
          <Login path="/login" />
          <Registration path="/registration" />
          <Profile path="/profile/:id" />
          <Event path="/event/:id" />
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
