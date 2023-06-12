export const getUsersArray = (state) => {
    return (state.subsPage.subsData)
}
export const getPageSize = (state) => {
    return (state.subsPage.pageSize)
}
export const getPageNumber = (state) => {
    return (state.subsPage.pageNumber)
}
export const getTotalCount = (state) => {
    return (state.subsPage.totalCount)
}
export const getIsFetching = (state) => {
    return (state.subsPage.isFetching)
}
export const getSubscribeProgress = (state) => {
    return (state.subsPage.subscribeProgress)
}