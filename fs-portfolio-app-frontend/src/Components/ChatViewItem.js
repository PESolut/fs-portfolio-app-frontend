import React from 'react';
import { Link } from 'react-router-dom';

const ChatViewItem = ({message, id}) => {
    console.log(message)
    const { time, date } = message

    return (
        <>
            <Link to={`/chat/${id}`}>
                <li className='message'>
                    time: {time} date: {date} message: {message.message}
                </li>
            </Link>
        </>
    );
};

export default ChatViewItem;