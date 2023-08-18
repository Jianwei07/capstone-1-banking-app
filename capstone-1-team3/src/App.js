import './App.css';
import SignIn from './components/SignIn'
import LandingPage from './components/LandingPage';
import Registration from './components/Registration'
import { Profile } from './components/Profile'
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [profileList, setProfileList] = useState([{
    email: "sample@gmail.com",
    password: "123",
    fName: "Tom",
    lName: "Tan",
    nRIC: "S9849142",
    address: "Singapore",
    birthDate: "",
    contactNumber: "92480912",
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
  const handleSignInSuccess = (currentProfile) => {
    console.log(profileList.find(profile => profile.email === currentProfile.email))
    setCurrentProfile(profileList.find(profile => profile.email === currentProfile.email))
  }

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<SignIn profileList={profileList} handleSignInSuccess={handleSignInSuccess}/>} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/profile' element={<Profile currentProfile={currentProfile} handleProfileUpdate={handleProfileUpdate}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
