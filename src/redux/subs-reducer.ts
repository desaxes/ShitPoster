import { userAPI } from "../api/api";
// ----------------------------------------------ACTION CONST--------------------------------------------------
const SUBSCRIBE = 'SUBSCRIBE';
const SETSUBS = 'SETSUBS';
const SETUSERSNUMBER = 'SET-USERS-NUMBER'
const SETPAGENUMBER = 'SET-PAGE-NUMBER'
const SETLOADER = 'SET-LOADER'
const SUBSCRIBE_IN_PROGRESS = 'SUBSCRIBE-IN-PROGRESS'
// ----------------------------------------------ACTION TYPES--------------------------------------------------

type subscribeActionType = {
    type: typeof SUBSCRIBE,
    userid: number
}
type setsubsActionType = {
    type: typeof SETSUBS,
    subsData: userItemType[]
}
type setUsersNumberActionType = {
    type: typeof SETUSERSNUMBER,
    count: number
}
type setPageNumberActionType = {
    type: typeof SETPAGENUMBER,
    page: number
}
type setLoaderActionType = {
    type: typeof SETLOADER,
    isFetching: boolean
}
type subscribeInProgressActionType = {
    type: typeof SUBSCRIBE_IN_PROGRESS,
    isFetching: boolean,
    userId: number
}
// ----------------------------------------------ACTIONS--------------------------------------------------
const subscribe = (userid: number): subscribeActionType => (
    { type: SUBSCRIBE, userid: userid })
const setsubs = (subsData: userItemType[]): setsubsActionType => (
    { type: SETSUBS, subsData: subsData })
const setUsersNumber = (count: number): setUsersNumberActionType => (
    { type: SETUSERSNUMBER, count: count }
)
const setPageNumber = (page: number): setPageNumberActionType => (
    { type: SETPAGENUMBER, page: page }
)
const setLoader = (isFetching: boolean): setLoaderActionType => (
    { type: SETLOADER, isFetching: isFetching }
)
const subscribeInProgress = (isFetching: boolean, userId: number): subscribeInProgressActionType => (
    { type: SUBSCRIBE_IN_PROGRESS, isFetching: isFetching, userId: userId })

// ----------------------------------------------INIT STATE TYPES--------------------------------------------------
type initialStateType = {
    subsData: userItemType[],
    pageSize: number,
    totalCount: number,
    pageNumber: number,
    isFetching: boolean,
    subscribeProgress: number[]
}
// ----------------------------------------------INIT STATE--------------------------------------------------
let initialState: initialStateType = {
    subsData: [],
    pageSize: 8,
    totalCount: 0,
    pageNumber: 1,
    isFetching: false,
    subscribeProgress: []
}
// ----------------------------------------------REDUCER--------------------------------------------------
const subsReducer = (state = initialState, action: any): initialStateType => {
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

const getUsers = (pageSize: number, pageNumber: number) => async (dispatch: any) => {
    dispatch(setLoader(true))
    const data = await userAPI.getUsers(pageSize, pageNumber)
    dispatch(setLoader(false))
    dispatch(setsubs(data.items))
    dispatch(setUsersNumber(data.totalCount))
}
const onPageChanged = (pageSize: number, pageNumber: number) => async (dispatch: any) => {
    dispatch(setLoader(true))
    dispatch(setPageNumber(pageNumber))
    const data = await userAPI.getUsers(pageSize, pageNumber)
    dispatch(setLoader(false))
    dispatch(setsubs(data.items))
}

const following = (subscribeStatus: boolean, userId: number) => async (dispatch: any) => {
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