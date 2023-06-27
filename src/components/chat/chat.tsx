import { ErrorField } from '../common_components/error';
import s from './chat.module.css'
import Messagebox from './messagebox/messagebox';
import React from 'react';
import { useForm } from 'react-hook-form';
type ChatProps = {
    sendMessage: () => void
    messages: MessagesType[]
    authId: number
}
const Chat: React.FC<ChatProps> = (props) => {
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
type TextboxProps = {
    authId: number
    sendMessage: (message: string, id: string) => void
}
type FormValues = {
    messageText: string
}

const Mes_textbox: React.FC<TextboxProps> = (props) => {
    const id = props.authId.toString()
    const { register, reset, handleSubmit, formState: { errors } } = useForm<FormValues>()
    const onSubmit = (e: any) => {
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