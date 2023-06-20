import { authtorize } from "./auth-reducer.ts"

const SET_INIT = "SET-USER-DATA"

type setInitializedActionType = { type: typeof SET_INIT }

const setInitialized = (): setInitializedActionType => ({ type: SET_INIT })

type initialStateType = {
    initialized: boolean
}

let initialState: initialStateType = {
    initialized: false
}

const appReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case SET_INIT: {
            return { ...state, initialized: true }
        }
        default: return state;
    }
}

const initialize = () => (dispatch: any) => {
    let promise = dispatch(authtorize())
    promise.then(() => {
        dispatch(setInitialized())
    })
}

export { initialize, appReducer, initialStateType }