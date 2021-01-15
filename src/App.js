import React from "react";
import "./styles/globalStyle.scss";

import ShowCase from "./components/showCase.component.jsx";
import Nav from "./components/nav.component.jsx";
import OurWork from "./components/ourWork.component.jsx";
import About from "./components/about.component.jsx";
import Contact from "./components/contact.component.jsx";
import Footer from "./components/footer.component.jsx";

const App = () => {
  return (
    <div className='App' id='home'>
      <Nav />
      <ShowCase />
      <OurWork />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
