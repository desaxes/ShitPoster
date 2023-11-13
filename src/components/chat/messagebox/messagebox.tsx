import s from './messagebox.module.css'
import React from 'react'
import logo from './../../../img/shit_icon.png'
import { useNavigate } from 'react-router-dom'

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
    dialog: { id: string, name: string, avatar: any, messages: Array<{ id: string, inout: string, text: string }> } | undefined
}


const Messagebox: React.FC<MessageboxProps> = (props) => {
    let messages = () => {
        if (props.dialog != undefined) {
            return props.dialog.messages.map(m => <Message key={m.id} id={m.id} inout={m.inout} text={m.text} />)
        }
        else {

        }
    }
    const navigate = useNavigate()
    const toProfile = () => {
        if (props.dialog != undefined) {
            navigate('/ShitPoster/profile/' + props.dialog.id)
        }
    }
    if (props.dialog != undefined) {
        return (
            <div>
                <div className={s.dialog_name}>
                    {props.dialog.avatar != '' ? <img onClick={toProfile} className={s.dialog_avatar} src={props.dialog.avatar} alt="" />
                        : <img className={s.dialog_avatar} src={logo} alt="" />}
                    <p onClick={toProfile}>{props.dialog != undefined && props.dialog.name}</p>
                </div>
                <div className={s.message_box}>
                    <div className={s.messages}>
                        {messages()}
                    </div>
                </div>
            </div>)
    }
}

export default Messagebox;