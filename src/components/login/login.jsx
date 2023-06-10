import React, { useState } from 'react'
import s from "./login.module.css"
import { NavLink, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const LoginForm = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onBlur' });
    const navigate = useNavigate()
    let onSubmit = (e) => {
        props.login(e.email, e.password, e.checkbox)
    }
    if (props.auth.isAuth === false) {
        return (
            <form {...register("form")} onSubmit={handleSubmit(onSubmit)} className={s.form} action="">
                <h1>Authorization</h1>
                <div className={s.input_box}>
                    {errors?.email &&
                        <div>
                            <p className={s.error}>{errors?.email?.message}</p>
                        </div>}
                    <input {...register("email", { required: "✎ Enter your Email!" })}
                        placeholder={'Login'} className={`${s.field} ${errors?.email && s.field_border}`} />
                </div>
                <div className={s.input_box}>
                    {errors?.password &&
                        <div>
                            <p className={s.error}>{errors?.password?.message}</p>
                        </div>}
                    <input type='password' {...register("password", { required: "✎ Enter your Password! " })}
                        placeholder={'Password'} className={`${s.field} ${errors?.password && s.field_border}`} />
                </div>
                <div className={s.checkbox_box}>
                    <p className={s.remember}>Remember Me</p>
                    <input type='checkbox' {...register("checkbox")}
                        className={s.checkbox} />
                </div>
                <div className={s.btn_box}>
                    {props.auth.authError &&
                        <div>
                            <p className={s.error}>Wrong Password or Login</p>
                        </div>}
                    <input value={'Confirm'} type="submit" className='quick-posting__btn' />
                </div>
                <NavLink className={s.reg}>Registration</NavLink>
            </form>
        )
    }
    else {
        return (
            navigate("/profile/" + props.auth.id)
        )
    }
}
const Login = (props) => {
    return (
        <div className={s.subs}>
            <div className='page-block'>
                <div className={s.page_inner}>
                    <LoginForm {...props} />
                </div>
            </div>
        </div>
    )
}
export { Login }