<<<<<<< HEAD
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignIn = (props) => {
  const [loginInput, setLoginInput] = useState({ email: "", password: "" });
  const [isWrongLogin, setIsWrongLogin] = useState(false);
  const navigate = useNavigate();
  const { profileList } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    const profileChecker = profileList.find(
      (profile) => profile.email === loginInput.email
    ); //find and return the profile for the input email
    if (profileChecker && profileChecker.password === loginInput.password) {
      //correct information
      setIsWrongLogin(false);
      navigate("/landingpage");
    } else {
      //wrong information
      setIsWrongLogin(true);
      setLoginInput((prevInput) => ({ ...prevInput, password: "" }));
    }
  };
  return (
    <div className="main">
      <h1>InnovPay</h1>
      <form>
        <h2 className="signin">Sign In</h2>
        <input type="email" value="" placeholder="Email" />
        <input type="password" value="" placeholder="Password" />
        <input type="checkbox" id="rememberMe" value="false" />
        <label htmlFor="rememberMe">Remember Me</label>
        {isWrongLogin ? (
          <p className="errmsg">
            The email or password that you have entered is incorrect
          </p>
        ) : null}
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Sign In
        </button>
      </form>
      <a href="/registration">Sign Up</a>
    </div>
  );
};
=======
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SignIn.css'

function SignIn(props) {
    const [loginInput, setLoginInput] = useState({ email: "", password: "" })
    const [isWrongLogin, setIsWrongLogin] = useState(false)
    const navigate = useNavigate();
    const { profileList } = props

    const handleSubmit = (e) => {
        e.preventDefault()
        const profileChecker = profileList.find(profile => profile.email === loginInput.email) //find and return the profile for the input email
        if (profileChecker && profileChecker.password === loginInput.password) {
            //correct information
            setIsWrongLogin(false);
            navigate('/landingpage');
        } else {
            //wrong information
            setIsWrongLogin(true);
            setLoginInput(prevInput => ({ ...prevInput, password: "" }));
        }
    }
    const handleInput = (e) => {
        setLoginInput({...loginInput, [e.target.name]: e.target.value})
    }
    return (
        <div className='home'>
            <h1>InnovPay</h1>
            <form>
                <h2 className='signin'>Sign In</h2>
                <input type="email" name="email" onChange={handleInput} value={loginInput.email} placeholder="Email" />
                <input type="password" name="password" onChange={handleInput} value={loginInput.password} placeholder="Password" />
                <input type="checkbox" id='rememberMe' value="false" />
                <label htmlFor='rememberMe'>Remember Me</label>
                {isWrongLogin ? <p className='errmsg'>The email or password that you have entered is incorrect</p> : null}
                <button type='submit' onClick={(e) => handleSubmit(e)}>Sign In</button>
            </form>
            <a href='/registration'>Sign Up</a>
        </div>
    );
}

export default SignIn;
>>>>>>> f66b27a96efa9a9133264bb15ff29132ec67f154
