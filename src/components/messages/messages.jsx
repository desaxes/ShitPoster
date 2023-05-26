import s from './messages.module.css'
import Chat from './../chat/chat';
import Contact from '../contact/contact';
const Messages = (props) => {
    let contacts = props.contacts.map(c => <Contact key={c.id} id={c.id} username={c.name} />
    )
    return (
        <div className={s.messages}>
            <div className={s.inner}>
                <div className={s.contacts}>
                    <button className='quick-posting__btn'><p>CONTACTS</p></button>
                    <ul className={s.contact_list}>
                        {contacts}
                    </ul>
                </div>
                <Chat messages={props.messages} newMessageText={props.newMessageText}
                    sendMessage={props.sendMessage} updateMessageText={props.updateMessageText} />
            </div>
        </div>
    )
}
export default Messages;