import React from 'react';

function Registration() {
    return (
        <div>
            <h1>Register for a Bank Account</h1>
            <form>
                <label htmlFor='email'>Email: </label>
                <input type='email' id='email'></input>
                <br></br>
                <label htmlFor='password'>Password: </label>
                <input type='password' id='password'></input>
                <br></br>
                <label htmlFor='rePassword'>Re-enter Password: </label>
                <input type='password' id='rePassword'></input>
                <br></br>
                <label htmlFor='first'>First Name: </label>
                <input type='text' id='first'></input>
                <label htmlFor='last'>Last Name: </label>
                <input type='text' id='last'></input>
                <br></br>
                <label htmlFor='nric'>NRIC: </label>
                <input type='text' id='nric'></input>
                <br></br>
                <label htmlFor='address'>Address: </label>
                <input type='text' id='address'></input>
                <br></br>
                <label htmlFor='dob'>Date of Birth: </label>
                <input type='date' id='dob'></input>
                <br></br>
                <label htmlFor='contact'>Contact Number: </label>
                <input type='tel' id='contact'></input>
                <br></br>
                <input type='submit'></input>
            </form>
        </div>
    );
}

export default Registration;
