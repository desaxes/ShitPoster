import Profile from '../profile/profile'
import Messages from '../messages/messages'
import s from './content.module.css'
import { Route, Routes } from 'react-router-dom'
const Content = (props) => {
    return (
                <section className={s.content}>
                    <div className='container'>
                        <div className='content__inner'>
                            <Routes>
                                <Route path='/profile' element={<Profile state={props.state} addPost={props.addPost} updatePostText ={props.updatePostText}/>} />
                                {/* <Route path='/messages' element={<Messages contacts={props.store._state.messagesPage} messages={props.store._state.messages}/>} /> */}
                            </Routes>
                        </div>
                    </div>
                </section>)
}
export default Content;