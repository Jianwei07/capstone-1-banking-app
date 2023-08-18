import React from "react";
import Header from "./Header";
import About from "./About";
import Hero from "./Hero";
import Footer from "./Footer";
import "./App.css";
import SignIn from "./components/SignIn";
import Registration from "./components/Registration";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Profile } from "./components/Profile";

const App = () => {
  return (
    <div className="root-container">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<MainContent />} />
        </Routes>
      </Router>
    </div>
  );
};

const MainContent = () => {
  return (
    <>
      <Header />
      <HeroAndAbout />
      <Footer />
    </>
  );
};

const Login = () => {
  return (
    <>
      <Header showNavLinks={false} />
      <SignIn />
      <Footer />
    </>
  );
};

const SignUp = () => {
  return (
    <>
      <Header showNavLinks={false} />
      <Registration />
      <Footer />
    </>
  );
};

const AboutAndContact = () => {
  return (
    <>
      <Hero />
      <About />
    </>
  );
};

export default App;
