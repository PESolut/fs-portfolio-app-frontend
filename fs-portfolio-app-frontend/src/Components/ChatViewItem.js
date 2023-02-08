import React from 'react';

const ChatViewItem = ({message}) => {
    console.log(message)
    const { time, date } = message

    return (
        <>
            <ul>
                <li>
                    time: {time} date: {date} message: {message.message}
                </li>
            </ul>
        </>
    );
};

export default ChatViewItem;