import React from 'react'
import s from "./login.module.css"
import { NavLink, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { authAPI } from '../../api/api'

const LoginForm = (props) => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()
    let onSubmit = (e) => {
        // debugger
        // authAPI.login(e.email, e.password).then(resultCode => {
        // alert(resultCode)
        // if (resultCode === 0) {
        props.authtorize()
        navigate('/newsfeed')
        // }
        // })

    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.form} action="">
            <h1>Authorization</h1>
            <input required {...register("email")} placeholder='Login' className={s.field} type="text" />
            <input required {...register("password")} placeholder='Password' className={s.field} type="password" />
            <div className={s.btn_box}>
                <input value={'Confirm'} type="submit" className='quick-posting__btn' />
            </div>
            <NavLink className={s.reg}>Registration</NavLink>
        </form>
    )
}
const Login = (props) => {
    return (
        <div className={s.subs}>
            <div className='page-block'>
                <div className={s.page_inner}>
                    <LoginForm authtorize={props.authtorize} />
                </div>
            </div>
        </div>
    )
}
export { Login }