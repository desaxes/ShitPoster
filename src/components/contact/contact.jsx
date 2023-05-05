import { NavLink } from 'react-router-dom';
import s from './contact.module.css'


const Contact = (props) => {

    return (
        <NavLink to={props.dialogId}>
            <div className={s.contact_item}>
                {/* <div className={s.contact_avatar}>
                    <img src={props.avatar} alt="" />
                </div> */}
                <div className={s.contact_name}>
                    <p>{props.username}</p> 
                </div>
            </div>
        </NavLink>
    )
}
export default Contact;