import { authAPI, profileAPI, securityAPI } from "../api/api";
const SET_AUTH_PHOTO = 'SET-USER-PHOTO'
const SET_USER_DATA = "SET-USER-DATA"
const SET_AUTH_INFO = 'SET-AUTH-INFO';
const SET_AUTH_ERROR = 'SET-AUTH-ERROR';
const ADD_TO_LIKE_LIST = 'ADD-TO-LIKE-LIST'
const SET_CAPTCHA = 'SET-CAPTCHA'

type setAuthInfoActionDataType = {
    id: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean
}
type setAuthInfoActionType = {
    type: typeof SET_AUTH_INFO
    data: setAuthInfoActionDataType
}
type setUserDataActionType = {
    type: typeof SET_USER_DATA,
    data: any,
    photo: string | null
}
type setAuthErrorActionType = {
    type: typeof SET_AUTH_ERROR,
    errorState: boolean
}
type addToLikeListActionType = {
    type: typeof ADD_TO_LIKE_LIST,
    id: number
}
type setAuthPhotoActionType = {
    type: typeof SET_AUTH_PHOTO,
    large: string
}
type setCaptchaUrlActionType = {
    type: typeof SET_CAPTCHA,
    url: string | null
}

const setAuthInfo = (id: number | null, login: string | null, email: string | null, isAuth: boolean): setAuthInfoActionType => ({ type: SET_AUTH_INFO, data: { id, login, email, isAuth } })
const setUserData = (data: any, photo: string | null): setUserDataActionType =>
    ({ type: SET_USER_DATA, data: data, photo: photo })
const setAuthError = (errorState: boolean): setAuthErrorActionType =>
    ({ type: SET_AUTH_ERROR, errorState: errorState })
const addToLikeList = (id: number): addToLikeListActionType =>
    ({ type: ADD_TO_LIKE_LIST, id })
const setAuthPhoto = (large: string): setAuthPhotoActionType => ({
    type: SET_AUTH_PHOTO, large
})
const setCaptchaUrl = (url: string | null): setCaptchaUrlActionType => ({
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
    likedPosts: { id: string }[]
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

const authReducer = (state = initialState, action: any): initialStateType => {
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

const authtorize = () => async (dispatch: any) => {
    const data = await authAPI.auth();
    if (data.resultCode === 0) {
        dispatch(setAuthInfo(data.data.id, data.data.login, data.data.email, true));
        dispatch(changeAuthInfo(data.data.id))
    }
}
const login = (email: string, password: string, checkbox: boolean, captcha: string) => async (dispatch: any) => {
    const resultCode = await authAPI.login(email, password, checkbox, captcha);
    if (resultCode === 0) {
        dispatch(setAuthError(false));
        const data = await authAPI.auth()
        if (data.resultCode === 0) {
            dispatch(setAuthInfo(data.data.id, data.data.login, data.data.email, true));
            dispatch(setCaptchaUrl(null))
            dispatch(changeAuthInfo(data.data.id))
        }
    }
    else {
        if (resultCode === 10) {
            dispatch(getCaptcha())
        }
        dispatch(setAuthError(true));
    }
}
const getCaptcha = () => async (dispatch: any) => {
    const result = await securityAPI.captcha();
    dispatch(setCaptchaUrl(result.data.url))
}
const logout = () => async (dispatch: any) => {
    const resultCode = await authAPI.logout();
    if (resultCode === 0) {
        dispatch(setAuthInfo(null, null, null, false));
        dispatch(setUserData(null, null));
    }
}
const changeAuthPhoto = (id: number) => async (dispatch: any) => {
    let data = await profileAPI.getUserProfile(id)
    dispatch(setAuthPhoto(data.data.photos.large))
}
const changeAuthInfo = (id: number) => async (dispatch: any) => {
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


