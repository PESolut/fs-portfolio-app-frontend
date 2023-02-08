import { useEffect } from "react";

const SingleChatView = (message) => {

        let date = message.message.date
        let chatMessage = message.message.message
        let time = message.message.time



    console.log(message.message)
    return (
        <>
        <h3>{chatMessage}</h3>
        <h4>{time} {date}</h4>
        </>
    );
};

export default SingleChatView;