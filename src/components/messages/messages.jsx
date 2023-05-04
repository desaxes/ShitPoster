import Contact from '../contact/contact';
import s from './messages.module.css'
import avatar from './../../img/shit_icon.png'
const Messages = (props) => {
    return (
        <div className={s.messages}>
            <div className={s.inner}>
                <div className={s.contacts}>
                    <button className={s.list_btn}>▼ CONTACTS</button>
                    <ul className={s.contact_list}>
                        <Contact avatar={avatar} username='James' />
                        <Contact avatar={avatar} username='John' />
                        <Contact avatar={avatar} username='Josie' />
                    </ul>
                </div>
                <div className={s.chat_block}>
                    <div className="page-block">
                        <div className={s.chat_window}>
                            <div className={s.dialog_name}>
                                John
                            </div>
                            <div className={s.message_box}>
                                <div className={s.messages}>
                                    <div className={`${s.message} ${s.in_message}`}>
                                        Hi!
                                    </div>
                                    <div className={`${s.message} ${s.out_message}`}>
                                        Hi, John.
                                    </div>
                                    <div className={`${s.message} ${s.in_message}`}>
                                        How are you?
                                    </div>
                                    <div className={`${s.message} ${s.out_message}`}>
                                        I'm fine.
                                    </div>
                                    <div className={`${s.message} ${s.out_message}`}>
                                        You?
                                    </div>
                                    <div className={`${s.message} ${s.out_message}`}>
                                        Where are you?
                                    </div>
                                    <div className={`${s.message} ${s.in_message}`}>
                                        fasdfsdfdsfsdfsdfddddddddddddddddddddddddddddddddddddddddddddddddddddd
                                    </div>
                                    <div className={`${s.message} ${s.out_message}`}>
                                        ???
                                    </div>
                                    <div className={`${s.message} ${s.in_message}`}>
                                        I think my keyboard br--ew-oken
                                    </div>
                                    <div className={`${s.message} ${s.out_message}`}>
                                        Ok. Talk later.
                                    </div>
                                    <div className={`${s.message} ${s.in_message}`}>
                                        No
                                    </div>
                                    <div className={`${s.message} ${s.out_message}`}>
                                        Why?
                                    </div>
                                    <div className={`${s.message} ${s.in_message}`}>
                                        I don't like you.
                                    </div>
                                    <div className={`${s.message} ${s.out_message}`}>
                                        ???
                                    </div>
                                    <div className={`${s.message} ${s.in_message}`}>
                                        My keboard is fine. I don't want speak with you. Bye.
                                    </div>
                                    <div className={`${s.message} ${s.out_message}`}>
                                        ...
                                    </div>
                                </div>
                            </div>
                            <div className={s.text_box}>
                                <textarea name="" id="" cols="30" rows="10">

                                </textarea>
                                <div className='quick-posting-btnbox'>
                                    <button className='quick-posting__btn'>
                                        Send
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Messages;