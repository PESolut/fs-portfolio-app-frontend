import ChatViewItem from "./ChatViewItem"

const ChatView = ({messages}) => {

    return (
        <>
            <ul>
                {
                    messages.map(message => <ChatViewItem key={message.id} message={message} id={message.id} />)
                } 
            </ul>
      
        </>
    );
};

export default ChatView;