import { ThunkAction } from "redux-thunk"
import { ProfileActionTypes } from "./redux/profile-reducer"
import { NewsActionTypes } from "./redux/news-reducer"
import { AuthActionTypes } from "./redux/auth-reducer"
import { AppActionTypes } from "./redux/app-reducer"
import { appStateType } from "./redux/redux-store"
import { SubsActionTypes } from "./redux/subs-reducer"

export type Actions =
    SubsActionTypes |
    ProfileActionTypes |
    NewsActionTypes |
    AuthActionTypes |
    AppActionTypes

// export type actionTypes<T extends Actions> = T
export type thunkType = ThunkAction<Promise<void> | void, appStateType, unknown, Actions>