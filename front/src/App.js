import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
