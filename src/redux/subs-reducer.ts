import { userAPI } from "../api/api";
import { thunkType } from "../action-types";
import { InferActionsTypes } from "./redux-store";

// ----------------------------------------------ACTION CONST--------------------------------------------------
// const SUBSCRIBE = 'SUBSCRIBE';
// const SETSUBS = 'SETSUBS';
// const SETUSERSNUMBER = 'SET-USERS-NUMBER'
// const SETPAGENUMBER = 'SET-PAGE-NUMBER'
// const SETLOADER = 'SET-LOADER'
// const SUBSCRIBE_IN_PROGRESS = 'SUBSCRIBE-IN-PROGRESS'
// ----------------------------------------------ACTIONS--------------------------------------------------
const actions = {
    subscribe: (userid: number) => (
        { type: 'SUBSCRIBE', userid: userid } as const),
    setsubs: (subsData: userItemType[]) => (
        { type: 'SETSUBS', subsData: subsData } as const),
    setUsersNumber: (count: number) => (
        { type: 'SETUSERSNUMBER', count: count } as const
    ),
    setPageNumber: (page: number) => (
        { type: 'SETPAGENUMBER', page: page } as const
    ),
    setLoader: (isFetching: boolean) => (
        { type: 'SETLOADER', isFetching: isFetching } as const
    ),
    subscribeInProgress: (isFetching: boolean, userId: number) => (
        { type: 'SUBSCRIBE_IN_PROGRESS', isFetching: isFetching, userId: userId } as const)
}
export type SubsActionTypes = InferActionsTypes<typeof actions>

// ----------------------------------------------INIT STATE TYPES--------------------------------------------------
export type initialStateType = {
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
const subsReducer = (state = initialState, action: SubsActionTypes): initialStateType => {
    switch (action.type) {
        case 'SUBSCRIBE': {
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
        case 'SETSUBS': {
            return { ...state, subsData: [...action.subsData] }
        }
        case 'SETUSERSNUMBER': {
            return {
                ...state, totalCount: action.count
            }
        }
        case 'SETPAGENUMBER': {
            return {
                ...state, pageNumber: action.page
            }
        }
        case 'SETLOADER': {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        case 'SUBSCRIBE_IN_PROGRESS': {
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
    dispatch(actions.setLoader(true))
    const data = await userAPI.getUsers(pageSize, pageNumber)
    dispatch(actions.setLoader(false))
    dispatch(actions.setsubs(data.items))
    dispatch(actions.setUsersNumber(data.totalCount))
}
const onPageChanged = (pageSize: number, pageNumber: number): thunkType => async (dispatch) => {
    dispatch(actions.setLoader(true))
    dispatch(actions.setPageNumber(pageNumber))
    const data = await userAPI.getUsers(pageSize, pageNumber)
    dispatch(actions.setLoader(false))
    dispatch(actions.setsubs(data.items))
}

const following = (subscribeStatus: boolean, userId: number): thunkType => async (dispatch) => {
    if (subscribeStatus === false) {
        dispatch(actions.subscribeInProgress(true, userId))
        const resultCode = await userAPI.subUser(userId)
        if (resultCode == 0) {
            dispatch(actions.subscribe(userId));
        }
        dispatch(actions.subscribeInProgress(false, userId))
    }
    else {
        dispatch(actions.subscribeInProgress(true, userId))
        const resultCode = await userAPI.unsubUser(userId)
        if (resultCode == 0) {
            dispatch(actions.subscribe(userId));
        }
        dispatch(actions.subscribeInProgress(false, userId))
    }
}

export { subsReducer, getUsers, onPageChanged, following, actions }