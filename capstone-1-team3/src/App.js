import "./style/App.css";
import loadPic from "./style/load.png";

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavigateToHome from "./components/NavigateToHome";
import Profile from "./components/Profile";


import Header from "./components/Header";
import Hero from "./components/Hero";
import KeyFeatures from "./components/KeyFeatures"
import Contact from "./components/Contact";
import MuiSignInSide from "./components/MuiSignInSide"
import MuiSignup from "./components/MuiSignUp"
import MuiFooter from "./components/MuiFooter";



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
	const [isLoggedIn, setIsLoggedIn] = useState(false);

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
		setIsLoggedIn(true);
	};

	return (
		<div>
			{loading ? (
				<div className="loader-container">
					<img className="elementToFadeInAndOut" src={loadPic} style={{ width: 500, height: 333 }} alt="InnovPay" />
				</div>
			) : (
				<div className="main-content" id="top">
					<div className="animate__animated animate__fadeIn content-container">
						<Router>
							
							<div className="header">
								<Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
							</div>
							<div className="content-component">
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
										// <SignIn
										// 	profileList={profileList}
										// 	handleSignInSuccess={handleSignInSuccess}
										// />
										<MuiSignInSide profileList={profileList} handleSignInSuccess={handleSignInSuccess}/>
									}
								/>
								<Route
									path="/registration"
									element={
									// <Registration handleRegister={handleRegister} />
										<MuiSignup />
									}

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
							<MuiFooter description="Terms of Use . Privacy Policy" />
							
						</Router>
					</div>
				</div>
			)}
		</div>
	);
};



export default App;
