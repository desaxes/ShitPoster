import { authAPI, profileAPI, userAPI } from "../api/api";

const SET_USER_DATA = "SET-USER-DATA"
const SET_AUTH_INFO = 'SET-AUTH-INFO';
const setAuthInfo = (id, login, email, isAuth) => ({ type: SET_AUTH_INFO, data: { id, login, email, isAuth } })
const setUserData = (data, photo) =>
    ({ type: SET_USER_DATA, data: data, photo: photo })
let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    photo: null,
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
    }
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_INFO: {
            return { ...state, ...action.data }
        }
        case SET_USER_DATA: {
            return { ...state, profileInfo: { ...action.data } };
        }
        default: return state;
    }
}

const authtorize = () => {
    return (dispatch) => {
        authAPI.auth().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthInfo(data.data.id, data.data.login, data.data.email, true))
                profileAPI.getUserProfile(data.data.id).then(
                    data => {
                        dispatch(setUserData(data, data.profileInfo.photo.large))
                    }
                )
            }
        })
    }
}
const login = (email, password, checkbox) => {
    return (dispatch) => {
        authAPI.login(email, password, checkbox).then(resultCode => {
            if (resultCode === 0) {
                authAPI.auth().then(data => {
                    if (data.resultCode === 0) {
                        dispatch(setAuthInfo(data.data.id, data.data.login, data.data.email, true))
                        profileAPI.getUserProfile(data.data.id).then(
                            data => {
                                dispatch(setUserData(data, data.profileInfo.photo.large))
                            }
                        )
                    }
                })
            }
        })
    }
}
const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(resultCode => {
            if (resultCode === 0) {
                dispatch(setAuthInfo(null, null, null, false))
                dispatch(setUserData(null, null))
            }
        })
    }
}
export { authReducer, authtorize, login, logout }