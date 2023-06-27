import { NavLink } from 'react-router-dom';
import React from 'react'
import s from './contact.module.css'


const Contact: React.FC<DialogType> = (props) => {

    return (
        <NavLink to={'/messages/' + props.id}>
            <div className={s.contact_item}>
                {/* <div className={s.contact_avatar}>
                    <img src={props.avatar} alt="" />
                </div> */}
                <div className={s.contact_name}>
                    <p>{props.name}</p>
                </div>
            </div>
        </NavLink>
    )
}
export default Contact;