import React from 'react'
import s from "./login.module.css"
import { NavLink } from 'react-router-dom'
const Login = (props) => {
    let onSubmit = (e) => {
        props.authtorize()
    }
    return (
        <div className={s.subs}>
            <div className='page-block'>
                <div className={s.page_inner}>
                    <form className={s.form} action="">
                        <h1>Authorization</h1>
                        <input required placeholder='Login' className={s.field} type="text" name="" id="" />
                        <input required placeholder='Password' className={s.field} type="text" name="" id="" />
                        <div className={s.btn_box}>
                            <NavLink to={'/newsfeed'} onClick={(e)=>{onSubmit(e)}} className={`${'quick-posting__btn'} ${s.link} `}>Submit</NavLink>
                        </div>
                        <NavLink className={s.reg}>Registration</NavLink>
                    </form>
                </div>
            </div>
        </div>
    )
}
export { Login }