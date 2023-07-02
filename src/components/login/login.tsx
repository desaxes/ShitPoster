import React from 'react'
import s from "./login.module.css"
import { Navigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Checkbox, HoverCard, PasswordInput, TextInput, Tooltip } from '@mantine/core'
import { IconAlertCircle } from '@tabler/icons-react'
import * as authSelectors from "../../redux/auth-selectors";
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/auth-reducer'
import { AppDispatch } from '../../redux/redux-store'

type FormValues = {
    email: string
    password: string
    checkbox: boolean
    captcha: string
}

const LoginPage: React.FC = () => {
    const id = useSelector(authSelectors.getAuthId)
    const isAuth = useSelector(authSelectors.getIsAuth)
    const authError = useSelector(authSelectors.getAuthError)
    const captchaUrl = useSelector(authSelectors.getCaptchaUrl)
    const dispatch: AppDispatch = useDispatch()

    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ mode: 'onBlur' });
    let onSubmit = (e: any) => {
        dispatch(login(e.email, e.password, e.checkbox, e.captcha))
    }
    if (isAuth === false) {
        return (
            <div className={s.subs}>
                <div className='page-block'>
                    <div className={s.page_inner}>
                        <HoverCard width={280}>
                            <HoverCard.Target>
                                <form onSubmit={handleSubmit(onSubmit)} className={s.form} action="">
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
                                    {captchaUrl != null &&
                                        <div className={s.captcha_box}>
                                            <img className={s.captcha} src={captchaUrl} alt="" />
                                            <TextInput className={`${s.field} ${errors?.captcha && s.field_border}`} type="text" {...register("captcha", { required: "✎ Enter Symbols!" })} />
                                        </div>
                                    }
                                    <div className={s.btn_box}>
                                        {authError &&
                                            <div>
                                                <p className={s.error}>Something is Wrong</p>
                                            </div>
                                        }
                                        <input value={'Confirm'} type="submit" className='quick-posting__btn' />
                                    </div>
                                </form>
                            </HoverCard.Target>
                            <HoverCard.Dropdown m={20}>
                                <p className={s.card_header}>
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
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <Navigate to={"/ShitPoster/profile/" + id} />
        )
    }
}
export default LoginPage