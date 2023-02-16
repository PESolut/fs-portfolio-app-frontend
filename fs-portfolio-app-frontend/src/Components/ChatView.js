import ChatViewItem from "./ChatViewItem"
import '../Components/Styles/ChatView.css'

const ChatView = ({messages}) => {
    console.log('ChatView localstorage isAuth state:',localStorage.getItem('isAuth'))
    console.log('ChatView userinfo', localStorage.getItem('userData'))
    const userString = localStorage.getItem('userData')
    const userJson = JSON.parse(userString)
    console.log('ChatView userinfo parsed', userJson)
    const userName = userJson.name
    const userEmail = userJson.email
    const userId = userJson.id
    console.log ('Users Info:','name:',userName,'id',userId,'email',userEmail)

    return (
        <>
            <ul className="chat-view-list">
                {
                    messages.map(message => <ChatViewItem key={message.id} message={message} id={message.id} />)
                } 
            </ul>
      
        </>
    );
};

export default ChatView;