import s from './mes_textbox.module.css'
const Mes_textbox = (props) =>{
    return(<form className={s.text_box}>
        <textarea required name="" id="" cols="30" rows="10">

        </textarea>
        <div className='quick-posting-btnbox'>
            <button type='submit' className='quick-posting__btn'>
                Send
            </button>
        </div>
    </form>)
}
export default Mes_textbox;