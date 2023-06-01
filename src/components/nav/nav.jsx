import { NavLink } from 'react-router-dom';
import s from './nav.module.css'

const Nav = () => {
    return (<nav className={s.nav}>
        <ul className={s.ul}>
            <li className={s.item}>
                <button className={s.link}><NavLink className={ navData => navData.isActive ? s.active : s.link} to='/profile/29179'>Profile</NavLink></button>
            </li>
            <li className={s.item}>
                <button className={s.link}><NavLink className={ navData => navData.isActive ? s.active : s.link} to='/popular'>Popular</NavLink></button>
            </li>
            <li className={s.item}>
                <button className={s.link}><NavLink className={ navData => navData.isActive ? s.active : s.link} to='/newsfeed'>News Feed</NavLink></button>
            </li>
            <li className={s.item}>
                <button className={s.link}><NavLink className={ navData => navData.isActive ? s.active : s.link} to='/subs'>Subs</NavLink></button>
            </li>
            <li className={s.item}>
                <button className={s.link}><NavLink className={ navData => navData.isActive ? s.active : s.link} to='/messages'>Messages</NavLink></button>
            </li>
            <li className={s.item}>
                <button className={s.link}><NavLink className={ navData => navData.isActive ? s.active : s.link} to='/posteditor'>Post Editor</NavLink></button>
            </li>
            <li className={s.item}>
                <button className={s.link}><NavLink className={ navData => navData.isActive ? s.active : s.link} to='/music'>Music</NavLink></button>
            </li>
        </ul>
    </nav>)
}
export default Nav;