import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'
import SingleChatView from '../Components/SingleChatView'
import SingleChatEdit from '../Components/SingleChatEdit';
import CommentsView from '../Components/CommentsView';

const Message = () => {
    const API = process.env.REACT_APP_API_URL
    const [message, setMessage] = useState([])
    const [comments, setComments] = useState([])
    const [info, setInfo] = useState(null)
    let { id } = useParams()
    let navigate = useNavigate()

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
        <div className="message">
            <h2>Message Page</h2>
            <SingleChatView message={message}/>
            {info && <SingleChatEdit message={message}/>}
            <CommentsView comments={comments}/>
        </div>
    );
};

export default Message;
