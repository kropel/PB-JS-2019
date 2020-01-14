import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import HomePage from "components/HomePage/HomePage";
import CatalogPage from "components/CatalogPage/CatalogPage";
import AboutPage from "components/AboutPage/AboutPabe";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/catalog" component={CatalogPage} />
          <Route path="/about" component={AboutPage} />
          <Route component={() => <h3>Page not found</h3>} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
