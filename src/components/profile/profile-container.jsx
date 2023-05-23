import { addPostActionCreator, addUpdatePostTextActionCreator } from '../../redux/profile-reducer';
import StoreContext from '../../redux/store-context';
import Profile from './profile';


const ProfileContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                let addPost = (name, avatar, time, com_count, like_count) => {
                    store.dispatch(addPostActionCreator(name, avatar, time, com_count, like_count))
                }
                let updatePostText = (text) => {
                    store.dispatch(addUpdatePostTextActionCreator(text))
                }
                let posts = state.profilePage.postData;
                return (
                    <Profile addPost={addPost}
                        updatePostText={updatePostText} posts={posts}
                        newPostText={state.profilePage.newPostText} />
                )
            }
            }
        </StoreContext.Consumer>
    )
}
export default ProfileContainer;