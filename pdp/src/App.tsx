  
import ReactDOM from "react-dom/client";
//import "home1/index.css"; 
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.scss";
import Header from "home1/Header";
import Footer from "home1/Footer";
import PDPContent from "./PDPContent";

import "remixicon/fonts/remixicon.css";

const App = () => (
  <Router>
    <div className="text-3xl mx-auto max-w-6xl">
      <Header />
      <div className="my-10">
        <Switch>
          <Route path="/product/:id" component={PDPContent} />
        </Switch>
      </div>
      <Footer />
    </div>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);