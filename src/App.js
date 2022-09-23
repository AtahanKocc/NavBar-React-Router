import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
    <Router>
      <Navbar />
        <Switch>
          <Route path="/" component={Home} exact>
            <Home />
          </Route>
          <Route path="/about" component={About} exact>
            <About />
          </Route>
          <Route path="/skills" component={Skills} exact>
            <Skills />
          </Route>
          <Route path="/services" component={Services} exact>
            <Services />
          </Route>
          <Route path="/contact" component={Contact} exact>
            <Contact />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
export default App;
