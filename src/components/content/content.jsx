import {ProfileContainer} from '../profile/profile-container'
import MessagesContainer from '../messages/messages-container'
import s from './content.module.css'
import { Route, Routes } from 'react-router-dom'
import { SubsContainer } from '../subs/subs-container'
const Content = (props) => {
    return (
                <section className={s.content}>
                    <div className='container'>
                        <div className='content__inner'>
                            <Routes>
                                <Route path='/profile/:id?' element={<ProfileContainer/>} />
                                <Route path='/messages' element={<MessagesContainer/>} />
                                <Route path='/subs' element={<SubsContainer/>} />
                            </Routes>
                        </div>
                    </div>
                </section>)
}
export default Content;