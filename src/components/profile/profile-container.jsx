import { connect } from 'react-redux';
import { addPostActionCreator, addUpdatePostTextActionCreator } from '../../redux/profile-reducer';
import Profile from './profile';


// const ProfileContainer = (props) => {
//     return (
//         <Consumer>
//             {(store) => {
//                 let state = store.getState();
//                 let addPost = (name, avatar, time, com_count, like_count) => {
//                     store.dispatch(addPostActionCreator(name, avatar, time, com_count, like_count))
//                 }
//                 let updatePostText = (text) => {
//                     store.dispatch(addUpdatePostTextActionCreator(text))
//                 }
//                 let posts = state.profilePage.postData;
//                 return (
//                     <Profile addPost={addPost}
//                         updatePostText={updatePostText} posts={posts}
//                         newPostText={state.profilePage.newPostText} />
//                 )
//             }
//             }
//         </Consumer>
//     )
// }

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (name, avatar, time, com_count, like_count) => {
            dispatch(addPostActionCreator(name, avatar, time, com_count, like_count))
        },
        updatePostText: (text) => {
            dispatch(addUpdatePostTextActionCreator(text))
        }
    }
}
    const ProfileContainer = connect(mapStateToProps,mapDispatchToProps)(Profile)
    export default ProfileContainer;