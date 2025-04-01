import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/Aboutus";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import Signup from './components/Signup';

function App() {
  return (
    <>
      <GlobalStyles /> {/* Apply Global Styles but don't wrap */}
      <Header />
      <Hero />
      <AboutUs />
      <Features />
      <HowItWorks /> 
      <Signup />
      <Footer />
    </>
  );
}

export default App;
