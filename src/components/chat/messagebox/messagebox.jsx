import Message from './message';
import s from './messagebox.module.css'
import { userData } from '../../../redux/userdata'

const Messagebox = (props) => {
    return (
        <div>
            <div className={s.dialog_name}>
                <p>John</p>
                <span>"Online"</span>
            </div>
            <div className={s.message_box}>
                <div className={s.messages}>
                    {userData.messages}
                </div>
            </div>
        </div>)
}
export default Messagebox;