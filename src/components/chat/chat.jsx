import s from './chat.module.css'
import Mes_textbox from './mes_textbox/mes_textbox';
import Messagebox from './messagebox/messagebox';
const Chat = (props) => {
    return (
        <div className={s.chat_block}>
            <div className="page-block">
                <div className={s.chat_window}>
                    <Messagebox messages={props.messages}/>
                    <Mes_textbox/>
                </div>
            </div>
        </div>
    )
}
export default Chat;