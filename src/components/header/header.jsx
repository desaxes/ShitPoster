import s from './header.module.css'
import logo from './../../img/shit_icon.png'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
const Header = (props) => {
    const [menuSwitch, рunchSwitch] = useState(false)
    const showUserMenu = () => {
        if (menuSwitch === false) {
            рunchSwitch(true)
        }
        else {
            рunchSwitch(false)
        }
        console.log(menuSwitch)
    }
    return (<header className={s.header}>
        <div className={s.inner}>
            <div>
                <img className={s.logo} src={logo} alt='logotip'></img>
            </div>
            <NavLink to="/newsfeed" className={s.title}>
                ShitPoster
            </NavLink>
            <div className={s.flex}>{props.auth.isAuth === false ?
                <NavLink to="/login" className={s.login}>Login</NavLink> : <div className={s.authorize}>
                    <div className={s.flex}>
                        <div className={s.header__avatar}>
                            <img className={s.avatar}
                                src={props.auth.profileInfo.photos.large === null ? logo : props.auth.profileInfo.photos.large} alt='logotip'></img>
                        </div>
                        <div className={s.login}>{props.auth.login}</div>
                        <div className={s.settings}>
                            <button onClick={showUserMenu} type='button' className={s.set_btn}>
                                ▼
                            </button>
                            {menuSwitch &&
                                <div className={s.sMenu}>
                                    <div className={s.btn_box}>
                                        <div className='quick-posting__btn'>Profile</div>
                                    </div>
                                    <div className={s.btn_box}>
                                        <div className='quick-posting__btn'>Settings</div>
                                    </div>
                                    <div className={s.btn_box}>
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