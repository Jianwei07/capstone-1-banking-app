import React from 'react';
import './Registration.css'

function Registration() {
    return (
        <div className='registration'>
            <form className='container'>
            <h1 className='title'>Register for a Bank Account</h1>
            <br />
                <div className='input-group'>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' id='email' />
                </div>
                <div className='input-group'>
                    <label htmlFor='password'>Password:</label>
                    <input type='password' id='password' />
                </div>
                <div className='input-group'>
                    <label htmlFor='rePassword'>Re-enter Password:</label>
                    <input type='password' id='rePassword' />
                </div>
                <div className='name-group'>
                    <div className='input-group'>
                        <label htmlFor='first'>First Name:</label>
                        <input type='text' id='first' />
                    </div>
                    <div className='input-group'>
                        <label htmlFor='last'>Last Name:</label>
                        <input type='text' id='last' />
                    </div>
                </div>
                <div className='input-group'>
                    <label htmlFor='nric'>NRIC:</label>
                    <input type='text' id='nric' />
                </div>
                <div className='input-group'>
                    <label htmlFor='address'>Address:</label>
                    <input type='text' id='address' />
                </div>
                <div className='input-group'>
                    <label htmlFor='dob'>Date of Birth:</label>
                    <input type='date' id='dob' />
                </div>
                <div className='input-group'>
                    <label htmlFor='contact'>Contact Number:</label>
                    <input type='tel' id='contact' />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default Registration;
