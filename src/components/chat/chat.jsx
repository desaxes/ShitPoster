import s from './chat.module.css'
import Messagebox from './messagebox/messagebox';
import React from 'react';
import { useForm } from 'react-hook-form';
const Chat = (props) => {
    return (
        <div className={s.chat_block}>
            <div className="page-block">
                <div className={s.chat_window}>
                    <Messagebox messages={props.messages} />
                    <Mes_textbox sendMessage={props.sendMessage} />
                </div>
            </div>
        </div>
    )
}

const Mes_textbox = (props) => {
    const { register, reset, handleSubmit } = useForm()
    const onSubmit = (e) => {
        props.sendMessage(e.messageText);
        reset();
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.text_box}>
            <textarea required {...register('messageText')} maxLength={50}>
            </textarea>
            <div className='quick-posting-btnbox'>
                <input value={'Send Message'} type='submit' className='quick-posting__btn' />
            </div>
        </form>
    )
}
export default Chat;