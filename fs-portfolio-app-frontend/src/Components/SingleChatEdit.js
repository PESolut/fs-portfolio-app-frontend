import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import DeleteButton from "./DeleteButton";


const SingleChatEdit = () => {
    const API = process.env.REACT_APP_API_URL
    const navigate = useNavigate();
    const id = useParams()
    const [formData, setFormData] = useState ({
        message: '',
        user_id: '',
        date: '',
        time: ''
    })

    useEffect(() => {
        if (id) {
            axios
            .get(`${API}/messages/${id.id}`)
            .then((res) => setFormData(res.data))
            .catch((error) => console.log('not found'))
        }
    }, [id])
    
    const handleInputChange = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        // logic that talks to the database
        axios
        .put(`${API}/messages/${id.id}`, formData)
        .then(() => {
        navigate("/chat")
        })
        .catch((error) => console.log(error))
    }

    const deleteMessage = () => {
        console.log('deleted message')
        axios
        .delete(`${API}/messages/${id.id}`)
        .then(() => {
            navigate("/chat")
        })
        .catch((error) => console.log(error))
    }

    return (
        <>
        <div className="message-input">
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="message">Message:</label>
                    <input
                        type="text"
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        />
            </div>
            <div>
                <label htmlFor="user_id">User ID:</label>
                    <input
                        type="text"
                        id="user_id"
                        name="user_id"
                        value={formData.user_id}
                        onChange={handleInputChange}
                        />
            </div>
            <div className="message-button">
            <button type="submit">Edit Message</button>
            <DeleteButton
            text="Delete Message"
            onClick={deleteMessage}
            className="delete-button"
            />
            </div>
          
        </form>

        </div>
        
    </>
    );
};

export default SingleChatEdit;