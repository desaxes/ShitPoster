import { authAPI, profileAPI, userAPI } from "../api/api";
const SET_AUTH_PHOTO = 'SET-USER-PHOTO'
const SET_USER_DATA = "SET-USER-DATA"
const SET_AUTH_INFO = 'SET-AUTH-INFO';
const SET_AUTH_ERROR = 'SET-AUTH-ERROR';
const ADD_TO_LIKE_LIST = 'ADD-TO-LIKE-LIST'
const setAuthInfo = (id, login, email, isAuth) => ({ type: SET_AUTH_INFO, data: { id, login, email, isAuth } })
const setUserData = (data, photo) =>
    ({ type: SET_USER_DATA, data: data, photo: photo })
const setAuthError = (errorState) =>
    ({ type: SET_AUTH_ERROR, errorState: errorState })
const addToLikeList = (id) =>
    ({ type: ADD_TO_LIKE_LIST, id })
const setAuthPhoto = (large) => ({
    type: SET_AUTH_PHOTO, large
})
let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    photo: null,
    authError: false,
    profileInfo: {
        aboutMe: null,
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null
        },
        lookingForAJob: false,
        lookingForAJobDescription: null,
        fullName: "",
        userId: 0,
        photos: {
            small: null,
            large: null
        }
    },
    likedPosts: []
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_INFO: {
            return { ...state, ...action.data }
        }
        case SET_USER_DATA: {
            return { ...state, profileInfo: action.data , photo: action.photo };
        }
        case SET_AUTH_ERROR: {
            return { ...state, authError: action.errorState };
        }
        case ADD_TO_LIKE_LIST: {
            return { ...state, likedPosts: [...state.likedPosts, action.id] };
        }
        case SET_AUTH_PHOTO: {
            return {
                ...state, photo: action.large
            }
        }
        default: return state;
    }
}

const authtorize = () => async (dispatch) => {
    const data = await authAPI.auth();
    if (data.resultCode === 0) {
        dispatch(setAuthInfo(data.data.id, data.data.login, data.data.email, true));
        profileAPI.getUserProfile(data.data.id).then(
            data_1 => {
                dispatch(setUserData(data_1, data_1.photos.large));
            }
        );
    }
}
const login = (email, password, checkbox) => async (dispatch) => {
    const resultCode = await authAPI.login(email, password, checkbox);
    if (resultCode === 0) {
        dispatch(setAuthError(false));
        const data = await authAPI.auth()
        if (data.resultCode === 0) {
            dispatch(setAuthInfo(data.data.id, data.data.login, data.data.email, true));
            profileAPI.getUserProfile(data.data.id).then(
                data_1 => {
                    dispatch(setUserData(data_1, data_1.photos.large));
                }
            );
        }
    }
    else {
        dispatch(setAuthError(true));
    }
}
const logout = () => async (dispatch) => {
    const resultCode = await authAPI.logout();
    if (resultCode === 0) {
        dispatch(setAuthInfo(null, null, null, false));
        dispatch(setUserData(null, null));
    }
}
const changeAuthPhoto = (id) => async (dispatch) => {
    let data = await profileAPI.getUserProfile(id)
    dispatch(setAuthPhoto(data.data.photos.large))
}
const changeAuthInfo = (id) => async (dispatch) => {
    let data = await profileAPI.getUserProfile(id)
    dispatch(setUserData(data, data.photos.large));
}
export { authReducer, authtorize, login, logout, addToLikeList, changeAuthPhoto, changeAuthInfo }


