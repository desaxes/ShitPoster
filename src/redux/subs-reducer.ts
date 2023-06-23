import { userAPI } from "../api/api";
import { actionTypes, thunkType } from "../action-types";

// ----------------------------------------------ACTION CONST--------------------------------------------------
const SUBSCRIBE = 'SUBSCRIBE';
const SETSUBS = 'SETSUBS';
const SETUSERSNUMBER = 'SET-USERS-NUMBER'
const SETPAGENUMBER = 'SET-PAGE-NUMBER'
const SETLOADER = 'SET-LOADER'
const SUBSCRIBE_IN_PROGRESS = 'SUBSCRIBE-IN-PROGRESS'
// ----------------------------------------------ACTION TYPES--------------------------------------------------
export namespace subTypes {
    export type subscribeActionType = {
        type: typeof SUBSCRIBE,
        userid: number
    }
    export type setsubsActionType = {
        type: typeof SETSUBS,
        subsData: userItemType[]
    }
    export type setUsersNumberActionType = {
        type: typeof SETUSERSNUMBER,
        count: number
    }
    export type setPageNumberActionType = {
        type: typeof SETPAGENUMBER,
        page: number
    }
    export type setLoaderActionType = {
        type: typeof SETLOADER,
        isFetching: boolean
    }
    export type subscribeInProgressActionType = {
        type: typeof SUBSCRIBE_IN_PROGRESS,
        isFetching: boolean,
        userId: number
    }
}
// subscribeActionType | setsubsActionType | setUsersNumberActionType | setPageNumberActionType |
//     setLoaderActionType | subscribeInProgressActionType
// ----------------------------------------------ACTIONS--------------------------------------------------
const subscribe = (userid: number): subTypes.subscribeActionType => (
    { type: SUBSCRIBE, userid: userid })
const setsubs = (subsData: userItemType[]): subTypes.setsubsActionType => (
    { type: SETSUBS, subsData: subsData })
const setUsersNumber = (count: number): subTypes.setUsersNumberActionType => (
    { type: SETUSERSNUMBER, count: count }
)
const setPageNumber = (page: number): subTypes.setPageNumberActionType => (
    { type: SETPAGENUMBER, page: page }
)
const setLoader = (isFetching: boolean): subTypes.setLoaderActionType => (
    { type: SETLOADER, isFetching: isFetching }
)
const subscribeInProgress = (isFetching: boolean, userId: number): subTypes.subscribeInProgressActionType => (
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
const subsReducer = (state = initialState, action: actionTypes<
    subTypes.subscribeActionType |
    subTypes.setsubsActionType |
    subTypes.setUsersNumberActionType |
    subTypes.setPageNumberActionType |
    subTypes.setLoaderActionType |
    subTypes.subscribeInProgressActionType>): initialStateType => {
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
// ----------------------------------------------THUNKS--------------------------------------------------
// type dispatchType = Dispatch<actionTypes>

const getUsers = (pageSize: number, pageNumber: number): thunkType => async (dispatch) => {
    dispatch(setLoader(true))
    const data = await userAPI.getUsers(pageSize, pageNumber)
    dispatch(setLoader(false))
    dispatch(setsubs(data.items))
    dispatch(setUsersNumber(data.totalCount))
}
const onPageChanged = (pageSize: number, pageNumber: number): thunkType => async (dispatch) => {
    dispatch(setLoader(true))
    dispatch(setPageNumber(pageNumber))
    const data = await userAPI.getUsers(pageSize, pageNumber)
    dispatch(setLoader(false))
    dispatch(setsubs(data.items))
}

const following = (subscribeStatus: boolean, userId: number): thunkType => async (dispatch) => {
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