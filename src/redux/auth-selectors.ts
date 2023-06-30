import { appStateType } from "./redux-store"

export const getSubUsers = (state: appStateType) => {
    return (state.auth.subUsers)
}
export const getLikedPosts = (state: appStateType) => {
    return (state.auth.likedPosts)
}
export const getIsAuth = (state: appStateType) => {
    return (state.auth.isAuth)
}
export const getAuthId = (state: appStateType) => {
    return (state.auth.id)
}
export const getLogin = (state: appStateType) => {
    return (state.auth.login)
}
export const getAuthError = (state: appStateType) => {
    return (state.auth.authError)
}
export const getCaptchaUrl = (state: appStateType) => {
    return (state.auth.captchaUrl)
}
export const getAuthPhoto = (state: appStateType) => {
    return (state.auth.photo)
}
export const getAuthProfileInfo = (state: appStateType) => {
    return (state.auth.profileInfo)
}
