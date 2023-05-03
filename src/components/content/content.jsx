import Profile from '../profile/profile'
import Messages from '../messages/messages'
import s from './content.module.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
const Content = () => {
    return (
                <section className={s.content}>
                    <div className='container'>
                        <div className='content__inner'>
                            <Routes>
                                <Route path='/profile' element={<Profile/>} />
                                <Route path='/messages' element={<Messages/>} />
                            </Routes>
                        </div>
                    </div>
                </section>)
}
export default Content;