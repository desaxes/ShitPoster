import mes_style from './../components/chat/messagebox/message.module.css'

const UPDATE_MESSAGE_AREA = 'UPDATE-MESSAGE-AREA';
const SEND_MESSAGE = 'SEND-MESSAGE';

const addUpdateMessageAreaActionCreator = (text) =>
    ({ type: UPDATE_MESSAGE_AREA, text: text })

const addSendMessageActionCreator = () => ({ type: SEND_MESSAGE })

const messagesReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_MESSAGE_AREA:
            state.newMessageText = action.text;
            return state;
        case SEND_MESSAGE:
            if (state.newMessageText == '') { }
            else {
                let message = {
                    inout: `${mes_style.out}`,
                    text: state.newMessageText
                }
                state.messagesData.push(message);
                state.newMessageText = '';
            }
            return state;
        default: return state;
    }
}

export { addUpdateMessageAreaActionCreator, addSendMessageActionCreator, messagesReducer }