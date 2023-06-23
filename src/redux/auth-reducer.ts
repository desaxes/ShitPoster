import { actionTypes, thunkType } from "../action-types";
import { ResultCodes } from "../api-types";
import { authAPI, profileAPI, securityAPI } from "../api/api";
const SET_AUTH_PHOTO = 'SET-USER-PHOTO'
const SET_USER_DATA = "SET-USER-DATA"
const SET_AUTH_INFO = 'SET-AUTH-INFO';
const SET_AUTH_ERROR = 'SET-AUTH-ERROR';
const ADD_TO_LIKE_LIST = 'ADD-TO-LIKE-LIST'
const SET_CAPTCHA = 'SET-CAPTCHA'
export namespace authTypes {
    export type setAuthInfoActionDataType = {
        id: number | null,
        login: string | null,
        email: string | null,
        isAuth: boolean
    }
    export type setAuthInfoActionType = {
        type: typeof SET_AUTH_INFO
        data: setAuthInfoActionDataType
    }
    export type setUserDataActionType = {
        type: typeof SET_USER_DATA,
        data: any,
        photo: string | null
    }
    export type setAuthErrorActionType = {
        type: typeof SET_AUTH_ERROR,
        errorState: boolean
    }
    export type addToLikeListActionType = {
        type: typeof ADD_TO_LIKE_LIST,
        id: string
    }
    export type setAuthPhotoActionType = {
        type: typeof SET_AUTH_PHOTO,
        large: string
    }
    export type setCaptchaUrlActionType = {
        type: typeof SET_CAPTCHA,
        url: string | null
    }
}
const setAuthInfo = (id: number | null, login: string | null, email: string | null, isAuth: boolean): authTypes.setAuthInfoActionType => ({ type: SET_AUTH_INFO, data: { id, login, email, isAuth } })
const setUserData = (data: any, photo: string | null): authTypes.setUserDataActionType =>
    ({ type: SET_USER_DATA, data: data, photo: photo })
const setAuthError = (errorState: boolean): authTypes.setAuthErrorActionType =>
    ({ type: SET_AUTH_ERROR, errorState: errorState })
const addToLikeList = (id: string): authTypes.addToLikeListActionType =>
    ({ type: ADD_TO_LIKE_LIST, id })
const setAuthPhoto = (large: string): authTypes.setAuthPhotoActionType => ({
    type: SET_AUTH_PHOTO, large
})
const setCaptchaUrl = (url: string | null): authTypes.setCaptchaUrlActionType => ({
    type: SET_CAPTCHA, url
})

type initialStateType = {
    id: null | number,
    login: null | string,
    email: null | string,
    isAuth: false | boolean,
    photo: null | string,
    authError: boolean,
    captchaUrl: null | string,
    profileInfo: {
        aboutMe: null | string,
        contacts: {
            facebook: null | string,
            website: null | string,
            vk: null | string,
            twitter: null | string,
            instagram: null | string,
            youtube: null | string,
            github: null | string,
            mainLink: null | string
        },
        lookingForAJob: boolean,
        lookingForAJobDescription: null | string,
        fullName: null | string,
        userId: number,
        photos: {
            small: null | string,
            large: null | string
        }
    },
    likedPosts: string[]
}

let initialState: initialStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    photo: null,
    authError: false,
    captchaUrl: null,
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

const authReducer = (state = initialState, action: actionTypes<
    authTypes.setAuthInfoActionType |
    authTypes.setUserDataActionType |
    authTypes.setAuthErrorActionType |
    authTypes.addToLikeListActionType |
    authTypes.setAuthPhotoActionType |
    authTypes.setCaptchaUrlActionType>): initialStateType => {
    switch (action.type) {
        case SET_AUTH_INFO: {
            return { ...state, ...action.data }
        }
        case SET_USER_DATA: {
            return { ...state, profileInfo: action.data, photo: action.photo };
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
        case SET_CAPTCHA: {
            return {
                ...state, captchaUrl: action.url
            }
        }
        default: return state;
    }
}

const authtorize = ():thunkType => async (dispatch) => {
    const data = await authAPI.auth();
    if (data.resultCode === ResultCodes.Success) {
        dispatch(setAuthInfo(data.data.id, data.data.login, data.data.email, true));
        dispatch(changeAuthInfo(data.data.id))
    }
}
const login = (email: string, password: string, checkbox: boolean, captcha: string):thunkType => async (dispatch) => {
    const resultCode = await authAPI.login(email, password, checkbox, captcha);
    if (resultCode === ResultCodes.Success) {
        dispatch(setAuthError(false));
        const data = await authAPI.auth()
        if (data.resultCode === ResultCodes.Success) {
            dispatch(setAuthInfo(data.data.id, data.data.login, data.data.email, true));
            dispatch(setCaptchaUrl(null))
            dispatch(changeAuthInfo(data.data.id))
        }
    }
    else {
        if (resultCode === ResultCodes.NeedCaptcha) {
            dispatch(getCaptcha())
        }
        dispatch(setAuthError(true));
    }
}
const getCaptcha = ():thunkType => async (dispatch) => {
    const result = await securityAPI.captcha();
    dispatch(setCaptchaUrl(result.data.url))
}
const logout = ():thunkType => async (dispatch) => {
    const resultCode = await authAPI.logout();
    if (resultCode === ResultCodes.Success) {
        dispatch(setAuthInfo(null, null, null, false));
        dispatch(setUserData(null, null));
    }
}
const changeAuthPhoto = (id: number):thunkType => async (dispatch) => {
    let data = await profileAPI.getUserProfile(id)
    dispatch(setAuthPhoto(data.data.photos.large))
}
const changeAuthInfo = (id: number):thunkType => async (dispatch) => {
    let data = await profileAPI.getUserProfile(id)
    dispatch(setUserData(data, data.photos.large));
}
export {
    authReducer,
    authtorize,
    login,
    logout,
    addToLikeList,
    changeAuthPhoto,
    changeAuthInfo,
    getCaptcha
}


