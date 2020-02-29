import React from "react";

// component imports
import Header from "./components/Header";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Login exact path="/" />
        <Login path="/login" />
        <Registration path="/registration" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
