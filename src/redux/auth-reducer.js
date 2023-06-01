const SET_USER_DATA = "SET-USER-DATA"
const SET_AUTH_INFO = 'SET-AUTH-INFO';
const setUserData = (id,login,email) => ({ type: SET_USER_DATA, data:{id,login,email} })
const setAuthInfo = (data) =>
    ({ type: SET_AUTH_INFO, data: data })
let initialState = {
        id: null,
        login: null,
        email: null,
        isAuth:false,
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
        case SET_USER_DATA: {
            return { ...state,...action.data,isAuth:true}
        }
        case SET_AUTH_INFO: {
            return { ...state, profileInfo: { ...action.data } };
        }
        default: return state;
    }
}

export { authReducer, setUserData,setAuthInfo }