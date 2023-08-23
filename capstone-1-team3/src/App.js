import "./style/App.css";
import loadPic from "./style/load.png";
import favicon from "./style/favicon.ico"

import React, { useState, useEffect } from "react";

import { Routes, Route, BrowserRouter as Router, useLocation } from 'react-router-dom';
import NavigateToHome from "./components/NavigateToHome";
import Profile from "./components/Profile";

import Header from "./components/Header";
import Hero from "./components/Hero";
import KeyFeatures from "./components/KeyFeatures";
import Contact from "./components/Contact";
import MuiSignInSide from "./components/MuiSignInSide";
import MuiSignup from "./components/MuiSignUp";
import MuiFooter from "./components/MuiFooter";
import GetInTouch from "./components/Get-intouch";
import { useLayoutEffect } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from "styled-components";

const BotRedirect = ({ url, message }) => {
	return (
		<div>
			<a href={url} target="_blank">
				{message}
			</a>
		</div>
	);
};

const theme = {
    background: '#F2F2F2',
    headerBgColor: 'black',
    headerFontSize: '20px',
    botBubbleColor: '#2D2D2D',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#DFCD81',
    userFontColor: 'black',
};

const steps = [
	{
		id: '0',
		message: 'Hey Banker!',
		trigger: '1',
	},
	{
		id: '1',
		message: 'What is your name?',
		trigger: '2',
	},
	{
		id: '2',
		user: true,
		trigger: '3',
	},
	{
		id: '3',
		message: 'Hi {previousValue}, how can I help you?',
		trigger: 'menuOptions', // Use a unique trigger for the next step
	},
	{
		id: 'menuOptions',
		options: [
			{ value: 1, label: 'About Us', trigger: 'about' },
			{ value: 2, label: 'FAQ', trigger: 'faq' },
			{ value: 3, label: 'Contact Support', trigger: 'contact' },
			{ value: 4, label: 'Online Application', trigger: 'application' },
		],
	},
	{
		id: 'about',
		message: 'Our bank provides innovative financial solutions...',
		trigger: 'menuOptions'
	},
	{
		id: 'faq',
		message: 'Here are some frequently asked questions...',
		trigger: 'menuOptions'
	},
	{
		id: 'contact',
		message: 'Please give me a moment, you will be connected to our agent to further assist you.',
		end: true,
	},
	{
		id: 'application',
		message: 'Click the link below to access the application link!',
		trigger: 'applicationLink'
	},
	{
		id: 'applicationLink',
		component: <BotRedirect
			message='Sign Up Here!'
			url="/registration" />,
		trigger: 'menuOptions'
	},
]

const config = {
	botAvatar: favicon,
	floating: true,
};

const App = () => {
	const Wrapper = ({ children }) => {
		const location = useLocation();
		useLayoutEffect(() => {
			document.documentElement.scrollTo(0, 0);
		}, [location.pathname]);
		return children
	}


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
					<img
						className="elementToFadeInAndOut"
						src={loadPic}
						style={{ width: 500, height: 333 }}
						alt="InnovPay"
					/>
				</div>
			) : (
				<div className="main-content" id="top">
					<div className="animate__animated animate__fadeIn content-container">

						<Router>
							<Wrapper>

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
												<MuiSignInSide
													profileList={profileList}
													handleSignInSuccess={handleSignInSuccess}
												/>
											}
										/>
										<Route
											path="/registration"
											element={
												// <Registration handleRegister={handleRegister} />
												<MuiSignup handleRegister={handleRegister} />
											}
										/>
										<Route
											path="/Getintouch"
											element={
												// <Registration handleRegister={handleRegister} />
												<GetInTouch />
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

							</Wrapper>
						</Router>
					</div>
				</div>
			)}
			<ThemeProvider theme={theme}>
			<ChatBot headerTitle="Chat with Us" steps={steps} {...config} />
			</ThemeProvider>
		</div>
	);
};

export default App;
