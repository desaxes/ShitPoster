import s from './messages.module.css'
import Chat from './../chat/chat';
const Messages = (props) => {
    
    return (
        <div className={s.messages}>
            <div className={s.inner}>
                <div className={s.contacts}>
                    <button className='quick-posting__btn'><p>CONTACTS</p></button>
                    <ul className={s.contact_list}>
                        {props.contacts}
                    </ul>
                </div>
                <Chat messages={props.messages}/>
            </div>
        </div>
    )
}
export default Messages;