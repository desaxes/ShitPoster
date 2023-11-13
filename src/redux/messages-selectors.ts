import { appStateType } from "./redux-store"

export const getDialogsData = (state: appStateType) => {
    return (state.messagesPage.dialogsData)
}
export const getCurrentDialog = (state: appStateType) => {
    return (state.messagesPage.currentDialog)
}
