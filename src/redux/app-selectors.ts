import { appStateType } from "./redux-store"

export const getInit = (state: appStateType) => {
    return (state.app.initialized)
}