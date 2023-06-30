import React from 'react'
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import s from './profile.module.css'
import { changeProfileInfo } from '../../redux/profile-reducer.ts'
import { changeAuthInfo } from "../../redux/auth-reducer.ts"
import { useState } from "react"
import { AppDispatch } from '../../redux/redux-store.ts'
import * as authSelectors from '../../redux/auth-selectors.ts'
const ProfileSettings: React.FC = (props) => {
    const profileInfo = useSelector(authSelectors.getAuthProfileInfo)
    const authId = useSelector(authSelectors.getAuthId)
    const dispatch: AppDispatch = useDispatch()

    const [settingSuccess, setSettingSuccess] = useState(false)
    const { register, handleSubmit } = useForm({
        defaultValues: {
            about: profileInfo.aboutMe,
            job: profileInfo.lookingForAJob,
            desc: profileInfo.lookingForAJobDescription,
            name: profileInfo.fullName,
            git: profileInfo.contacts.github,
            vk: profileInfo.contacts.vk,
            fb: profileInfo.contacts.facebook,
            inst: profileInfo.contacts.instagram,
            twit: profileInfo.contacts.twitter,
            web: profileInfo.contacts.website,
            yt: profileInfo.contacts.youtube,
            ml: profileInfo.contacts.mainLink
        }
    })
    const changeInfo = (e: any) => {
        dispatch(changeProfileInfo(authId === null ? 0 : authId, e.about, e.job,
            e.desc, e.name, e.git, e.vk, e.fb, e.inst, e.twit, e.web, e.yt, e.ml))
        dispatch(changeAuthInfo(authId === null ? 0 : authId))
        setSettingSuccess(true)
        setTimeout(() => setSettingSuccess(false), 2000)
    }
    return (
        <div className={s.settings}>
            <div className='page-block'>
                <h1 className={s.set_header}>Profile Settings</h1>
                <div className={s.form_box}>
                    <form onSubmit={handleSubmit(changeInfo)} className={s.set_form} action="">
                        <div className={s.set_form_grid}>
                            • About Me*
                            <input required {...register('about')} className={`${s.set_input}`} type="text" />
                            • LookingForAJob
                            <input  {...register('job')} className={`${s.set_input} ${s.check}`} type="checkbox" />
                            • Description
                            <input  {...register('desc')} className={s.set_input} type="text" />
                            •  Full Name*
                            <input required {...register('name')} className={s.set_input} type="text" />
                            • GitHub
                            <input {...register('git')} className={s.set_input} type="url" />
                            • VK
                            <input {...register('vk')} className={s.set_input} type="url" />
                            •  Facebook
                            <input {...register('fb')} className={s.set_input} type="url" />
                            •  Instagram
                            <input {...register('inst')} className={s.set_input} type="url" />
                            •   Twitter
                            <input {...register('twit')} className={s.set_input} type="url" />
                            • Website
                            <input {...register('web')} className={s.set_input} type="url" />
                            •  Youtube
                            <input {...register('yt')} className={s.set_input} type="url" />
                            •  MainLink
                            <input {...register('ml')} className={s.set_input} type="url" />
                        </div>
                        <div className={s.btn_box}>
                            <input value={settingSuccess ? 'Success ✔' : 'Change Info'} type="submit" className="quick-posting__btn" />
                        </div>
                    </form>
                </div>
            </div >
        </div>
    )
}

export default ProfileSettings