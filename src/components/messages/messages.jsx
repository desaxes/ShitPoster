import Contact from '../contact/contact';
import s from './messages.module.css'
import avatar from './../../img/shit_icon.png'
import Chat from './../chat/chat';
const Messages = (props) => {
    let dialogsData = [
        { id: '/1', name: 'James' }, 
        { id: '/2', name: 'John' },
        { id: '/3', name: 'Josie' }
    ]
    return (
        <div className={s.messages}>
            <div className={s.inner}>
                <div className={s.contacts}>
                    <button className='quick-posting__btn'>▼ CONTACTS</button>
                    <ul className={s.contact_list}>
                        <Contact username={dialogsData[0].name} dialogId={dialogsData[0].id} />
                        <Contact username={dialogsData[1].name} dialogId={dialogsData[1].id} />
                        <Contact username={dialogsData[2].name} dialogId={dialogsData[2].id} />
                    </ul>
                </div>
                <Chat />
            </div>
        </div>
    )
}
export default Messages;