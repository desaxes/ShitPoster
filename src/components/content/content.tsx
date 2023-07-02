import React, { Suspense } from 'react'
import s from './content.module.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Preloader } from '../common_components/preloader'
import ProfileSettings from '../profile/profile-settings'
import ErrorPage from '../common_components/error-page'
const MessagesContainer = React.lazy(() => import('../messages/messages-container'))
const ProfilePage = React.lazy(() => import('../profile/profile'))
const SubsPage = React.lazy(() => import('../subs/subs'))
const LoginPage = React.lazy(() => import('../login/login'))
const PostEditorContainer = React.lazy(() => import('../editor/editor'))
const Newsfeed = React.lazy(() => import('../newsfeed/newsfeed'))
const PopularPage = React.lazy(() => import('../popular/popular/popular'))
const PostPageContainer = React.lazy(() => import('../posts/post-page'))

const Content = (props: ownPPProps) => {
    return (
        <section className={s.content}>
            <div className='container'>
                <div className='content__inner'>
                    <Suspense fallback={<Preloader />}>
                        <Routes>
                            <Route path='/ShitPoster' element={<Navigate to='/ShitPoster/newsfeed' />} />
                            <Route path='/ShitPoster/profile/:id?' element={<ProfilePage />} />
                            <Route path='/ShitPoster/popular' element={<PopularPage />} />
                            <Route path='/ShitPoster/newsfeed' element={<Newsfeed />} />
                            <Route path='/ShitPoster/messages' element={<MessagesContainer />} />
                            <Route path='/ShitPoster/subs' element={<SubsPage />} />
                            <Route path='/ShitPoster/login' element={<LoginPage />} />
                            <Route path='/ShitPoster/post/:id' element={<PostPageContainer news={props.news} />} />
                            <Route path='/ShitPoster/posteditor' element={<PostEditorContainer />} />
                            <Route path='/ShitPoster/settings' element={<ProfileSettings />} />
                            <Route path='*' element={<ErrorPage />} />
                        </Routes>
                    </Suspense>
                </div>
            </div>
        </section>)
}
export default Content;