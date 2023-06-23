import { ThunkAction } from "redux-thunk"
import { subTypes } from "./redux/subs-reducer"
import { profileTypes } from "./redux/profile-reducer"
import { newsTypes } from "./redux/news-reducer"
import { authTypes } from "./redux/auth-reducer"
import { appTypes } from "./redux/app-reducer"
import { appStateType } from "./redux/redux-store"

export type Actions = subTypes.subscribeActionType |
    subTypes.setsubsActionType |
    subTypes.setUsersNumberActionType |
    subTypes.setPageNumberActionType |
    subTypes.setLoaderActionType |
    subTypes.subscribeInProgressActionType |
    profileTypes.setProfileInfoActionType |
    profileTypes.setFollowedInfoActionType |
    profileTypes.setProfileStatusActionType |
    profileTypes.setUserPhotoActionType |
    profileTypes.changeProfileInfoActionActionType |
    newsTypes.addPostActionType |
    newsTypes.openPostActionType |
    newsTypes.addCommentActionType |
    newsTypes.likeActionType |
    authTypes.setAuthInfoActionType |
    authTypes.setUserDataActionType |
    authTypes.setAuthErrorActionType |
    authTypes.addToLikeListActionType |
    authTypes.setAuthPhotoActionType |
    authTypes.setCaptchaUrlActionType |
    appTypes.setInitializedActionType

export type actionTypes<T extends Actions> = T
export type thunkType = ThunkAction<Promise<void>, appStateType, unknown, Actions>