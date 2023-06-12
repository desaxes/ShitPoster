import React, { useEffect, useState } from 'react'
import pencil from './../../img/pencil.png'
import pencilColor from './../../img/pencil_color.png'
import s from './profile.module.css'
import { useForm } from 'react-hook-form'
const ProfileStatus = (props) => {

    const { register, reset } = useForm()
    const [editMode, setEditMode] = useState(false)
    const [pencilMode, setPencilMode] = useState(false)
    useEffect(()=>{
        console.log(pencilMode)
    },[pencilMode])
    const changeImage = (mode) => {
        setPencilMode(mode)
    }
    const activateEditMode = (e) => {
        setEditMode(true)
    }
    const deactivateEditMode = (e) => {
        setEditMode(false)
        props.setStatus(props.authId, e.currentTarget.value)
        reset()
    }
    return (
        <div className={s.status_field}>
            {!editMode ?
                <div>
                    <q>{props.status}</q>
                </div> :
                <form>
                    <input {...register('status')} autoFocus onBlur={deactivateEditMode} maxLength={25} className={s.status_input} placeholder={props.status}></input>
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