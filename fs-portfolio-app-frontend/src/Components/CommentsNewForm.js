import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios";


const CommentsNewForm = () => {
    const API = process.env.REACT_APP_API_URL
    const navigate = useNavigate()
    const { id } = useParams()
    const [formData, setFormData] = useState({
        comment: '',
        user_id: '',
        message_id: id
    })
    
    console.log(id)

    const handleInputChange = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        console.log(formData)
        axios
        .post(`${API}/messages/${id}/comments`, formData)
        .then(() => {
            console.log('comment posted')
            window.location.reload()
        })
        .catch((error) => console.log(error))
    }
    

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="comment">Comment:</label>
                <input
                    type="text"
                    id="comment"
                    name="comment"
                    value={formData.comment}
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
            <button type="submit">Post Comment</button>
        </form>
        </>
    );
};

export default CommentsNewForm;