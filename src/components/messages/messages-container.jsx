import { connect } from 'react-redux';
import { addSendMessageActionCreator, addUpdateMessageAreaActionCreator } from '../../redux/messages-reducer';
import Messages from './messages'
// const MessagesContainerOld = (props) => {
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState();
//                 let contacts = state.messagesPage.dialogsData;
//                 let messages = state.messagesPage.messagesData;
//                 let newMessageText = state.messagesPage.newMessageText;
//                 let sendMessage = () => { store.dispatch(addSendMessageActionCreator()) }
//                 let updateMessageText = (text) => { store.dispatch(addUpdateMessageAreaActionCreator(text)) }
//                 return (
//                     <Messages contacts={contacts} messages={messages} newMessageText={newMessageText}
//                         sendMessage={sendMessage} updateMessageText={updateMessageText} />)
//             }
//             }
//         </StoreContext.Consumer>
//     )
// }
const mapStateToProps = (state) =>{
    return{
        contacts:state.messagesPage.dialogsData,
        messages:state.messagesPage.messagesData,
        newMessageText:state.messagesPage.newMessageText
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        sendMessage:()=>{
            dispatch(addSendMessageActionCreator());
        },
        updateMessageText:(text)=>{
            dispatch(addUpdateMessageAreaActionCreator(text));
        }
    }
}
const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer;