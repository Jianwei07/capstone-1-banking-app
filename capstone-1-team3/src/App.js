import "./App.css";
import { SignIn } from "./components/SignIn";
import { LandingPage } from "./components/LandingPage";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [profileList, setProfile] = useState([
    {
      email: "",
      password: "",
      fName: "",
      lName: "",
      nRIC: "",
      address: "",
      birthDate: "",
      contactNumber: "",
    },
  ]);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/" element={<SignIn profileList={profileList} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
