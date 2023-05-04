import s from './contact.module.css'


const Contact = (props) => {
    return (
        <a href='#' className={s.contact_item}>
            <div className={s.contact_avatar}>
                <img src={props.avatar} alt="" />
            </div>
            <div className={s.contact_name}>
                <p>{props.username}</p> 
            </div>
        </a>
    )
}
export default Contact;