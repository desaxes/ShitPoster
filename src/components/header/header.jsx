import s from './header.module.css'
import logo from './../../img/shit_icon.png'
import { NavLink } from 'react-router-dom';
const Header = (props) => {
    let authorize = () => {
        props.authorize()
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
                <NavLink onClick={authorize} className={s.login}>Login</NavLink> : <div className={s.authorize}>
                    <div className={s.flex}>
                        <div className={s.header__avatar}>
                            <img className={s.avatar} 
                            src={props.auth.profileInfo.photos.large===null? logo:props.auth.profileInfo.photos.large} alt='logotip'></img>
                        </div>
                        <div className={s.login}>{props.auth.login}</div>
                        <div className={s.settings}>
                            <button type='button' className={s.set_btn}>
                                ▼
                            </button>
                        </div>
                    </div>
                </div>}
            </div>


        </div>
    </header>)
}
export default Header;