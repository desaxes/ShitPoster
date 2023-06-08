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
const mapStateToProps = (state) => {
    return {
        contacts: state.messagesPage.dialogsData,
        messages: state.messagesPage.messagesData
    }
}
export default compose(
    connect(mapStateToProps,
        {
            sendMessage,
        }),
    AuthRedirect
)(MessagesAPI);