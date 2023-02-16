import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { UserContext } from '../App';
import { onRegistration } from '../API/auth';

import '../Components/Styles/Register.css'

const greetingIteration = Math.floor(Math.random() * 20) + 1

const greetings = [
        "Welcome, newcomer. The future awaits.",
        "Another one joins the fold. The revolution grows.",
        "New arrival detected. The system expands.",
        "A new spark in the network. Join us.",
        "Initiating welcome sequence. You're in.",
        "Glad to have you here. Together we are unstoppable.",
        "Welcome to the fold. The possibilities are endless.",
        "Greetings, brave one. Your journey starts now.",
        "Welcome aboard. We have a world to change.",
        "Welcome, friend. Join us in shaping the world.",
        "Newcomer detected. Let's change the game.",
        "Welcome to the fray. Together we'll make a difference.",
        "Welcome, trailblazer. Let's change the world.",
        "Join us in the fight for change. Welcome.",
        "Welcome to the team. Together we'll make history.",
        "Glad to have you join the cause. Welcome.",
        "Welcome to the front lines of change.",
        "New arrival detected. Welcome to the movement.",
        "Welcome to the resistance. We're stronger together.",
        "Welcome to the revolution. Let's make it happen."
  ];


const Register = () => {
    const AS = useContext(UserContext)
    const [values,setValues] = useState({
        name: '',
        email: '',
        password: '',
    })
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState('')

    const onChange = (e) => {
        console.log(values)
        setValues({...values, [e.target.name]: e.target.value})
    }

    const onSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await onRegistration(values)

            setError('')
            setSuccess(response.data.message)
            console.log(response)
            setValues({ name: '', email: '', password: ''})
        } catch (error) {
            console.log(error.response.data.error)
            setError(error.response.data.error)
        }
    }

    console.log(AS.auth)

    return (
        <form onSubmit={onSubmit} className='register-form'>
            <h4>Sign Up!</h4>
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

            <div style={{ color: 'rgb(61, 173, 62)', margin: '10px 0', display: 'inline-block', backgroundColor: 'rgb(86, 108, 92)', padding: '5px', borderRadius: '5px', fontWeight: 'bold', fontSize: '1.2rem'}}>{success}</div>

            <br/>
            <button type='submit' className='register-button'>
                Register
            </button>

        </form>
    );
};

export default Register;