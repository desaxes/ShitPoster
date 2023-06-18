import React, { useState } from 'react'
import s from "./login.module.css"
import { NavLink, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Checkbox, HoverCard, PasswordInput, TextInput, Tooltip } from '@mantine/core'
import { IconAlertCircle } from '@tabler/icons-react'

const LoginForm = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onBlur' });
    const navigate = useNavigate()
    let onSubmit = (e) => {
        props.login(e.email, e.password, e.checkbox, e.captcha)
    }
    if (props.auth.isAuth === false) {
        return (
            <HoverCard width={280}>
                <HoverCard.Target>
                    <form {...register("form")} onSubmit={handleSubmit(onSubmit)} className={s.form} action="">
                        <h1>Authorization</h1>
                        <div className={s.input_box}>
                            <TextInput type='email' size='lg' radius='md' icon='@' {...register("email", { required: "✎ Enter your Email!" })}
                                placeholder={'Email'} className={`${s.field} ${errors?.email && s.field_border}`}
                                rightSection={
                                    <Tooltip label="Incorrect Email" position="top-end" withArrow>
                                        <div>
                                            {errors?.email && <IconAlertCircle color='red' size="1rem" style={{ display: 'block', opacity: 0.5 }} />}
                                        </div>
                                    </Tooltip>} />
                        </div>
                        <div className={s.input_box}>
                            <PasswordInput size='lg' radius='md' icon="*" {...register("password", { required: "✎ Enter your Password! " })}
                                placeholder={'Password'} className={`${s.field} ${errors?.password && s.field_border}`}
                            />
                        </div>
                        <Checkbox color='indigo' radius='lg' size='md' label='Remember Me' {...register("checkbox")} className={s.checkbox_box}>
                            {/* <input type='checkbox' {...register("checkbox")}
                                className={s.checkbox} /> */}
                        </Checkbox>
                        {props.auth.captchaUrl != null &&
                            <div className={s.captcha_box}>
                                <img className={s.captcha} src={props.auth.captchaUrl} alt="" />
                                <TextInput className={`${s.field} ${errors?.captcha && s.field_border}`} type="text" {...register("captcha", { required: "✎ Enter Symbols!" })} />
                            </div>
                        }
                        <div className={s.btn_box}>
                            {props.auth.authError &&
                                <div>
                                    <p className={s.error}>Something is Wrong</p>
                                </div>
                            }
                            <input value={'Confirm'} type="submit" className='quick-posting__btn' />
                        </div>
                    </form>
                </HoverCard.Target>
                <HoverCard.Dropdown m={20}>
                    <p className={s.card_header} size="sm">
                        "Test Account"
                        <p className={s.card_data}>
                            Email: free@samuraijs.com
                        </p>
                        <p className={s.card_data}>
                            Password: free
                        </p>
                    </p>
                </HoverCard.Dropdown>
            </HoverCard>
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