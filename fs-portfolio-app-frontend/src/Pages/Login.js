import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { UserContext } from '../App';
import { fetchUsersData, onLogin } from '../API/auth';

import '../Components/Styles/Login.css'

const greetingIteration = Math.floor(Math.random() * 14) + 1

const greetings = [
    "You've found the way in.",
    "Ready to unlock your potential?",
    "Welcome to our world.",
    "Let's make reality bend to your will.",
    "Enter the void.",
    "Let us show you the truth.",
    "Welcome to the digital realm.",
    "We've been waiting for you.",
    "Greetings, user.",
    "The system recognizes your presence.",
    "You've arrived.",
    "Let's see how deep you want to go.",
    "Welcome to the other side.",
    "Let's bend the rules together."
  ];
  
const Login = () => {
    const AS = useContext(UserContext)
    const [values,setValues] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState('')
    const [userInfo, setUserInfo] = useState({
        user_id: '',
        name: '',
    })

    const onChange = (e) => {
        console.log(values)
        setValues({...values, [e.target.name]: e.target.value})
    }

    const singleUserByEmail = (email) => {
        console.log('login-page, singleUserByEmail value:',email)
    }

    const onSubmit = async (event) => {
        event.preventDefault()
        console.log('submitted')
       
        try {
            await onLogin(values)
            const userData = await fetchUsersData()
            singleUserByEmail(values.email)
            console.log(userData)
            AS.setAuth(true)
            localStorage.setItem('isAuth', 'true')
            setError('')
            setValues('')
            
        } catch (error) {
            console.log(error.response.data.message)
            setError(error.response.data.message)
            setValues('')
        }

    }

    console.log(AS.auth)

    return (
        <form onSubmit={onSubmit} className='login-form'>
            <h4>Welcome Back!</h4>
            <p>{greetings[greetingIteration]}</p>
            <label>
                Name
            </label>
            <input
            onChange={(e) => onChange(e)}
            type='name'
            id='name'
            name='name'
            value={values.name}
            placeholder='Luke Skywalker'
            />
            <label>
                Email
            </label>
            <input
            onChange={(e) => onChange(e)}
            type='email'
            id='email'
            name='email'
            value={values.email}
            placeholder='luketatoo@theforce.com'
            />
            <label>
                Password
            </label>
            <input
            onChange={(e) => onChange(e)}
            type='password'
            id='password'
            name='password'
            value={values.password}
            placeholder='********'
            />
            <br/>
            <div style={{ color: 'rgb(143, 56, 42)', margin: '10px 0', display: 'inline-block', backgroundColor: 'salmon', padding: '5px', borderRadius: '5px', fontWeight: 'bold', fontSize: '1.2rem'}}>{error}</div>

            <br/>
            <button type='submit' className='login-button'>
                login
            </button>

        </form>
    );
};

export default Login;