<<<<<<< HEAD
import "./App.css";
import { SignIn } from "./components/SignIn";
import { LandingPage } from "./components/LandingPage";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
=======
import './App.css';
import SignIn from './components/SignIn'
import { LandingPage } from './components/LandingPage';
import Registration from './components/Registration'
import { Profile } from './components/Profile'
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
>>>>>>> f66b27a96efa9a9133264bb15ff29132ec67f154

function App() {
  const [profileList, setProfileList] = useState([{
    email: "",
    password: "",
    fName: "",
    lName: "",
    nRIC: "",
    address: "",
    birthDate: "",
    contactNumber: "",
  }])
  const [currentProfile, setCurrentProfile] = useState({})
  const handleProfileUpdate = (profile) => {
    setProfileList([...profileList, {
      email: profile.email,
      password: profile.password,
      fName: profile.fName,
      lName: profile.lName,
      nRIC: profile.nRIC,
      address: profile.address,
      birthDate: profile.birthDate,
      contactNumber: profile.contactNumber,
    }])
    setCurrentProfile(profile)
  }
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<SignIn profileList={profileList}/>} />
          <Route path='/landingpage' element={<LandingPage />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </Router>
      

    </div>
  );
}

export default App;
