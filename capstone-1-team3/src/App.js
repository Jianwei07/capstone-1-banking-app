import './style/App.css';
import 'animate.css';
import loadPic from './style/load.png';
import SignIn from './components/SignIn'
import Registration from './components/Registration'
import Profile from './components/Profile'
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "../src/components/Header";
import About from "../src/components/About";
import Hero from "../src/components/Hero";
import Footer from "../src/components/Footer";


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
			{loading ? (
				<div className="loader-container">
					<div className="animate__animated animate__fadeIn animate__fadeOut">
						<img className="loadPic" src={loadPic} alt="InnovPay" />
					</div>
				</div>
			) : (
				<div className="main-content">
					<div className="animate__animated animate__fadeIn">
						
						<Router>
						<Header />
							<Routes>
								
								<Route path="/" element={<About />} />
								<Route path="/login" element={<SignIn profileList={profileList} handleSignInSuccess={handleSignInSuccess} />} />
								<Route path="/registration" element={<Registration />} />
								<Route path="/profile" element={<Profile currentProfile={currentProfile} handleProfileUpdate={handleProfileUpdate} />} />
								
							</Routes>
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
