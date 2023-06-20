import { ErrorField } from '../common_components/error';
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
                    <Mes_textbox authId={props.authId} sendMessage={props.sendMessage} />
                </div>
            </div>
        </div>
    )
}

const Mes_textbox = (props) => {
    const id = props.authId.toString()
    const { register, reset, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (e) => {
        props.sendMessage(e.messageText, id);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.text_box}>
            <textarea {...register('messageText', { required: "✎ You must enter the text ⇒" })}>
            </textarea>
            {errors?.messageText && <ErrorField errorMessage={errors?.messageText.message} />}
            <div className='quick-posting-btnbox'>
                <input value={'Send Message'} type='submit' className='quick-posting__btn' />
            </div>
        </form>
    )
}
export default Chat;