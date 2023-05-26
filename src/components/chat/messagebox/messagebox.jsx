import Message from './message';
import s from './messagebox.module.css'

const Messagebox = (props) => {
    let messages = props.messages.map (m=><Message key={m.id} inout={m.inout}text={m.text}/>)
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