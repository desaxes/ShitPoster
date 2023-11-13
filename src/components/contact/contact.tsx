import { NavLink } from 'react-router-dom';
import React from 'react'
import s from './contact.module.css'
import { AppDispatch } from '../../redux/redux-store';
import { useDispatch } from 'react-redux';
import { dialogActions } from '../../redux/messages-reducer';
import logo from './../../img/shit_icon.png'

const Contact: React.FC<DialogType> = (props) => {
    const dispatch: AppDispatch = useDispatch()
    let chooseDialog = () => {
        dispatch(dialogActions.currentDialog(props.id))
    }
    return (
        <NavLink onClick={chooseDialog} to={'/ShitPoster/messages/' + props.id}>
            <div className={s.contact_item}>
                <div className={s.contact_avatar}>
                    {props.avatar === '' ? < img src={logo} alt="" /> : < img src={props.avatar} alt="" />}
                </div>
                <div className={s.contact_name}>
                    <p>{props.name}</p>
                </div>
            </div>
        </NavLink>
    )
}
export default Contact;