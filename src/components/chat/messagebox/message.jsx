import s from './message.module.css'
const Message = (props) => {
    return (
        <div className={`${s.message} ${props.inout}`}>
            {props.text}
        </div>
    )
}
export default Message;