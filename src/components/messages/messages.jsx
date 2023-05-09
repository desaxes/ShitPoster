import Contact from '../contact/contact';
import s from './messages.module.css'
// import avatar from './../../img/shit_icon.png'
import {dialogs} from './../../index'
import Chat from './../chat/chat';
const Messages = (props) => {
    
    return (
        <div className={s.messages}>
            <div className={s.inner}>
                <div className={s.contacts}>
                    <button className='quick-posting__btn'>▼ CONTACTS</button>
                    <ul className={s.contact_list}>
                        {dialogs}
                    </ul>
                </div>
                <Chat />
            </div>
        </div>
    )
}
export default Messages;