import { useEffect } from "react";

const SingleChatView = (message) => {

        let date = message.message.date
        let chatMessage = message.message.message
        let time = message.message.time



    console.log(message.message)
    return (
        <div className="message-window-message">
        <h4>{chatMessage}</h4>
        <h4>{time} {date}</h4>
        </div>
    );
};

export default SingleChatView;