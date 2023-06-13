import { profileAPI } from "../api/api";
const ADD_POST = 'ADD-POST';
const SET_PROFILE_INFO = 'SET-PROFILE-INFO';
const SET_FOLLOWED_INFO = 'SET-FOLLOWED-INFO'
const SET_PROFILE_STATUS = 'SET-PROFILE-STATUS'
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
    status: null
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

export { profileReducer, addPost, getUserProfile, setFollowedInfo, setStatus }