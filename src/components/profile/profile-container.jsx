import { addPostActionCreator, addUpdatePostTextActionCreator } from '../../redux/profile-reducer';
import Profile from './profile';


const ProfileContainer = (props) => {
    let state = props.store.getState();
    let addPost = (name,avatar,time,com_count,like_count)=>{
        props.store.dispatch(addPostActionCreator(name,avatar,time,com_count,like_count))
    }
    let updatePostText = (text)=>{
        props.store.dispatch(addUpdatePostTextActionCreator(text))
    }
    let posts = state.profilePage.postData;
    return (
        <Profile addPost={addPost}
                updatePostText={updatePostText} posts={posts} 
                newPostText={state.profilePage.newPostText}/>
    )
}
export default ProfileContainer;