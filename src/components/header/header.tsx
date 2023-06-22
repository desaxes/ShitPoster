import s from './header.module.css'
import React from 'react'
import logo from './../../img/shit_icon.png'
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
type props = {
    id: number
    isAuth: boolean
    logout: () => void
    login: string
    photo: string
}
const Header: React.FC<props> = (props) => {
    const [menuSwitch, рunchSwitch] = useState(false)
    const navigate = useNavigate()
    const showUserMenu = () => {
        if (menuSwitch === false) {
            рunchSwitch(true)
        }
        else {
            рunchSwitch(false)
        }
    }
    const toProfile = () => {
        navigate("/profile/" + props.id)
    }
    const toSettings = () => {
        navigate("/settings")
    }
    const exitProfile = () => {
        props.logout();
        navigate("/login")
        рunchSwitch(false)
    }
    return (
        <header className={s.header}>
            <div className={s.inner}>
                <div>
                    <img className={s.logo} src={logo} alt='logotip'></img>
                </div>
                <NavLink to="/newsfeed" className={s.title}>
                    ShitPoster
                </NavLink>
                <div className={s.flex}>{props.isAuth === false ?
                    <NavLink to="/login" className={s.login}>Login</NavLink> : <div className={s.authorize}>
                        <div className={s.flex}>
                            <div className={s.header__avatar}>
                                <img className={s.avatar}
                                    src={props.photo === null ? logo : props.photo} alt='logotip'></img>
                            </div>
                            <div className={s.login}>{props.login}</div>
                            <div className={s.settings}>
                                <button onClick={showUserMenu} type='button' className={s.set_btn}>
                                    {menuSwitch ? '◄' : '▼'}
                                </button>
                                {menuSwitch &&
                                    <div className={s.sMenu}>
                                        <div onClick={toProfile} className={s.btn_box}>
                                            <div className='quick-posting__btn'>Profile</div>
                                        </div>
                                        <div onClick={toSettings} className={s.btn_box}>
                                            <div className='quick-posting__btn'>Settings</div>
                                        </div>
                                        <div onClick={exitProfile} className={s.btn_box}>
                                            <div className='quick-posting__btn'>Exit</div>
                                        </div>
                                    </div>}
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        </header>)
}
export default Header;