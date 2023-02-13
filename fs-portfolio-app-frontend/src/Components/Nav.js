import { Link } from 'react-router-dom';
import "./Styles/Nav.css"

const Nav = () => {
    return (
        <nav>
            <div className='home-button'>
                 <Link to='/'>Home</Link>
            </div>
            <div className='about-button'>
                 <Link to='/about'>About</Link>
            </div>
            <div className='chat-button'>
                 <Link to='/chat'>Chat</Link>
            </div>
            
        </nav>
    );
};

export default Nav;