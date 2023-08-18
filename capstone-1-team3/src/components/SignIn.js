import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import '../style/SignIn.css'
import { Grid, TextField, Button } from '@mui/material'

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
            <div className='signInForm' variant="outlined" style={{ backgroundColor: '#33415C' }}>
                <form className='formContainer'>
                    <h2 className='signin'>Sign In</h2>
                    <Grid item xs={6} md={6}>
                    <TextField fullWidth className="customTextField" variant="filled" type="email" name="email" onChange={handleInput} value={loginInput.email} placeholder="Email" />
                    <TextField fullWidth className="customTextField"  variant="filled" type="password" name="password" onChange={handleInput} value={loginInput.password} placeholder="Password" />

                    </Grid>
                    
                    <div>
                        <input type="checkbox" id='rememberMe' value="false" />
                        <label htmlFor='rememberMe'>Remember Me</label>
                    </div>
                    {isWrongLogin ? <p className='errmsg'>The email or password that you have entered is incorrect</p> : null}
                    <Button variant="contained" type='submit' onClick={(e) => handleSubmit(e)}>Sign In</Button>
                </form>
                <Link to="/registration" className='signUp'>Sign Up</Link>
            </div>
        </div>

    );
}

export default SignIn;
