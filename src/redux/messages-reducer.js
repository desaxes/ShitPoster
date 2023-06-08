import mes_style from './../components/chat/messagebox/messagebox.module.css'

const SEND_MESSAGE = 'SEND-MESSAGE';

const sendMessage = (newMessageText) => ({ type: SEND_MESSAGE, newMessageText:newMessageText })

let initialState = {
    dialogsData: [
        { id: '1', name: 'James' },
        { id: '2', name: 'John' },
        { id: '3', name: 'Josie' },
        { id: '4', name: 'Jamie' }
    ],

    messagesData: [
        { id: 1, inout: `${mes_style.in}`, text: 'HI' },
        { id: 2, inout: `${mes_style.out}`, text: 'Hi, John' },
        { id: 3, inout: `${mes_style.in}`, text: 'How are you' },
        { id: 4, inout: `${mes_style.out}`, text: 'Im fine' },
        { id: 5, inout: `${mes_style.out}`, text: 'And You?' },
        { id: 6, inout: `${mes_style.in}`, text: 'Im too. Sorry, but i should go. My wife come home. Talk later.' },
        { id: 7, inout: `${mes_style.out}`, text: 'Ok. Bye!' },
        { id: 8, inout: `${mes_style.in}`, text: 'Ok. Bye!' },
    ]
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            if (action.newMessageText === '') {return state}
            else {
                return {
                    ...state, messagesData: [...state.messagesData,
                    { id: state.messagesData.at(-1).id + 1, inout: `${mes_style.out}`, text: action.newMessageText }], 
                }
            }
        }
        default: return state;
    }
}

export { sendMessage, messagesReducer }