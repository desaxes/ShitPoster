import { addSendMessageActionCreator, addUpdateMessageAreaActionCreator } from '../../redux/messages-reducer';
import StoreContext from '../../redux/store-context';
import Messages from './messages'
const MessagesContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                let contacts = state.messagesPage.dialogsData;
                let messages = state.messagesPage.messagesData;
                let newMessageText = state.messagesPage.newMessageText;
                let sendMessage = () => { store.dispatch(addSendMessageActionCreator()) }
                let updateMessageText = (text) => { store.dispatch(addUpdateMessageAreaActionCreator(text)) }
                return (
                    <Messages contacts={contacts} messages={messages} newMessageText={newMessageText}
                        sendMessage={sendMessage} updateMessageText={updateMessageText} />)
            }
            }
        </StoreContext.Consumer>
    )
}
export default MessagesContainer;