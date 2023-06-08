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
    postData: [
        {
            id: 1,
            name: 'Shitposter',
            time: '10 minutes ago',
            posttext: 'I hate TV',
            com_count: '34',
            like_count: '954'
        },
        {
            id: 2,
            name: 'Shitposter',
            time: 'Yesterday',
            posttext: 'We updated the header of our profile',
            com_count: '57',
            like_count: '408'
        },
        {
            id: 3,
            name: 'Shitposter',
            time: '128 April 2023',
            posttext: 'Friday',
            com_count: '233',
            like_count: '91'
        }
    ],
    newPostText: '',
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
        case ADD_POST: {
            if (action.posttext == '') { return state }
            else {
                return {
                    ...state,
                    postData: [...state.postData,
                    {
                        id: state.postData.at(-1).id + 1,
                        name: action.name,
                        avatar: action.avatar,
                        time: action.time,
                        posttext: action.posttext,
                        com_count: action.com_count,
                        like_count: action.like_count
                    }]
                };
            }
        }
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

const getUserProfile = (userid) => {
    return (dispatch) => {
        profileAPI.getUserProfile(userid).then(data => {
            dispatch(setProfileInfo(data))
        })
        profileAPI.getStatus(userid).then(data => {
            dispatch(setProfileStatus(data))
        })
    }
}
const setStatus = (userid, status) => {
    return (dispatch) => {
        profileAPI.putStatus(status).then(response => {
            if (response.resultCode === 0) {
                profileAPI.getStatus(userid).then(data => {
                    dispatch(setProfileStatus(data))
                })
            }
        }
        )
    }
}
export { profileReducer, addPost, getUserProfile, setFollowedInfo, setStatus }