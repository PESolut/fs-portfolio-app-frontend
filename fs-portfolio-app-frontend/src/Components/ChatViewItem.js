import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchUsersData } from '../API/auth';

const ChatViewItem = ({message, id}) => {
    const [singleUserName, setSingleUserName] = useState('')
    const userIDz =  id



    console.log('message user_id',message.user_id)
    const userID = message.user_id

    console.log(message)
    const { time, date } = message

    const singleUserByID = (userID, usersData) => {
    //     console.log('login-page, singleUserByName, id arg value:', userID);
    //     console.log('login-page, singleUserByName, usersData arg value:', usersData.data);
        
        const user = usersData.data.find((userData) => userData.id === userID);
    //     console.log('user id inside singleuserbyname', userID);
        
        return user || null; // Return null if no match found
      };
      
      

    const onPageLoad = async (userID) => {
        console.log('message',userID)
        const usersData = await fetchUsersData()
    //     console.log('++++++++++++++++++++++++++++++++++++',usersData)
        const user = await singleUserByID(userID, usersData)
        console.log(user)
        setSingleUserName(user)

    }

 useEffect(()=> {
  onPageLoad(userID);
},[]);
    



    return (
        <>
                <li className='message-item'>
                    <Link to={`/chat/${id}`}>
                    {singleUserName.name ? singleUserName.name : 'guest' }: {message.message} 
                    </Link>
                </li>
          
        </>
    );
};

export default ChatViewItem;