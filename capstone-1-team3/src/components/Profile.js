import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

export function Profile(props) {
    const { currentProfile, handleProfileUpdate } = props;
    const [inputProfile, setInputProfile] = useState(currentProfile);

    const handleInput = (e) => {
        e.preventDefault();
        setInputProfile({ ...inputProfile, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleProfileUpdate(inputProfile);
    };

    return (
        <div className="profile-page">
            <form className="profile-form" onSubmit={handleSubmit}>
                <h2 className='yourprofile'>Your Profile</h2>
                <div className='name-group'>
                    <div className="profile-field">
                        <label>First Name:</label>
                        <input type="text" name="fName" value={inputProfile.fName} onChange={(e) => handleInput(e)} />
                    </div>
                    <div className="profile-field">
                        <label>Last Name:</label>
                        <input type="text" name="lName" value={inputProfile.lName} onChange={(e) => handleInput(e)} />
                    </div>
                </div>
                <div className="profile-field">
                    <label>NRIC:</label>
                    <input type="text" name="nRIC" value={inputProfile.nRIC} onChange={(e) => handleInput(e)} />
                </div>
                <div className="profile-field">
                    <label>Address:</label>
                    <input type="text" name="address" value={inputProfile.address} onChange={(e) => handleInput(e)} />
                </div>
                <div className="profile-field">
                    <label>Date of Birth:</label>
                    <input
                        type="date"
                        name="birthDate"
                        value={inputProfile.birthDate}
                        onChange={(e) => handleInput(e)}
                    />
                </div>
                <div className="profile-field">
                    <label>Contact Number:</label>
                    <input
                        type="tel"
                        name="contactNumber"
                        value={inputProfile.contactNumber}
                        onChange={(e) => handleInput(e)}
                    />
                </div>
                <button type="submit" onClick={handleSubmit}>Update</button>
            </form>
            <div className="logout-link">
                <Link to="/">Log Out</Link>
            </div>
        </div>
    );
}
