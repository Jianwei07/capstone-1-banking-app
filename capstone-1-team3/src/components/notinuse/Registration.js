import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import '../style/Registration.css'

function Registration(props) {
    const navigate = useNavigate();
    const {register, getValues, formState: {errors}, reset, handleSubmit} = useForm();

    const validation = {
        email: {
            required: {
                value: true,
                message: 'Email is required.'
            }
        },
        password: {
            required: {
                value: true,
                message: 'Password is required.'
            },
            pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                message: 'Password must have at least 8 characters. It must contain at least a number, a lowercase letter and an uppercase letter.'
            }
        },
        rePassword: {
            required: {
                value: true,
                message: 'Re-enter your password.'
            },
            validate: (value) => value === getValues('password') || 'This does not match the password that you have entered.'
        },
        first: {
            required: false
        },
        last: {
            required: false
        },
        nric: {
            required: false
        },
        address: {
            required: false
        },
        dob: {
            required: false
        },
        contact: {
            required: false
        }
    };

    const onSubmit = (data) => {
        props.handleRegister(data);
        reset();
        alert('Your registration is successful! You will be redirected to login now.');
        navigate('/login');
    };

    return (
        <div className='registration'>
            <form className='container' onSubmit={handleSubmit(onSubmit)}>
                <h1 className='title'>Register for a Bank Account</h1>
                <div className='input-group'>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' id='email' {...register('email', validation.email)} />
                    <>{errors.email && <p>{errors.email?.message}</p>}</>
                </div>
                <div className='input-group'>
                    <label htmlFor='password'>Password:</label>
                    <input type='password' id='password' {...register('password', validation.password)} />
                    <>{errors.password && <p>{errors.password?.message}</p>}</>
                </div>
                <div className='input-group'>
                    <label htmlFor='rePassword'>Re-enter Password:</label>
                    <input type='password' id='rePassword' {...register('rePassword', validation.rePassword)} />
                    <>{errors.rePassword && <p>{errors.rePassword?.message}</p>}</>
                </div>
                <div className='name-group'>
                    <div className='input-group'>
                        <label htmlFor='first'>First Name:</label>
                        <input type='text' id='first' {...register('first', validation.first)} />
                        <>{errors.first && <p>{errors.first?.message}</p>}</>
                    </div>
                    <div className='input-group'>
                        <label htmlFor='last'>Last Name:</label>
                        <input type='text' id='last' {...register('last', validation.last)} />
                        <>{errors.last && <p>{errors.last?.message}</p>}</>
                    </div>
                </div>
                <div className='input-group'>
                    <label htmlFor='nric'>NRIC:</label>
                    <input type='text' id='nric' {...register('nric', validation.nric)} />
                    <>{errors.nric && <p>{errors.nric?.message}</p>}</>
                </div>
                <div className='input-group'>
                    <label htmlFor='address'>Address:</label>
                    <input type='text' id='address' {...register('address', validation.address)} />
                    <>{errors.address && <p>{errors.address?.message}</p>}</>
                </div>
                <div className='input-group'>
                    <label htmlFor='dob'>Date of Birth:</label>
                    <input type='date' id='dob' {...register('dob', validation.dob)} />
                    <>{errors.dob && <p>{errors.dob?.message}</p>}</>
                </div>
                <div className='input-group'>
                    <label htmlFor='contact'>Contact Number:</label>
                    <input type='tel' id='contact' {...register('contact', validation.contact)} />
                    <>{errors.contact && <p>{errors.contact?.message}</p>}</>
                </div>
                <button type='submit' className='button'>Register</button>
                <Link to={'/'}>Back to Home</Link>
                <Link to={'/login'}>Back to Login</Link>
            </form>
        </div>
    );
}

export default Registration;
