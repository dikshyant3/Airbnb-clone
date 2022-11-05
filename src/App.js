import React from "react";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./Footer";
// import { Banner } from "./components/Banner";
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
      {/* <Banner /> */}
      {/* Home -->main page*/}
      {/* Header ->inside Home*/}

      {/* Banner ->inside Home*/}
      {/* Search ->inside Banner*/}

      {/* Cards  ->inside Home*/}

      {/* Footer ->inside Home*/}

      {/* Search page ->second page*/}
    </div>
  );
}

export default App;
