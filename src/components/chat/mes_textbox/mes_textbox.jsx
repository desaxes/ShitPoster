import React from 'react';
import s from './mes_textbox.module.css'
import { addSendMessageActionCreator, addUpdateMessageAreaActionCreator } from '../../../redux/dataStorage';
const Mes_textbox = (props) =>{
    let newMessageArea = React.createRef();

    let onMessageAreaChange = ()=>{
        let text = newMessageArea.current.value;
        props.dispatch(addUpdateMessageAreaActionCreator(text))
    }

    let sendMessage = (e)=>{
        e.preventDefault()
        props.dispatch(addSendMessageActionCreator())
    }

    return(<form className={s.text_box}>
        <textarea ref={newMessageArea} onChange={onMessageAreaChange} value={props.state.messagesPage.newMessageText} maxLength={50} name="" id="" cols="30" rows="10">

        </textarea>
        <div className='quick-posting-btnbox'>
            <button onClick={sendMessage} type='submit' className='quick-posting__btn'>
                Send
            </button>
        </div>
    </form>)
}
export default Mes_textbox;