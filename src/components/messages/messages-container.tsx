import { connect } from 'react-redux';
import { sendMessage } from '../../redux/messages-reducer';
import Messages from './messages'
import React from 'react';
import { AuthRedirect } from '../common_components/hoc-components';
import { compose } from 'redux';
import { appStateType } from '../../redux/redux-store.js';

const MessagesAPI: React.FC<MessagesProps> = (props) => {
    return (
        <Messages {...props} />
    )
}
const mapStateToProps = (state: appStateType) => {
    return {
        contacts: state.messagesPage.dialogsData,
        messages: state.messagesPage.messagesData,
        authId: state.auth.id
    }
}
export default compose<React.FC>(
    connect(mapStateToProps,
        {
            sendMessage,
        }),
    AuthRedirect
)(MessagesAPI);