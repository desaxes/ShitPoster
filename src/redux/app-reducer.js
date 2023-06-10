import { authtorize } from "./auth-reducer"

const SET_INIT = "SET-USER-DATA"

const setInitialized = () => ({ type: SET_INIT })

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INIT: {
            return { ...state, initialized: true }
        }
        default: return state;
    }
}

const initialize = () => (dispatch) => {
    debugger
    let promise = dispatch(authtorize())
    promise.then(() => {
        dispatch(setInitialized())
    })

}

export { initialize, appReducer }