import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SignIn.css'
import { Card, TextField } from '@mui/material'

function SignIn(props) {
    const [loginInput, setLoginInput] = useState({ email: "", password: "" })
    const [isWrongLogin, setIsWrongLogin] = useState(false)
    const navigate = useNavigate();
    const { profileList, handleSignInSuccess } = props

    const handleSubmit = (e) => {
        e.preventDefault()
        const profileChecker = profileList.find(profile => profile.email === loginInput.email) //find and return the profile for the input email
        if (profileChecker && profileChecker.password === loginInput.password) {
            //correct information
            setIsWrongLogin(false);
            handleSignInSuccess(loginInput)
            navigate('/profile');
        } else {
            //wrong information
            setIsWrongLogin(true);
            setLoginInput(prevInput => ({ ...prevInput, password: "" }));
        }
    }
    const handleInput = (e) => {
        setLoginInput({ ...loginInput, [e.target.name]: e.target.value })
    }
    return (
        <div className='signInContainer'>
            <h1 className='bankName'><span className='Innov'>Innov</span>Pay</h1>
            <Card className='signInForm' variant="outlined" style={{ backgroundColor: '#33415C' }}>
                <form className='formContainer'>
                    <h2 className='signin'>Sign In</h2>
                    <TextField className="customTextField" variant="filled" type="email" name="email" onChange={handleInput} value={loginInput.email} placeholder="Email" />
                    <TextField className="customTextField" variant="filled" type="password" name="password" onChange={handleInput} value={loginInput.password} placeholder="Password" />
                    <div>
                        <input type="checkbox" id='rememberMe' value="false" />
                        <label htmlFor='rememberMe'>Remember Me</label>
                    </div>
                    {isWrongLogin ? <p className='errmsg'>The email or password that you have entered is incorrect</p> : null}
                    <button type='submit' onClick={(e) => handleSubmit(e)}>Sign In</button>
                </form>
                <a href='/registration'>Sign Up</a>
            </Card>
        </div>

    );
}

export default SignIn;
