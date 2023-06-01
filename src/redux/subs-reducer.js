const SUBSCRIBE = 'SUBSCRIBE';
const SETSUBS = 'SETSUBS';
const SETUSERSNUMBER = 'SET-USERS-NUMBER'
const SETPAGENUMBER = 'SET-PAGE-NUMBER'
const SETLOADER = 'SET-LOADER'
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


let initialState = {
    subsData: [],
    pageSize: 5,
    totalCount: 0,
    pageNumber: 1,
    isFetching: false
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
        default: return state
    }
}
export { subsReducer, setsubs, subscribe, setUsersNumber, setPageNumber, setLoader }