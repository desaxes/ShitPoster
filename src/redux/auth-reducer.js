import { Navigate } from "react-router-dom";
import { authAPI, profileAPI, userAPI } from "../api/api";

const SET_USER_DATA = "SET-USER-DATA"
const SET_AUTH_INFO = 'SET-AUTH-INFO';
const setAuthInfo = (id, login, email) => ({ type: SET_AUTH_INFO, data: { id, login, email } })
const setUserData = (data) =>
    ({ type: SET_USER_DATA, data: data })
let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
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
            return { ...state, ...action.data, isAuth: true }
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
                dispatch(setAuthInfo(data.data.id, data.data.login, data.data.email))
                profileAPI.getUserProfile(data.data.id).then(
                    data => {
                        dispatch(setUserData(data))
                    }
                )
            }
        })
    }
}

export { authReducer,authtorize }