import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Profile.css';

export function Profile(props) {
    const navigate = useNavigate()
    const { currentProfile, handleProfileUpdate, setIsLoggedIn } = props;
    const [inputProfile, setInputProfile] = useState(currentProfile); //{ email:[currentEmail], profile: profileList[currentEmail] }

    const handleInput = (e) => {
        e.preventDefault();
        // setInputProfile({ ...inputProfile, profile: {...inputProfile.profile, [e.target.name]: e.target.value }});
        setInputProfile({ ...inputProfile, profile: {...inputProfile.profile, [e.target.name]: e.target.value }});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleProfileUpdate(inputProfile);
    };

    const handleLogOut = () =>{
        setIsLoggedIn(false)
        navigate('/')
    }
    return (
        <div className="profile-page">
            <form className="profile-form" onSubmit={handleSubmit}>
                <h2 className='yourprofile'>Your Profile</h2>
                <div className='name-group'>
                    <div className="profile-field">
                        <label>First Name:</label>
                        <input type="text" name="fName" value={inputProfile.profile.fName} onChange={(e) => handleInput(e)} />
                    </div>
                    <div className="profile-field">
                        <label>Last Name:</label>
                        <input type="text" name="lName" value={inputProfile.profile.lName} onChange={(e) => handleInput(e)} />
                    </div>
                </div>
                <div className="profile-field">
                    <label>NRIC:</label>
                    <input type="text" name="nRIC" value={inputProfile.profile.nRIC} onChange={(e) => handleInput(e)} />
                </div>
                <div className="profile-field">
                    <label>Address:</label>
                    <input type="text" name="address" value={inputProfile.profile.address} onChange={(e) => handleInput(e)} />
                </div>
                <div className="profile-field">
                    <label>Date of Birth:</label>
                    <input
                        type="date"
                        name="birthDate"
                        value={inputProfile.profile.birthDate}
                        onChange={(e) => handleInput(e)}
                    />
                </div>
                <div className="profile-field">
                    <label>Contact Number:</label>
                    <input
                        type="tel"
                        name="contactNumber"
                        value={inputProfile.profile.contactNumber}
                        onChange={(e) => handleInput(e)}
                    />
                </div>
                <div className='buttons'>
                    <button type="submit" onClick={handleSubmit}>Update</button>
                    <button onClick={handleLogOut}>Log Out</button>
                </div>

            </form>
        </div>
    );
}

export default Profile;