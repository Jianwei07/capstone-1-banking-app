import "./style/App.css";
import "animate.css";
import loadPic from "./style/load.png";
import SignIn from "./components/SignIn";
import Registration from "./components/Registration";
import Profile from "./components/Profile";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../src/components/Header";
import About from "../src/components/About";
import Footer from "../src/components/Footer";
import NavigateToHome from "./components/NavigateToHome";
import Hero from './components/Hero'
import Contact from "./components/Contact";

const App = () => {
  // Setup Loading
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // Setup Profile
  const [profileList, setProfileList] = useState({
    "sample@gmail.com": {
      password: "123",
      fName: "Tom",
      lName: "Tan",
      nRIC: "S9849142",
      address: "Singapore",
      birthDate: "",
      contactNumber: "92480912",
    },
  });
  const [currentProfile, setCurrentProfile] = useState({});

  //Check login status
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // //Retrieve any initial accounts stored in local storage
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

  //Retrieve and update state of profile list from Local Storage
  const getProfileList = () => {
    return JSON.parse(localStorage.getItem("profileList"));
  };

  const handleRegister = (profile) => {
    //{ email: '',password: '',rePassword: '',first: '',last: '',nric: '',address: '',dob: '',contact: ''}
    setProfileList({
      ...profileList,
      [profile.email]: {
        password: profile.password,
        fName: profile.first,
        lName: profile.last,
        nRIC: profile.nric,
        address: profile.address,
        birthDate: profile.dob,
        contactNumber: profile.contact,
      },
    });
    // updateLocalStorage()
  };

  const handleProfileUpdate = (profile) => {
    //{ email:[currentEmail], profile: profileList[currentEmail] }
    setProfileList({ ...profileList, [profile.email]: profile.profile });
    // updateLocalStorage()
    setCurrentProfile(profile);
  };
  const handleSignInSuccess = (currentEmail) => {
    setCurrentProfile({
      email: [currentEmail],
      profile: profileList[currentEmail],
    });
    setIsLoggedIn(true)
  };

  return (
    <div>
      {loading ? (
        <div className="loader-container">
          <div className="animate__animated animate__fadeIn animate__fadeOut">
            <img className="loadPic" src={loadPic} alt="InnovPay" />
          </div>
        </div>
      ) : (
        <div className="main-content">
          <div className="hello animate__animated animate__fadeIn content-container">
            <Router>
              <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
              <div className='content-component'>
                <Routes>
                  <Route path="/" element={<NavigateToHome />} />
                  <Route path="/capstone-1-banking-app" element={
                    <>
                      <Hero />
                      <About />
                      <Contact />
                    </>
                  } />
                <Route
                  path="/login"
                  element={
                    <SignIn
                      profileList={profileList}
                      handleSignInSuccess={handleSignInSuccess}
                    />
                  }
                />
                <Route
                  path="/registration"
                  element={<Registration handleRegister={handleRegister} />}
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
              </div>
              <Footer />
            </Router>
          </div>
        </div>
      )}
    </div>
  );
};

// const Login = () => {
// 	return (
// 		<>
// 			<Header />
// 			<About />
// 			<Footer />
// 		</>
// 	);
// };

// const SignUp = () => {
// 	return (
// 		<>
// 			<Header showNavLinks={false} />
// 			<Registration />
// 			<Footer />
// 		</>
// 	);
// };

// const AboutAndContact = () => {
// 	return (
// 		<>
// 			<Hero />
// 			<About />
// 		</>
// 	);
// };
export default App;
