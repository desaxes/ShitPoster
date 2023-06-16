import { useForm } from "react-hook-form"
import { connect } from "react-redux"
import s from './profile.module.css'
const ProfileSettings = (props) => {
    const { register, handleSubmit } = useForm()
    const changeInfo = () => {

    }
    return (
        <div className={s.settings}>
            <div className='page-block'>
                <h1 className={s.set_header}>Profile Settings</h1>
                <div className={s.form_box}>
                    <form onSubmit={handleSubmit(changeInfo)} className={s.set_form} action="">
                        <div className={s.set_form_grid}>
                            LookingForAJob
                            <input className={s.set_input} value={props.profileInfo.lookingForAJob} type="checkbox" name="" id="" />
                            Description
                            <input className={s.set_input} type="text" name="" id="" />
                            Full Name
                            <input className={s.set_input} type="text" name="" id="" />
                            GitHub
                            <input className={s.set_input} type="url" name="" id="" />
                            VK
                            <input className={s.set_input} type="url" name="" id="" />
                            Facebook
                            <input className={s.set_input} type="url" name="" id="" />
                            instagram
                            <input className={s.set_input} type="url" name="" id="" />
                            Twitter
                            <input className={s.set_input} type="url" name="" id="" />
                            Website
                            <input className={s.set_input} type="url" name="" id="" />
                            Youtube
                            <input className={s.set_input} type="url" name="" id="" />
                            MainLink
                            <input className={s.set_input} type="url" name="" id="" />
                        </div>
                        <div className={s.btn_box}>
                            <input value='Change Info' type="submit" className="quick-posting__btn" />
                        </div>
                    </form>
                </div>
            </div >
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        profileInfo: state.profilePage.profileInfo
    }
}
const ProfileSettingsContainer = connect(mapStateToProps, {})(ProfileSettings)
export default ProfileSettingsContainer