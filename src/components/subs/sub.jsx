import React from 'react';
import s from './subs.module.css'
import avatar from './../../img/shit_icon.png'
import { NavLink } from 'react-router-dom';

const Sub = (props) => {
    let onSubClick = (e) => {
        e.preventDefault();
        props.subscribe(props.id);
    }
    return (
        <li className={s.sub}>
            <NavLink to={'/profile/'+props.id} className={s.link_box}>
                <img className={s.avatar} src={props.avatar === null ? avatar : props.avatar} alt="" />
                <div className={s.text}>
                    <p className={s.title}>{props.name}</p>
                    <p className={s.desc}>{props.status === null ? "No Status" : props.status}</p>
                </div>
            </NavLink>
            <div className={s.btn_box}>
                <button onClick={onSubClick} className='quick-posting__btn'>
                    {props.followed ? 'Unsubscribe' : 'Subscribe'}
                </button>
            </div>
        </li>
    )
}
export { Sub }