import s from './messagebox.module.css'

const Messagebox = (props) => {
    return (
        <div>
            <div className={s.dialog_name}>
                <p>John</p>
                <span>"Online"</span>
            </div>
            <div className={s.message_box}>
                <div className={s.messages}>
                    {props.messages}
                </div>
            </div>
        </div>)
}
export default Messagebox;