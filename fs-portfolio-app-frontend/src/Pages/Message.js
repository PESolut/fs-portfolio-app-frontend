import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'
import SingleChatView from '../Components/SingleChatView'
import SingleChatEdit from '../Components/SingleChatEdit';
import CommentsView from '../Components/CommentsView';
import '../Components/Styles/Message.css'

const Message = () => {
    const API = process.env.REACT_APP_API_URL
    const [message, setMessage] = useState([])
    const [comments, setComments] = useState([])
    const [info, setInfo] = useState(null)
    const [loggedInUserID, setLoggedInUserID] = useState(0)
    let { id } = useParams()
    let navigate = useNavigate()

    const userInfoString = localStorage.getItem('userData')
    const userInfoJson = JSON.parse(userInfoString)
    console.log('logged user info object',userInfoJson)
    console.log('logged user info id', userInfoJson.id)
    const loggedUserID = userInfoJson.id
    console.log('!logged',loggedUserID)
    // setLoggedInUserID(loggedUserID)


    useEffect(() => {
        axios
            .get(`${API}/messages/${id}`)
            .then((res) => {
                console.log(res.data)
                setMessage(res.data)
            })
    }, [id, navigate])

    useEffect(() => { 
        axios
            .get(`${API}/messages/${id}/comments`)
            .then((res) => {
                console.log(res.data)
                setComments(res.data)
            })
    },[])

    useEffect(() => {
        axios.get(`${API}/users/protected`).then((response) => {
            setInfo(response.data);
        });
    }, info);
    console.log(info)
    return (
        <div className="message-window">
            <h2>Message Page</h2>
            <SingleChatView message={message}/>
            {info && <SingleChatEdit message={message}/>}
            <CommentsView comments={comments}/>
        </div>
    );
};

export default Message;
