import { thunkType } from "../action-types";
import { ResultCodes } from "../api-types";
import { authAPI, profileAPI, securityAPI, userAPI } from "../api/api";
import { InferActionsTypes } from "./redux-store";
// ================================================ACTIONS===============================================
export const authActions = {
    setAuthInfo: (id: number | null, login: string | null, email: string | null, isAuth: boolean) =>
        ({ type: 'SET_AUTH_INFO', data: { id, login, email, isAuth } } as const),
    setUserData: (data: any, photo: string | null) =>
        ({ type: 'SET_USER_DATA', data: data, photo: photo } as const),
    setAuthError: (errorState: boolean) =>
        ({ type: 'SET_AUTH_ERROR', errorState: errorState } as const),
    addToLikeList: (id: string) =>
        ({ type: 'ADD_TO_LIKE_LIST', id } as const),
    setAuthPhoto: (large: string) => ({
        type: 'SET_AUTH_PHOTO', large
    } as const),
    setCaptchaUrl: (url: string | null) => ({
        type: 'SET_CAPTCHA', url
    } as const),
    setSubUsers: (users: userItemType[]) => ({
        type: 'SET_SUB_USERS', users
    } as const),
    updateSubUsers: (id: number) => ({
        type: 'UPDATE_SUB_USERS', id
    } as const)
}
export type AuthActionTypes = InferActionsTypes<typeof authActions>

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
    likedPosts: string[],
    subUsers: userItemType[]
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
    likedPosts: [],
    subUsers: []
}

const authReducer = (state = initialState, action: AuthActionTypes): initialStateType => {
    switch (action.type) {
        case 'SET_AUTH_INFO': {
            return { ...state, ...action.data }
        }
        case 'SET_USER_DATA': {
            return { ...state, profileInfo: action.data, photo: action.photo };
        }
        case 'SET_AUTH_ERROR': {
            return { ...state, authError: action.errorState };
        }
        case 'ADD_TO_LIKE_LIST': {
            return { ...state, likedPosts: [...state.likedPosts, action.id] };
        }
        case 'SET_AUTH_PHOTO': {
            return {
                ...state, photo: action.large
            }
        }
        case 'SET_CAPTCHA': {
            return {
                ...state, captchaUrl: action.url
            }
        }
        case 'SET_SUB_USERS': {
            return {
                ...state, subUsers: action.users
            }
        }
        case 'UPDATE_SUB_USERS': {
            return {
                ...state, subUsers: state.subUsers.filter(user => user.id != action.id)
            }
        }
        default: return state;
    }
}

const authtorize = (): thunkType => async (dispatch) => {
    const data = await authAPI.auth();
    if (data.resultCode === ResultCodes.Success) {
        dispatch(authActions.setAuthInfo(data.data.id, data.data.login, data.data.email, true));
        dispatch(changeAuthInfo(data.data.id))
        dispatch(getSubUsers())
    }
}
const login = (email: string, password: string, checkbox: boolean, captcha: string): thunkType => async (dispatch) => {
    const resultCode = await authAPI.login(email, password, checkbox, captcha);
    if (resultCode === ResultCodes.Success) {
        dispatch(authActions.setAuthError(false));
        dispatch(authtorize())
    }
    else {
        if (resultCode === ResultCodes.NeedCaptcha) {
            dispatch(getCaptcha())
        }
        dispatch(authActions.setAuthError(true));
    }
}
const getCaptcha = (): thunkType => async (dispatch) => {
    const result = await securityAPI.captcha();
    dispatch(authActions.setCaptchaUrl(result.data.url))
}
const logout = (): thunkType => async (dispatch) => {
    const resultCode = await authAPI.logout();
    if (resultCode === ResultCodes.Success) {
        dispatch(authActions.setAuthInfo(null, null, null, false));
        dispatch(authActions.setUserData(null, null));
    }
}
const changeAuthPhoto = (id: number): thunkType => async (dispatch) => {
    let data = await profileAPI.getUserProfile(id)
    dispatch(authActions.setAuthPhoto(data.photos.large))
}
const changeAuthInfo = (id: number): thunkType => async (dispatch) => {
    let data = await profileAPI.getUserProfile(id)
    dispatch(authActions.setUserData(data, data.photos.large));
}
const addToLikeList = (id: string): thunkType => async (dispatch) => {
    dispatch(authActions.addToLikeList(id))
}
const getSubUsers = (): thunkType => async (dispatch) => {
    let data = await userAPI.getSubUsers()
    dispatch(authActions.setSubUsers(data.items))
}

export {
    authReducer,
    authtorize,
    login,
    logout,
    addToLikeList,
    changeAuthPhoto,
    changeAuthInfo,
    getCaptcha,
    getSubUsers
}


