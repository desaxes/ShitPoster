import { userAPI } from "../api/api";

const SUBSCRIBE = 'SUBSCRIBE';
const SETSUBS = 'SETSUBS';
const SETUSERSNUMBER = 'SET-USERS-NUMBER'
const SETPAGENUMBER = 'SET-PAGE-NUMBER'
const SETLOADER = 'SET-LOADER'
const SUBSCRIBE_IN_PROGRESS = 'SUBSCRIBE-IN-PROGRESS'
const subscribe = (userid) => (
    { type: SUBSCRIBE, userid: userid })
const setsubs = (subsData) => (
    { type: SETSUBS, subsData: subsData })
const setUsersNumber = (count) => (
    { type: SETUSERSNUMBER, count: count }
)
const setPageNumber = (page) => (
    { type: SETPAGENUMBER, page: page }
)
const setLoader = (isFetching) => (
    { type: SETLOADER, isFetching: isFetching }
)
const subscribeInProgress = (isFetching, userId) => (
    { type: SUBSCRIBE_IN_PROGRESS, isFetching: isFetching, userId: userId })


let initialState = {
    subsData: [],
    pageSize: 8,
    totalCount: 0,
    pageNumber: 1,
    isFetching: false,
    subscribeProgress: []
}

const subsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBSCRIBE: {
            return {
                ...state, subsData: state.subsData.map(u => {
                    if (u.id === action.userid) {
                        if (u.followed === false) {
                            return { ...u, followed: true }
                        }
                        else {
                            return { ...u, followed: false }
                        }
                    }
                    else {
                        return u
                    }
                })
            }
        }
        case SETSUBS: {
            return { ...state, subsData: [...action.subsData] }
        }
        case SETUSERSNUMBER: {
            return {
                ...state, totalCount: action.count
            }
        }
        case SETPAGENUMBER: {
            return {
                ...state, pageNumber: action.page
            }
        }
        case SETLOADER: {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        case SUBSCRIBE_IN_PROGRESS: {
            return {
                ...state, subscribeProgress: action.isFetching
                    ? [...state.subscribeProgress, action.userId]
                    : state.subscribeProgress.filter(id => id != action.userId)
            }
        }
        default: return state
    }
}

const getUsers = (pageSize, pageNumber) => async (dispatch) => {
    dispatch(setLoader(true))
    const data = await userAPI.getUsers(pageSize, pageNumber)
    dispatch(setLoader(false))
    dispatch(setsubs(data.items))
    dispatch(setUsersNumber(data.totalCount))
}
const onPageChanged = (pageSize, pageNumber) => async (dispatch) => {
    dispatch(setLoader(true))
    dispatch(setPageNumber(pageNumber))
    const data = await userAPI.getUsers(pageSize, pageNumber)
    dispatch(setLoader(false))
    dispatch(setsubs(data.items))
}

const following = (subscribeStatus, userId) => async (dispatch) => {
    if (subscribeStatus === false) {
        dispatch(subscribeInProgress(true, userId))
        const resultCode = await userAPI.subUser(userId)
        if (resultCode == 0) {
            dispatch(subscribe(userId));
        }
        dispatch(subscribeInProgress(false, userId))
    }
    else {
        dispatch(subscribeInProgress(true, userId))
        const resultCode = await userAPI.unsubUser(userId)
        if (resultCode == 0) {
            dispatch(subscribe(userId));
        }
        dispatch(subscribeInProgress(false, userId))
    }
}

export { subsReducer, getUsers, onPageChanged, following, setUsersNumber }