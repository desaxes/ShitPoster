const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

const addPostActionCreator = (name, avatar, time, com_count, like_count) => (
    { type: ADD_POST, name: name, avatar: avatar, time: time, com_count: com_count, like_count: like_count })

const addUpdatePostTextActionCreator = (text) =>
    ({ type: UPDATE_POST_TEXT, text: text })

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
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            if (state.newPostText == '') { return state }
            else {
                return {
                    ...state,
                    postData: [...state.postData,
                    {
                        id: state.postData.at(-1).id + 1,
                        name: action.name,
                        avatar: action.avatar,
                        time: action.time,
                        posttext: state.newPostText,
                        com_count: action.com_count,
                        like_count: action.like_count
                    }],
                    newPostText: ''
                };
            }
        }
        case UPDATE_POST_TEXT: {
            return { ...state, newPostText: action.text };
        }
        default: return state;
    }
}
export { profileReducer, addPostActionCreator, addUpdatePostTextActionCreator }