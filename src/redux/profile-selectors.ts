import { appStateType } from "./redux-store"

export const getPosts = (state: appStateType) => {
    return (state.news.postData)
}
export const getProfileInfo = (state: appStateType) => {
    return (state.profilePage.profileInfo)
}
export const getUserId = (state: appStateType) => {
    return (state.profilePage.profileInfo.userId)
}
export const getStatus = (state: appStateType) => {
    return (state.profilePage.status)
}