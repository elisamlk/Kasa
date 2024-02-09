import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/footer/Footer";
import ApartmentPage from "./pages/ApartmentPage";
import NotFound from "./components/404/NotFound";



const App = () => {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/apartmentPage/:id" component={ApartmentPage} />
        <Route path="*" component={NotFound} />
      </Switch>

      <Footer />
    </Router>
  );
};

export default App;
