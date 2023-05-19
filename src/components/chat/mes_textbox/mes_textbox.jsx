import React from 'react';
import s from './mes_textbox.module.css'
import { addSendMessageActionCreator, addUpdateMessageAreaActionCreator } from '../../../redux/messages-reducer';
const Mes_textbox = (props) =>{

    let onMessageAreaChange = (e)=>{
        let text = e.target.value;
        props.dispatch(addUpdateMessageAreaActionCreator(text))
    }

    let sendMessage = (e)=>{
        e.preventDefault()
        props.dispatch(addSendMessageActionCreator())
    }

    return(<form className={s.text_box}>
        <textarea  onChange={onMessageAreaChange} value={props.state.messagesPage.newMessageText} maxLength={50} name="" id="" cols="30" rows="10">

        </textarea>
        <div className='quick-posting-btnbox'>
            <button onClick={sendMessage} type='submit' className='quick-posting__btn'>
                Send
            </button>
        </div>
    </form>)
}
export default Mes_textbox;