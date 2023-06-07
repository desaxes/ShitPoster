import { connect } from 'react-redux';
import { sendMessage, updateMessageArea } from '../../redux/messages-reducer';
import Messages from './messages'
import React from 'react';
import { AuthRedirect } from '../common_components/hoc-components';
import { compose } from 'redux';

class MessagesAPI extends React.Component {
    render() {
        return (
            <Messages {...this.props} />
        )
    }
}
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
const mapStateToProps = (state) => {
    return {
        contacts: state.messagesPage.dialogsData,
        messages: state.messagesPage.messagesData,
        newMessageText: state.messagesPage.newMessageText
    }
}

// const mapDispatchToProps = (dispatch) =>{
//     return{
//         sendMessage:()=>{
//             dispatch(addSendMessageActionCreator());
//         },
//         updateMessageText:(text)=>{
//             dispatch(addUpdateMessageAreaActionCreator(text));
//         }
//     }
// }
export default compose(
    connect(mapStateToProps,
        {
            sendMessage,
            updateMessageArea
        }),
    AuthRedirect
)(MessagesAPI);