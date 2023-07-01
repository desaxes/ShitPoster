import { appStateType } from "./redux-store"

export const getCurrentPost = (state: appStateType) => {
    return (state.news.currentPost)
}
export const getPostData = (state: appStateType) => {
    return (state.news.postData)
}