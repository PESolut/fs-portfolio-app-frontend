import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import "./Styles/Nav.css"
import { UserContext } from '../App';

const Nav = () => {
    const AS = useContext(UserContext)
    const LS = AS.localStorageUserAuth()
    console.log (LS)




    return (
        <nav>
            <div className='home-button'>
                 <Link to='/'>Home</Link>
            </div>

            <div className='chat-button'>
                 <Link to='/chat'>Chat</Link>
            </div>

            {localStorage.getItem('isAuth')? ( 
                <div className='dashboard-button'>
                    <Link to='/dashboard'>Dashboard</Link>
                </div>
            ) : (
                <>
                 <div className='login-button'> 
                    <Link to='/login'>Login</Link>
                </div>
                <div className='register-button'> 
                    <Link to='/register'>Register</Link>
                </div>
                </>
               
            )}
            
            <div className='about-button'>
                 <Link to='/about'>About</Link>
            </div>
    
            
        </nav>
    );
};

export default Nav;