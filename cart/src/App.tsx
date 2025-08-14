import ReactDOM from "react-dom/client";

import "./index.css";
import Header from "home1/Header";
import Footer from "home1/Footer";
import CartContent from "./CartContent";
import product from "home1/products"; // Importing products from home1


const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header />
    <div className="my-10">
      <CartContent/>
    </div>
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);