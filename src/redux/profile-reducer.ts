import { thunkType } from "../action-types";
import { authAPI, profileAPI } from "../api/api";
import { InferActionsTypes } from "./redux-store";
// ----------------------------------------------ACTIONS-----------------------------------------
export const ProfileActions = {
    setProfileInfo: (data: any) =>
        ({ type: 'SET_PROFILE_INFO', data: data } as const),
    setFollowedInfo: (followed: boolean) => ({
        type: 'SET_FOLLOWED_INFO', followed: followed
    } as const),
    setProfileStatus: (status: string) => ({
        type: 'SET_PROFILE_STATUS', status: status
    } as const),
    setUserPhoto: (small: string, large: string) => ({
        type: 'SET_USER_PHOTO', small, large
    } as const),
    changeProfileInfoAction: (about: string, job: boolean, desc: string, fname: string, git: string,
        vk: string, fb: string, inst: string, twit: string, web: string, yt: string, ml: string) => ({
            type: 'CHANGE_PROFILE_INFO', about, job, desc, fname, git, vk, fb, inst, twit, web, yt, ml
        } as const)
}

export type ProfileActionTypes = InferActionsTypes<typeof ProfileActions>
// ----------------------------------------------INIT STATE TYPES-----------------------------------------


export type initialStateType = {
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
const profileReducer = (state = initialState, action: ProfileActionTypes): initialStateType => {
    switch (action.type) {
        case 'SET_PROFILE_INFO': {
            return { ...state, profileInfo: { ...action.data } };
        }
        case 'SET_FOLLOWED_INFO': {
            return { ...state, profileInfo: { ...state.profileInfo, followed: action.followed } };
        }
        case 'SET_PROFILE_STATUS': {
            return { ...state, status: action.status }
        }
        case 'SET_USER_PHOTO': {
            return {
                ...state, profileInfo: {
                    ...state.profileInfo, photos:
                        { ...state.profileInfo.photos, small: action.small, large: action.large }
                }
            }
        }
        case 'CHANGE_PROFILE_INFO': {
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
    dispatch(ProfileActions.setProfileInfo(data));
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
    dispatch(ProfileActions.setProfileStatus(response))

}
const setPhoto = (img: string) => async (dispatch: any) => {
    let data = await authAPI.setUserPhoto(img)
    if (data.resultCode === 0) {
        dispatch(ProfileActions.setUserPhoto(data.data.photos.small, data.data.photos.large))
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
            dispatch(ProfileActions.changeProfileInfoAction(about, job, desc, fname, git, vk, fb, inst, twit, web, yt, ml))
        }
    }

export { profileReducer, getUserProfile, setStatus, setPhoto, changeProfileInfo }