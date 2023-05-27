import React from 'react';
import s from './subs.module.css'

const Sub = (props) => {
    let onSubClick = (e) =>{
        e.preventDefault();
        props.onSub(props.id);
    }
    return (
        <li className={s.sub}>
            <img className={s.avatar} src="" alt="" />
            <div className={s.text}>
                <p className={s.title}>{props.name}</p>
                <p className={s.desc}>{props.desc}</p>
            </div>
            <div className={s.btn_box}>
                <button onClick={onSubClick} className='quick-posting__btn'>
                    {props.sub ? 'Unsubscribe' : 'Subscribe'}
                </button>
            </div>
        </li>
    )
}
export { Sub }