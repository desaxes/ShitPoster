import { authAPI, profileAPI, userAPI } from "../api/api";
const ADD_POST = 'ADD-POST';
const SET_PROFILE_INFO = 'SET-PROFILE-INFO';
const SET_FOLLOWED_INFO = 'SET-FOLLOWED-INFO'
const SET_PROFILE_STATUS = 'SET-PROFILE-STATUS'
const SET_USER_PHOTO = 'SET-USER-PHOTO'
const CHANGE_PROFILE_INFO = 'CHANGE-PROFILE-INFO'
const addPost = (name, avatar, time, posttext, com_count, like_count) => (
    { type: ADD_POST, name: name, avatar: avatar, time: time, posttext: posttext, com_count: com_count, like_count: like_count })
const setProfileInfo = (data) =>
    ({ type: SET_PROFILE_INFO, data: data })
const setFollowedInfo = (followed) => ({
    type: SET_FOLLOWED_INFO, followed: followed
})
const setProfileStatus = (status) => ({
    type: SET_PROFILE_STATUS, status: status
})
const setUserPhoto = (small, large) => ({
    type: SET_USER_PHOTO, small, large
})
const changeProfileInfoAction = (about, job, desc, fname, git, vk, fb, inst, twit, web, yt, ml) => ({
    type: CHANGE_PROFILE_INFO, about, job, desc, fname, git, vk, fb, inst, twit, web, yt, ml
})
let initialState = {
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

const profileReducer = (state = initialState, action) => {
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
                ...state, aboutMe: action.about, fullname: action.fname, lookingForAJob: action.job, lookingForAJobDescription: action.desc,
                contacts: {
                    ...state.contacts,
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
        // case SETTINGS_SUCCESS:{

        // }
        default: return state;
    }
}

const getUserProfile = (userid) => async (dispatch) => {
    const data = await profileAPI.getUserProfile(userid);
    dispatch(setProfileInfo(data));
    profileAPI.getStatus(userid).then(data => {
        dispatch(setProfileStatus(data))
    })
}
const setStatus = (userid, status) => async (dispatch) => {
    let response = await profileAPI.putStatus(status)
    if (response.resultCode === 0) {
        profileAPI.getStatus(userid).then(data => {
            dispatch(setProfileStatus(data))
        })
    }
}
const setPhoto = (img) => async (dispatch) => {
    let data = await authAPI.setUserPhoto(img)
    if (data.resultCode === 0) {
        dispatch(setUserPhoto(data.data.photos.small, data.data.photos.large))
    }
}
const changeProfileInfo = (id, about, job, desc, fname, git, vk, fb, inst, twit, web, yt, ml) => async (dispatch) => {
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

export { profileReducer, addPost, getUserProfile, setFollowedInfo, setStatus, setPhoto, changeProfileInfo }