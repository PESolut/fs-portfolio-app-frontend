import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../App';
import axios from 'axios'
import ChatView from "../Components/ChatView"
import ChatNewForm from '../Components/ChatNewForm';
import '../Components/Styles/Chat.css'

const Chat = () => {
    const AS = useContext(UserContext)
    const API = process.env.REACT_APP_API_URL;
    const [messages, setMessages] = useState([])

    useEffect(() => {
        axios
            .get(`${API}/messages`)
            .then((res) => setMessages(res.data))
            .catch((error) => console.log(error))
    },[])

    // on page load, check if user is logged, if user is not logged, set userid to guest userid...
    // we can check if user is logged in by checked local storate for an isAuth item...
    // or we can access our global context variable auth from AS.auth
    
    console.log('isAuth',localStorage.getItem('isAuth'))
    console.log('logged user info',localStorage.getItem('userData'))

    
    const userInfoString = localStorage.getItem('userData')
    const userInfoJson = JSON.parse(userInfoString)
    console.log('logged user info object',userInfoJson)
    console.log('logged user info id', userInfoJson.id)
    const loggedUserID = userInfoJson.id

    return (
        <div className="chat">
            <h2>Chat Page</h2>
            <ChatView messages={messages}/>
            <ChatNewForm userID={loggedUserID}/>
        </div>
    );
};

export default Chat;