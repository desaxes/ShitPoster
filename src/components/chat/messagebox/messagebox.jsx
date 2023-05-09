import Message from './message';
import s from './messagebox.module.css'
import {messages} from './../../../index'

const Messagebox = (props) => {
    return (
        <div>
            <div className={s.dialog_name}>
                <p>John</p>
                <span>"Online"</span>
            </div>
            <div className={s.message_box}>
                <div className={s.messages}>
                    {messages}
                </div>
            </div>
        </div>)
}
export default Messagebox;