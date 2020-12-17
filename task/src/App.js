import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import PageRanderer from "./page-rander.js";
import Header from "./components/static";
import Inverstment from "./components/home/investment.js";
import Contact from "./components/home/contact.js";
import InvestmentPreferences from "./components/home/InvestmentPreferences";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route path="/" exact={true} component={Contact} />
          <Route path="/investment" exact component={Inverstment} />
          <Route
            path="/investmentPreferences"
            exact
            component={InvestmentPreferences}
          />
        </div>
      </Router>
    );
  }
}
