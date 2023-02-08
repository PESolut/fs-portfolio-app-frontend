import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import ChatView from "../Components/ChatView"
import ChatNewForm from '../Components/ChatNewForm';

const Chat = () => {
    const API = process.env.REACT_APP_API_URL;
    const [messages, setMessages] = useState([])

    useEffect(() => {
        axios
            .get(`${API}/messages`)
            .then((res) => setMessages(res.data))
            .catch((error) => console.log(error))
    },[])

    return (
        <div className="chat">
            <h2>Chat Page</h2>
            <ChatView messages={messages}/>
            <ChatNewForm/>
        </div>
    );
};

export default Chat;