import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export function Profile(props) {
    const {currentProfile, handleProfileUpdate} = props
    const [inputProfile, setInputProfile] = useState(currentProfile)

    const handleInput = (e) => {
        e.preventDefault()
        setInputProfile({...inputProfile, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        handleProfileUpdate(inputProfile)
    }
  return (
    <div>
        <h2>Your Profile</h2>
        <form onSubmit={handleSubmit}>
            <div>
                Profile: {/*current logged on email*/}
            </div>
            <div>
                <label>First Name: </label>
                <input type='text' name="fName" value = {inputProfile.fName} onChange={(e)=>handleInput(e)} />
            </div>
            <div>
                <label>Last Name: </label>
                <input type='text' name="lName" value = {inputProfile.lName} onChange={(e)=>handleInput(e)}/>
            </div>
            <div>
                <label>NRIC: </label>
                <input type='text' name="nRIC" value = {inputProfile.nRIC} onChange={(e)=>handleInput(e)} />
            </div>
            <div>
                <label>Address: </label>
                <input type='text' name="address" value = {inputProfile.address} onChange={(e)=>handleInput(e)} />
            </div>
            <div>
                <label>Date of Birth: </label>
                <input type='date' name="birthDate" value = {inputProfile.birthDate} onChange={(e)=>handleInput(e)} />
            </div>
            <div>
                <label>Contact Number: </label>
                <input type='tel' name="contactNumber" value = {inputProfile.contactNumber} onChange={(e)=>handleInput(e)} />
            </div>
            <button type='submit' onClick={handleSubmit}>Update</button>
        </form>
    <div>
        <Link to='/landingpage'>Log Out</Link>
    </div>
    </div>
  )
}
