const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

const addPostActionCreator = (name, avatar, time, com_count, like_count) => (
    { type: ADD_POST, name: name, avatar: avatar, time: time, com_count: com_count, like_count: like_count })

const addUpdatePostTextActionCreator = (text) =>
    ({ type: UPDATE_POST_TEXT, text: text })

let initialState = {
    postData: [
        {
            name: 'Shitposter',
            time: '10 minutes ago',
            posttext: 'I hate TV',
            com_count: '34',
            like_count: '954'
        },
        {
            name: 'Shitposter',
            time: 'Yesterday',
            posttext: 'We updated the header of our profile',
            com_count: '57',
            like_count: '408'
        },
        {
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
        case ADD_POST:
            if (state.newPostText == '') { }
            else {
                let newPost = {
                    name: action.name,
                    avatar: action.avatar,
                    time: action.time,
                    posttext: state.newPostText,
                    com_count: action.com_count,
                    like_count: action.like_count
                }
                state.postData.push(newPost);
                state.newPostText = '';
            }
            return state;
        case UPDATE_POST_TEXT:
            state.newPostText = action.text;
            return state;
        default: return state;
    }
}
export { profileReducer, addPostActionCreator, addUpdatePostTextActionCreator }