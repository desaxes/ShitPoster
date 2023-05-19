const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

const addPostActionCreator = (name, avatar, time, com_count, like_count) => (
    { type: ADD_POST, name: name, avatar: avatar, time: time, com_count: com_count, like_count: like_count })

const addUpdatePostTextActionCreator = (text) =>
    ({ type: UPDATE_POST_TEXT, text: text })

const profileReducer = (state, action) => {
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