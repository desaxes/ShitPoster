import { addSendMessageActionCreator, addUpdateMessageAreaActionCreator } from '../../redux/messages-reducer';
import Messages from './messages'
const MessagesContainer = (props) => {
    let state = props.store.getState();
    let contacts = state.messagesPage.dialogsData;
    let messages = state.messagesPage.messagesData;
    let newMessageText = state.messagesPage.newMessageText;
    let sendMessage = () =>{props.store.dispatch(addSendMessageActionCreator())}
    let updateMessageText = (text) =>{props.store.dispatch(addUpdateMessageAreaActionCreator(text))}
    return (
        <Messages contacts ={contacts} messages = {messages} newMessageText ={newMessageText} 
        sendMessage={sendMessage} updateMessageText={updateMessageText}/>
    )
}
export default MessagesContainer;