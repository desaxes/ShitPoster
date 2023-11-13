import { ErrorField } from '../common_components/error';
import s from './chat.module.css'
import Messagebox from './messagebox/messagebox';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as dialogSelectors from '../../redux/messages-selectors.ts'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/redux-store.ts';
import { dialogActions } from '../../redux/messages-reducer';
import mes_style from './messagebox/messagebox.module.css';
import Contact from '../contact/contact.tsx';


const Chat: React.FC = () => {

    const params = useParams()
    const dialogsData = useSelector(dialogSelectors.getDialogsData)
    const dialog = dialogsData.find(e => e.id === params.id)
    let contacts = dialogsData.map(c => <Contact key={c.id} id={c.id} name={c.name} avatar={c.avatar} messages={c.messages} />
    )
    return (
        <div className={s.chat_block}>
            <div className="page-block">
                <div className={s.m_block}>
                    <div className={s.contacts}>
                        <button className='quick-posting__btn'><p>CONTACTS</p></button>
                        <ul className={s.contact_list}>
                            {contacts.length === 0 ? 'DIALOGS NOT FOUND' : contacts}
                        </ul>
                    </div>
                    <div className={s.chat_window}>
                        <Messagebox dialog={dialog} />
                        {dialogsData.some(e => e.id === params.id) && <Mes_textbox />}
                    </div>
                </div>

            </div>
        </div>
    )
}

type FormValues = {
    messageText: string
}

const Mes_textbox: React.FC = () => {
    const params = useParams()
    const dispatch: AppDispatch = useDispatch()
    const { register, reset, handleSubmit, formState: { errors } } = useForm<FormValues>()
    const onSubmit = (e: any) => {
        if (params.id != null) {
            dispatch(dialogActions.sendMessage(params.id, e.messageText, `${mes_style.out}`));
            reset();
            dispatch(dialogActions.sendMessage(params.id, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex consequuntur ad officia, assumenda voluptas ullam.", `${mes_style.in}`));
        }
        else {

        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.text_box}>
            <textarea {...register('messageText', { required: "✎ You must enter the text ⇒" })}>
            </textarea>
            {errors?.messageText && <ErrorField errorMessage={errors?.messageText.message} />}
            <div className='quick-posting-btnbox'>
                <input value={'Send Message'} type='submit' className={`${'quick-posting__btn'} ${s.post_button}`} />
            </div>
        </form>
    )
}
export default Chat;
