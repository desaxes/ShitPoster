import { actionTypes, thunkType } from "../action-types";
import { authAPI, profileAPI } from "../api/api";

// ----------------------------------------------ACTIONS CONST-----------------------------------------
const SET_PROFILE_INFO = 'SET-PROFILE-INFO';
const SET_FOLLOWED_INFO = 'SET-FOLLOWED-INFO'
const SET_PROFILE_STATUS = 'SET-PROFILE-STATUS'
const SET_USER_PHOTO = 'SET-USER-PHOTO'
const CHANGE_PROFILE_INFO = 'CHANGE-PROFILE-INFO'
// ----------------------------------------------ACTION TYPES-----------------------------------------
export namespace profileTypes {
    export type setProfileInfoActionType = {
        type: typeof SET_PROFILE_INFO
        data: any
    }
    export type setFollowedInfoActionType = {
        type: typeof SET_FOLLOWED_INFO,
        followed: boolean
    }
    export type setProfileStatusActionType = {
        type: typeof SET_PROFILE_STATUS,
        status: string
    }
    export type setUserPhotoActionType = {
        type: typeof SET_USER_PHOTO,
        small: string,
        large: string
    }
    export type changeProfileInfoActionActionType = {
        type: typeof CHANGE_PROFILE_INFO,
        about: string,
        job: boolean,
        desc: string,
        fname: string,
        git: string,
        vk: string,
        fb: string,
        inst: string,
        twit: string,
        web: string,
        yt: string,
        ml: string
    }
}

// ----------------------------------------------ACTIONS-----------------------------------------
const setProfileInfo = (data: any): profileTypes.setProfileInfoActionType =>
    ({ type: SET_PROFILE_INFO, data: data })
const setFollowedInfo = (followed: boolean): profileTypes.setFollowedInfoActionType => ({
    type: SET_FOLLOWED_INFO, followed: followed
})
const setProfileStatus = (status: string): profileTypes.setProfileStatusActionType => ({
    type: SET_PROFILE_STATUS, status: status
})
const setUserPhoto = (small: string, large: string): profileTypes.setUserPhotoActionType => ({
    type: SET_USER_PHOTO, small, large
})
const changeProfileInfoAction = (about: string, job: boolean, desc: string, fname: string, git: string,
    vk: string, fb: string, inst: string, twit: string, web: string, yt: string, ml: string): profileTypes.changeProfileInfoActionActionType => ({
        type: CHANGE_PROFILE_INFO, about, job, desc, fname, git, vk, fb, inst, twit, web, yt, ml
    })
// ----------------------------------------------INIT STATE TYPES-----------------------------------------


type initialStateType = {
    profileInfo: profileInfoType,
    status: null | string,
    settingSuccess: boolean
}
// ----------------------------------------------INIT STATE ----------------------------------------------
let initialState: initialStateType = {
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
        followed: null,
        lookingForAJob: false,
        lookingForAJobDescription: null,
        fullName: "",
        userId: 0,
        photos: {
            small: null,
            large: null
        },
    },
    status: null,
    settingSuccess: false
}
// ----------------------------------------------REDUCER--------------------------------------------------
const profileReducer = (state = initialState, action: actionTypes<profileTypes.setProfileInfoActionType |
    profileTypes.setFollowedInfoActionType | profileTypes.setProfileStatusActionType |
    profileTypes.setUserPhotoActionType | profileTypes.changeProfileInfoActionActionType>): initialStateType => {
    switch (action.type) {
        case SET_PROFILE_INFO: {
            return { ...state, profileInfo: { ...action.data } };
        }
        case SET_FOLLOWED_INFO: {
            return { ...state, profileInfo: { ...state.profileInfo, followed: action.followed } };
        }
        case SET_PROFILE_STATUS: {
            return { ...state, status: action.status }
        }
        case SET_USER_PHOTO: {
            return {
                ...state, profileInfo: {
                    ...state.profileInfo, photos:
                        { ...state.profileInfo.photos, small: action.small, large: action.large }
                }
            }
        }
        case CHANGE_PROFILE_INFO: {
            return {
                ...state, profileInfo: {
                    ...state.profileInfo, aboutMe: action.about, fullName: action.fname, lookingForAJob: action.job, lookingForAJobDescription: action.desc,
                    contacts: {
                        ...state.profileInfo.contacts,
                        facebook: action.fb,
                        website: action.web,
                        vk: action.vk,
                        twitter: action.twit,
                        instagram: action.inst,
                        youtube: action.yt,
                        github: action.git,
                        mainLink: action.ml
                    }
                }
            }
        }
        default: return state;
    }
}

const getUserProfile = (userid: number): thunkType => async (dispatch) => {
    const data = await profileAPI.getUserProfile(userid);
    dispatch(setProfileInfo(data));
    dispatch(getStatusFromServer(userid))
}
const setStatus = (userid: number, status: string): thunkType => async (dispatch) => {
    let response = await profileAPI.putStatus(status)
    if (response.resultCode === 0) {
        dispatch(getStatusFromServer(userid))
    }
}
const getStatusFromServer = (userid: number): thunkType => async (dispatch) => {
    let response = await profileAPI.getStatus(userid)
    dispatch(setProfileStatus(response))

}
const setPhoto = (img: string) => async (dispatch: any) => {
    let data = await authAPI.setUserPhoto(img)
    if (data.resultCode === 0) {
        dispatch(setUserPhoto(data.data.photos.small, data.data.photos.large))
    }
}
const changeProfileInfo = (id: number, about: string, job: boolean, desc: string, fname: string,
    git: string, vk: string, fb: string, inst: string, twit: string, web: string, yt: string, ml: string) => async (dispatch: any) => {
        let data = await authAPI.setUserInfo({
            userId: id,
            aboutMe: about,
            lookingForAJob: job,
            lookingForAJobDescription: desc,
            fullName: fname,
            contacts: {
                github: git,
                vk: vk,
                facebook: fb,
                instagram: inst,
                twitter: twit,
                website: web,
                youtube: yt,
                mainLink: ml
            }
        })
        if (data.resultCode === 0) {
            dispatch(changeProfileInfoAction(about, job, desc, fname, git, vk, fb, inst, twit, web, yt, ml))
        }
    }

export { profileReducer, getUserProfile, setFollowedInfo, setStatus, setPhoto, changeProfileInfo }