import ChatViewItem from "./ChatViewItem"
import '../Components/Styles/ChatView.css'

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