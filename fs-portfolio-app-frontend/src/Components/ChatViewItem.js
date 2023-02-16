import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchUsersData } from '../API/auth';

const ChatViewItem = ({message, id}) => {
    const [singleUserName, setSingleUserName] = useState('')
    const userID = { id }

    console.log(message)
    const { time, date } = message
    

    const singleUserByName = (userID, usersData) => {
        console.log('login-page, singleUserByName, id arg value:', id)
        console.log('login-page, singleUserByName, usersData arg value:', usersData.data)
      
        const user = usersData.data.find((userData) => userData.id === id)
      
        return user || null; // Return null if no match found
      }
      

    const onPageLoad = async (id) => {
        const usersData = await fetchUsersData()
        console.log('++++++++++++++++++++++++++++++++++++',usersData)
        const user = await singleUserByName(id, usersData)
        console.log(user)
        setSingleUserName(user)

    }

    useEffect(()=> {
        onPageLoad()
    },[])
    



    return (
        <>
                <li className='message-item'>
                    <Link to={`/chat/${id}`}>
                    {singleUserName.name}: {message.message} 
                    </Link>
                </li>
          
        </>
    );
};

export default ChatViewItem;