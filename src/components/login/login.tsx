import React from 'react'
import s from "./login.module.css"
import { Navigate } from 'react-router-dom'
import { Resolver, useForm } from 'react-hook-form'
import { Checkbox, HoverCard, PasswordInput, TextInput, Tooltip } from '@mantine/core'
import { IconAlertCircle } from '@tabler/icons-react'

type FormValues = {
    email: string
    password: string
    checkbox: boolean
    captcha: string
}

const Login: React.FC<loginProps> = (props) => {
    return (
        <div className={s.subs}>
            <div className='page-block'>
                <div className={s.page_inner}>
                    <LoginForm id={props.id} isAuth={props.isAuth} login={props.login} authtorize={props.authtorize} captchaUrl={props.captchaUrl}
                        authError={props.authError} authId={props.authId} />
                </div>
            </div>
        </div>
    )
}
const LoginForm: React.FC<loginProps> = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ mode: 'onBlur' });
    let onSubmit = (e: any) => {
        props.login(e.email, e.password, e.checkbox, e.captcha)
    }
    if (props.isAuth === false) {
        return (
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
                        {props.captchaUrl != null &&
                            <div className={s.captcha_box}>
                                <img className={s.captcha} src={props.captchaUrl} alt="" />
                                <TextInput className={`${s.field} ${errors?.captcha && s.field_border}`} type="text" {...register("captcha", { required: "✎ Enter Symbols!" })} />
                            </div>
                        }
                        <div className={s.btn_box}>
                            {props.authError &&
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
        )
    }
    else {
        return (
            <Navigate to={"/profile/" + props.id} />
        )
    }
}


export { Login }