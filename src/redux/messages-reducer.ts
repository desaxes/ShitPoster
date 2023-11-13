import { randomInt } from 'crypto';
import mes_style from './../components/chat/messagebox/messagebox.module.css';
import { InferActionsTypes } from "./redux-store";
import ff1 from '../img/ff1.png'
import ff2 from '../img/ff2.png'
import ff3 from '../img/ff3.png'
import ken from '../img/Ken.png'

export const dialogActions = {
    sendMessage: (userId: string, newMessageText: string, inout: string) =>
        ({ type: 'SEND_MESSAGE', userId, newMessageText, inout } as const),
    createDialog: (userId: string, name: string, avatar: string) =>
        ({ type: 'CREATE-DIALOG', userId, name, avatar } as const),
    currentDialog: (userId: string) =>
        ({ type: 'CURRENT-DIALOG', userId } as const),

}
export type diologActionTypes = InferActionsTypes<typeof dialogActions>

type initialStateType = {
    dialogsData: Array<{
        id: string;
        name: string;
        avatar: string
        messages: Array<{ id: string, inout: string, text: string }>
    }>
    currentDialog: string
}

let initialState: initialStateType = {
    dialogsData: [

    ],
    currentDialog: ''
}

const messagesReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case 'SEND_MESSAGE': {
            if (action.newMessageText === '') { return state }
            else {

                return {
                    ...state, dialogsData: state.dialogsData.map(e => {
                        if (e.id === action.userId) {
                            return { ...e, messages: [...e.messages, { id: Math.random() + action.newMessageText.substring(2, 7), inout: action.inout, text: action.newMessageText }] }
                        }
                        else {
                            return e
                        }
                    })
                }
            }
        }
        case 'CREATE-DIALOG': {
            return {
                ...state, dialogsData: [...state.dialogsData, { id: action.userId, name: action.name, avatar: action.avatar, messages: [] }]
            }
        }
        case 'CURRENT-DIALOG': {
            return {
                ...state, currentDialog: action.userId
            }
        }
        default: return state;
    }
}

export { messagesReducer }