import Contact from '../contact/contact';
import s from './messages.module.css'
const Messages = (props) => {
    return (
        <div className={s.messages}>
            <div className={s.inner}>
                <div className={s.contacts}>
                    <ul className={s.contact_list}>
                        <Contact />
                        <Contact />
                    </ul>
                </div>
                <div className={s.chat_window}>
                    
                </div>
            </div>
        </div>
    )
}
export default Messages;