import React, { useState } from 'react'

export function Profile() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [nric, setNric] = useState('')
    const [address, setAddress] = useState('')
    const [dob, setDob] = useState('')
    const [contactNo, setContactNo] = useState('')

    const handleUpdateProfile = (e) => {
        e.preventDefault()

        const profUpdate = {
            firstName: firstName,
            lastName: lastName,
            nric: nric,
            address: address,
            dob: dob,
            contactNo: contactNo,
        }

    }

  return (
    <div>
        <h2>Your Profile</h2>
        <form onSubmit={handleUpdateProfile}>
            <div>
                Profile: {/*current logged on email*/}
            </div>
            <div>
                <label>First Name: </label>
                <input type='text' value = {firstName} />
            </div>
            <div>
                <label>Last Name: </label>
                <input type='text' value = {lastName} />
            </div>
            <div>
                <label>NRIC: </label>
                <input type='text' value = {nric} />
            </div>
            <div>
                <label>Address: </label>
                <input type='text' value = {address} />
            </div>
            <div>
                <label>Date of Birth: </label>
                <input type='date' value = {dob} />
            </div>
            <div>
                <label>Contact Number: </label>
                <input type='tel' value = {contactNo} />
            </div>
            <button type='submit'>Update</button>
        </form>
    <div>
        Back to <Link to='/LandingPage'>Home</Link>
    </div>
    </div>
  )
}
