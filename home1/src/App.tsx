import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter } from "react-router-dom"; // ✅ import router
import "./index.css";

import Header from "./Header"; // ✅ import Header component
import Footer from "./Footer";
import HomeContent from "./HomeContent";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header />
    <div className="my-10">
      <HomeContent />
    </div>
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
