import { useForm } from "react-hook-form"
import { connect } from "react-redux"
import s from './profile.module.css'
import { changeProfileInfo, getUserProfile } from './../../redux/profile-reducer'
import { changeAuthInfo } from "../../redux/auth-reducer.ts"
import { useEffect, useState } from "react"
const ProfileSettings = (props) => {
    useEffect(() => {
        props.getUserProfile(props.authId)
    }, [])
    const [settingSuccess, setSettingSuccess] = useState(false)
    const { register, handleSubmit } = useForm({
        defaultValues:{
            about:props.profileInfo.aboutMe, 
            job:props.profileInfo.lookingForAJob, 
            desc:props.profileInfo.lookingForAJobDescription, 
            name:props.profileInfo.fullName, 
            git:props.profileInfo.contacts.github, 
            vk:props.profileInfo.contacts.vk, 
            fb:props.profileInfo.contacts.facebook, 
            inst:props.profileInfo.contacts.instagram, 
            twit:props.profileInfo.contacts.twitter, 
            web:props.profileInfo.contacts.website, 
            yt:props.profileInfo.contacts.youtube, 
            ml:props.profileInfo.contacts.mainLink
        }
    })
    const changeInfo = (e) => {
        let result = props.changeProfileInfo(props.authId, e.about, e.job, e.desc, e.name, e.git, e.vk, e.fb, e.inst, e.twit, e.web, e.yt, e.ml)
        props.changeAuthInfo(props.authId)
        result.then(setSettingSuccess(true)).then(setTimeout(() => setSettingSuccess(false), 2000))
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
                            <input  required {...register('name')} className={s.set_input} type="text" />
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
const mapStateToProps = (state) => {
    return {
        profileInfo: state.profilePage.profileInfo,
        authId: state.auth.id
    }
}
const ProfileSettingsContainer = connect(mapStateToProps, { changeProfileInfo, getUserProfile, changeAuthInfo })(ProfileSettings)
export default ProfileSettingsContainer