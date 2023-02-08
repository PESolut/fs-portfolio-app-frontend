import React from 'react';

const ChatViewItem = ({message}) => {
    console.log(message)
    const { time, date } = message

    return (
        <>
            <li>
                time: {time} date: {date} message: {message.message}
            </li>
        </>
    );
};

export default ChatViewItem;