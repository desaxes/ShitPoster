import Message from './message';
import s from './messagebox.module.css'

const Messagebox = (props) => {
    let messagesData = [
        {inout:s.in, text:'HI'},
        {inout:s.out, text:'Hi, John'},
        {inout:s.in, text:'How are you'},
        {inout:s.out, text:'Im fine'},
        {inout:s.out, text:'And You?'},
        {inout:s.in, text:'Im too. Sorry, but i should go. My wife come home. Talk later.'},
        {inout:s.out, text:'Ok. Bye!'},

    ]
    return (
        <div>
            <div className={s.dialog_name}>
                <p>John</p>
                <span>"Online"</span>
            </div>
            <div className={s.message_box}>
                <div className={s.messages}>
                    <Message inout={messagesData[0].inout} text={messagesData[0].text}/>
                    <Message inout={messagesData[1].inout} text={messagesData[1].text}/>
                    <Message inout={messagesData[2].inout} text={messagesData[2].text}/>
                    <Message inout={messagesData[3].inout} text={messagesData[3].text}/>
                    <Message inout={messagesData[4].inout} text={messagesData[4].text}/>
                    <Message inout={messagesData[5].inout} text={messagesData[5].text}/>
                    <Message inout={messagesData[6].inout} text={messagesData[6].text}/>
                </div>
            </div>
        </div>)
}
export default Messagebox;