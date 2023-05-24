import mes_style from './../components/chat/messagebox/message.module.css'

const UPDATE_MESSAGE_AREA = 'UPDATE-MESSAGE-AREA';
const SEND_MESSAGE = 'SEND-MESSAGE';

const addUpdateMessageAreaActionCreator = (text) =>
    ({ type: UPDATE_MESSAGE_AREA, text: text })

const addSendMessageActionCreator = () => ({ type: SEND_MESSAGE })

let initialState = {
    dialogsData: [
        { id: '1', name: 'James' },
        { id: '2', name: 'John' },
        { id: '3', name: 'Josie' },
        { id: '4', name: 'Jamie' }
    ],

    messagesData: [
        { inout: `${mes_style.in}`, text: 'HI' },
        { inout: `${mes_style.out}`, text: 'Hi, John' },
        { inout: `${mes_style.in}`, text: 'How are you' },
        { inout: `${mes_style.out}`, text: 'Im fine' },
        { inout: `${mes_style.out}`, text: 'And You?' },
        { inout: `${mes_style.in}`, text: 'Im too. Sorry, but i should go. My wife come home. Talk later.' },
        { inout: `${mes_style.out}`, text: 'Ok. Bye!' },
        { inout: `${mes_style.in}`, text: 'Ok. Bye!' },
    ],
    newMessageText: ''
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_MESSAGE_AREA:{
            let stateCopy = {...state};
            stateCopy.newMessageText = action.text;
            return stateCopy;}
        case SEND_MESSAGE:{
            let stateCopy = {...state}; 
            if (stateCopy.newMessageText == '') { }
            else {
                let message = {
                    inout: `${mes_style.out}`,
                    text: state.newMessageText
                }
                stateCopy.messagesData = [...state.messagesData];
                stateCopy.messagesData.push(message);
                stateCopy.newMessageText = '';
            }
            return stateCopy;}
        default: return state;
    }
}

export { addUpdateMessageAreaActionCreator, addSendMessageActionCreator, messagesReducer }