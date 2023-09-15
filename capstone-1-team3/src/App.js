import "./style/App.css";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { Routes, Route, BrowserRouter as Router, useLocation } from "react-router-dom";
import loadPic from "./style/load.png";
import NavigateToHome from "./components/NavigateToHome";
import Header from "./components/Header";
import Hero from "./components/Hero";
import KeyFeatures from "./components/KeyFeatures";
import Contact from "./components/Contact";
import MuiFooter from "./components/MuiFooter";
import MuiSignInSide from "./components/MuiSignInSide";
import Profile from "./components/Profile";
import GetInTouch from "./components/Get-intouch";
import RegistrationForm from './components/RegistrationForm';

//should try to use other form of alert? in Registration Form and Profile.

const App = () => {

  // Setup Scroll
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };

  // Setup Loading
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  // Setup Profile
  const [profileList, setProfileList] = useState({
    "sample@gmail.com": {
      password: "123",
      fName: "Tom",
      lName: "Tan",
      nric: "S9849142",
      address: "Singapore",
      birthDate: "",
      contactNumber: "6592480912",
    },
  });
  const [currentProfile, setCurrentProfile] = useState({});

  //Check login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //Retrieve and update state of profile list from Local Storage
  const getProfileList = () => {
    return JSON.parse(localStorage.getItem("profileList"));
  };

  // Retrieve any initial accounts stored in local storage
  useEffect(() => {
    const retrievedProfiles = getProfileList();
    if (retrievedProfiles) {
      // Checking if the retrieved data is not null or undefined
      setProfileList((prevProfileList) => ({
        ...prevProfileList,
        ...retrievedProfiles,
      }));
    }
  }, []);

  //Update Local Storage
  useEffect(() => {
    localStorage.setItem("profileList", JSON.stringify(profileList));
  }, [profileList]);

  const handleRegister = (profile) => {
    setProfileList({
      ...profileList,
      [profile.email]: {
        password: profile.password,
        fName: profile.fName,
        lName: profile.lName,
        nric: profile.nric,
        address: profile.address,
        birthDate: profile.birthDate,
        contactNumber: profile.contactNumber,
      },
    });
    //why here when i console.log(profileList), it cannot show the most updated one?
  };

  const handleProfileUpdate = (profile) => {
    const currentEmail = profile.email;
    delete profile.email;
    setProfileList({ ...profileList, [currentEmail]: profile });
    setCurrentProfile({email:[currentEmail],profile:profile});
  };

  const handleSignInSuccess = (currentEmail) => {
    setCurrentProfile({
      email: [currentEmail],
      profile: profileList[currentEmail],
    });
    setIsLoggedIn(true);
    console.log(currentProfile);
  };

  return (
    <div>
      {loading ? (
        <div className="loader-container">
          <img
            className="FadeInAndOut"
            src={loadPic}
            style={{ width: 500, height: 333 }}
            alt="InnovPay"
          />
        </div>
      ) : (
        <div className="main-content FadeIn">
          <Router>
            <Wrapper>
              <Header
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
              <Routes>
                <Route path="/" element={<NavigateToHome />} />
                <Route
                  path="/capstone-1-banking-app"
                  element={
                    <>
                      <Hero />
                      <KeyFeatures />
                      <Contact />
                    </>
                  }
                />
                <Route
                  path="/login"
                  element={
                    <MuiSignInSide
                      profileList={profileList}
                      handleSignInSuccess={handleSignInSuccess}
                    />
                  }
                />
                <Route
                  path="/registration"
                  element={
                  <RegistrationForm profileList={profileList} handleRegister={handleRegister}/>
                }
                  
                />
                <Route
                  path="/Getintouch"
                  element={<GetInTouch />}
                />
                <Route
                  path="/profile"
                  element={
                    <Profile
                      currentProfile={currentProfile}
                      handleProfileUpdate={handleProfileUpdate}
                      setIsLoggedIn={setIsLoggedIn}
                    />
                  }
                />
              </Routes>
              <MuiFooter title="InnovePay" description="Terms of Use . Privacy Policy" />
            </Wrapper>
          </Router>
        </div>
      )}
    </div>
  );
};

export default App;
