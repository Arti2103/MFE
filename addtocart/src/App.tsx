import { render } from "solid-js/web";
import "home1/index.css";
import "home1/tailwind.css";


import Header from "home1/Header";
import Footer from "home1/Footer";

const App = () => (
  <>
    <Header />
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: addtocart</div>
      <div>Framework: solid-js</div>
      <div>Language: JavaScript</div>
      <div>CSS: Tailwind</div>
    </div>
    <Footer />
  </>
);

render(App, document.getElementById("app"));
