import React from 'react'

export const SignIn = () => {
    const handleSubmit = () =>{
        
    }
    return (
        <div>
            <form>
                <h2>Sign In</h2>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="checkbox" id='rememberMe' />
                <label htmlFor='rememberMe'>Remember Me</label>
                {/* {isWrongLogin ? <p>The email or password that you have entered is incorrect</p> : null} */}
                <button type='submit' onClick={handleSubmit}>Sign In</button>
            </form>
            <a href='/registration'>Sign Up</a>
        </div>
    )
}
