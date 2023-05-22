import ProfileContainer from '../profile/profile-container'
import MessagesContainer from '../messages/messages-container'
import s from './content.module.css'
import { Route, Routes } from 'react-router-dom'
const Content = (props) => {
    return (
                <section className={s.content}>
                    <div className='container'>
                        <div className='content__inner'>
                            <Routes>
                                <Route path='/profile' element={<ProfileContainer store={props.store}/>} />
                                <Route path='/messages' element={<MessagesContainer store={props.store}/>} />
                            </Routes>
                        </div>
                    </div>
                </section>)
}
export default Content;