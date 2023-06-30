import React, { useState } from 'react'
import pencil from './../../img/pencil.png'
import pencilColor from './../../img/pencil_color.png'
import s from './profile.module.css'
import { useForm } from 'react-hook-form'
import { AppDispatch } from '../../redux/redux-store'
import { useDispatch } from 'react-redux'
import { setStatus } from '../../redux/profile-reducer'
type props = {
    profileId: number
    authId: number | null
    status: string | null
}
const ProfileStatus: React.FC<props> = (props) => {
    const dispatch: AppDispatch = useDispatch()
    const { register, reset } = useForm()
    const [editMode, setEditMode] = useState(false)
    const [pencilMode, setPencilMode] = useState(false)
    // useEffect(()=>{
    //     console.log(pencilMode)
    // },[pencilMode])
    const changeImage = (mode: boolean) => {
        setPencilMode(mode)
    }
    const activateEditMode = (e: any) => {
        setEditMode(true)
    }
    const deactivateEditMode = (e: any) => {
        setEditMode(false)
        dispatch(setStatus(props.authId === null ? 0 : props.authId, e.currentTarget.value))
        reset()
    }
    return (
        <div className={s.status_field}>
            {!editMode ?
                <div>
                    <q>{props.status}</q>
                </div> :
                <form>
                    <input {...register('status')} autoFocus onBlur={deactivateEditMode} maxLength={25} className={s.status_input}
                        placeholder={props.status === null ? '' : props.status}></input>
                </form>
            }
            {props.profileId === props.authId && <div className={s.pencil_box}>
                <img onClick={activateEditMode}
                    onMouseLeave={(e) => { changeImage(false) }} onMouseEnter={(e) => { changeImage(true) }}
                    src={pencilMode ? pencilColor : pencil}
                    alt="" />
            </div>}
        </div>
    )
}

export default ProfileStatus;