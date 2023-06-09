import React from "react";

// Components
import Header from "./components/Header";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";



function App() {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      {/* <Header /> */}
      <Nav />
      <Banner />
      <About />
      <Work />
      <Contact />
      {/* <div className="h-[4000px]"></div> */}
    </div>
  );
}

export default App;



