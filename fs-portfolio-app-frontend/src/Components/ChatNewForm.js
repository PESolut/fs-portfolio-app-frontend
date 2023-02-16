import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import '../Components/Styles/ChatNewForm.css'

const ChatNewForm = (userID) => {
    console.log(userID.userID)
    const API = process.env.REACT_APP_API_URL
    const navigate = useNavigate();
    const [formData, setFormData] = useState ({
        message: '',
        user_id: userID.userID
    })

    const handleInputChange = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value 
        })
    }

    const handleSubmit = event => {
        setFormData({
            ...formData,
            'user_id': userID.userID
        })
        event.preventDefault()
        // logic that talks to the database
        console.log(formData)
        axios
        .post(`${API}/messages`, formData)
        .then(() => {
            window.location.reload()
        })
        .catch((error) => console.log(error))
    }

    return (
    <>
    <div className="chat-new-form">
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
            {/* <div>
                <label htmlFor="user_id">User ID:</label>
                    <input
                        type="text"
                        id="user_id"
                        name="user_id"
                        value={formData.user_id}
                        onChange={handleInputChange}
                        />
            </div> */}
            <button type="submit">Post Message</button>
        </form>

    </div>
        
    </>
    );
};

export default ChatNewForm;