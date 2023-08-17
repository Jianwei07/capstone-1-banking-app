import './App.css';
import SignIn from './components/SignIn'
import { LandingPage } from './components/LandingPage';
import Registration from './components/Registration'
import { Profile } from './components/Profile'
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


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
          <Route path='/profile' element={<Profile currentProfile={currentProfile} handleProfileUpdate={handleProfileUpdate}/>} />
        </Routes>
      </Router>
      

    </div>
  );
}

export default App;
