import { appStateType } from "./redux-store"

export const getUsersArray = (state: appStateType) => {
    return (state.subsPage.subsData)
}
export const getPageSize = (state: appStateType) => {
    return (state.subsPage.pageSize)
}
export const getPageNumber = (state: appStateType) => {
    return (state.subsPage.pageNumber)
}
export const getTotalCount = (state: appStateType) => {
    return (state.subsPage.totalCount)
}
export const getIsFetching = (state: appStateType) => {
    return (state.subsPage.isFetching)
}
export const getSubscribeProgress = (state: appStateType) => {
    return (state.subsPage.subscribeProgress)
}