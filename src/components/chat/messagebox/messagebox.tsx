import s from './messagebox.module.css'
import React from 'react'
type MessageType = {
    id: string
    inout: string
    text: string
}
const Message: React.FC<MessageType> = (props) => {
    return (
        <p className={`${s.message} ${props.inout}`}>
            {props.text}
        </p>
    )
}
type MessageboxProps = {
    messages: MessagesType[]
}
const Messagebox: React.FC<MessageboxProps> = (props) => {
    let messages = props.messages.map(m => <Message key={m.id} id={m.id} inout={m.inout} text={m.text} />)
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