import ProfileContainer from '../profile/profile-container'
import MessagesContainer from '../messages/messages-container'
import s from './content.module.css'
import { Route, Routes } from 'react-router-dom'
import SubsContainer from '../subs/subs-container'
import { LoginConatainer } from '../login/login-container'
import PostEditorContainer from '../editor/editor'
import NewsfeedContainer from '../newsfeed/newsfeed'
import PopularContainer from '../popular/popular/popular'
const Content = (props) => {
    return (
        <section className={s.content}>
            <div className='container'>
                <div className='content__inner'>
                    <Routes>
                        <Route path='/profile/:id?' element={<ProfileContainer />} />
                        <Route path='/popular' element={<PopularContainer />} />
                        <Route path='/newsfeed' element={<NewsfeedContainer />} />
                        <Route path='/messages' element={<MessagesContainer />} />
                        <Route path='/subs' element={<SubsContainer />} />
                        <Route path='/login' element={<LoginConatainer />} />
                        <Route path='/posteditor' element={<PostEditorContainer />} />
                    </Routes>
                </div>
            </div>
        </section>)
}
export default Content;