import { connect } from 'react-redux';
import { sendMessage } from '../../redux/messages-reducer.ts';
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
const mapStateToProps = (state) => {
    return {
        contacts: state.messagesPage.dialogsData,
        messages: state.messagesPage.messagesData,
        authId: state.auth.id
    }
}
export default compose(
    connect(mapStateToProps,
        {
            sendMessage,
        }),
    AuthRedirect
)(MessagesAPI);