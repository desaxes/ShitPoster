import s from './mes_textbox.module.css'
const Mes_textbox = (props) =>{
    return(<div className={s.text_box}>
        <textarea name="" id="" cols="30" rows="10">

        </textarea>
        <div className='quick-posting-btnbox'>
            <button className='quick-posting__btn'>
                Send
            </button>
        </div>
    </div>)
}
export default Mes_textbox;