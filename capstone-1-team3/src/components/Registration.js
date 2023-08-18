import React, {useState, useReducer} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Registration.css'

const init = {
    email: '',
    password: '',
    rePassword: '',
    first: '',
    last: '',
    nric: '',
    address: '',
    dob: '',
    contact: ''
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'email':
            return {...state, email: action.value};
        case 'password':
            return {...state, password: action.value};
        case 'rePassword':
            return {...state, rePassword: action.value};
        case 'first':
            return {...state, first: action.value};
        case 'last':
            return {...state, last: action.value};
        case 'nric':
            return {...state, nric: action.value};
        case 'address':
            return {...state, address: action.value};
        case 'dob':
            return {...state, dob: action.value};
        case 'contact':
            return {...state, contact: action.value};
        case 'success':
            return init;
    
        default:
            return state;
    };
};

function Registration(props) {
    const [profile, dispatch] = useReducer(reducer, init);
    const [passwordMatch, setPasswordMatch] = useState(true);
    const navigate = useNavigate();

    const handleChange = (e) => {
        dispatch({
            type: e.target.id,
            value: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (profile.password === profile.rePassword) {
            setPasswordMatch(true);
            props.handleRegister(profile);
            dispatch({type: 'success'});
            alert('Your registration is successful! You will be redirected to login now.');
            navigate('/login');
        } else {
            setPasswordMatch(false);
            return;
        }
    };

    return (
        <div className='registration'>
            <form className='container' onSubmit={handleSubmit}>
                <h1 className='title'>Register for a Bank Account</h1>
                <div className='input-group'>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' id='email' value={profile.email} onChange={handleChange} />
                </div>
                <div className='input-group'>
                    <label htmlFor='password'>Password:</label>
                    <input type='password' id='password' value={profile.password} onChange={handleChange} />
                </div>
                <div className='input-group'>
                    <label htmlFor='rePassword'>Re-enter Password:</label>
                    <input type='password' id='rePassword' value={profile.rePassword} onChange={handleChange} />
                </div>
                <>{passwordMatch ? null : <p>This does not match the password that you have entered.</p>}</>
                <div className='name-group'>
                    <div className='input-group'>
                        <label htmlFor='first'>First Name:</label>
                        <input type='text' id='first' value={profile.first} onChange={handleChange} />
                    </div>
                    <div className='input-group'>
                        <label htmlFor='last'>Last Name:</label>
                        <input type='text' id='last' value={profile.last} onChange={handleChange} />
                    </div>
                </div>
                <div className='input-group'>
                    <label htmlFor='nric'>NRIC:</label>
                    <input type='text' id='nric' value={profile.nric} onChange={handleChange} />
                </div>
                <div className='input-group'>
                    <label htmlFor='address'>Address:</label>
                    <input type='text' id='address' value={profile.address} onChange={handleChange} />
                </div>
                <div className='input-group'>
                    <label htmlFor='dob'>Date of Birth:</label>
                    <input type='date' id='dob' value={profile.dob} onChange={handleChange} />
                </div>
                <div className='input-group'>
                    <label htmlFor='contact'>Contact Number:</label>
                    <input type='tel' id='contact' value={profile.contact} onChange={handleChange} />
                </div>
                <button type='submit' className='button'>Register</button>
                <Link to={'/'}>Back to Home</Link>
                <Link to={'/login'}>Back to Login</Link>
            </form>
        </div>
    );
}

export default Registration;
