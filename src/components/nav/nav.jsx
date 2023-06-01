import { NavLink } from 'react-router-dom';
import s from './nav.module.css'
import { connect } from 'react-redux';

const Nav = (props) => {
    return (<nav className={s.nav}>
        {props.auth.isAuth ?
            <ul className={s.ul}>
                <li className={s.item}>
                    <button className={s.link}><NavLink className={navData => navData.isActive ? s.active : s.link} to={'/profile/' + props.auth.id}>Profile</NavLink></button>
                </li>
                <li className={s.item}>
                    <button className={s.link}><NavLink className={navData => navData.isActive ? s.active : s.link} to='/popular'>Popular</NavLink></button>
                </li>
                <li className={s.item}>
                    <button className={s.link}><NavLink className={navData => navData.isActive ? s.active : s.link} to='/newsfeed'>News Feed</NavLink></button>
                </li>
                <li className={s.item}>
                    <button className={s.link}><NavLink className={navData => navData.isActive ? s.active : s.link} to='/subs'>Subs</NavLink></button>
                </li>
                <li className={s.item}>
                    <button className={s.link}><NavLink className={navData => navData.isActive ? s.active : s.link} to='/messages'>Messages</NavLink></button>
                </li>
                <li className={s.item}>
                    <button className={s.link}><NavLink className={navData => navData.isActive ? s.active : s.link} to='/posteditor'>Post Editor</NavLink></button>
                </li>
                <li className={s.item}>
                    <button className={s.link}><NavLink className={navData => navData.isActive ? s.active : s.link} to='/music'>Music</NavLink></button>
                </li>
            </ul> 
            :
            <ul className={s.ul}>
                <li className={s.item}>
                    <button className={s.link}><NavLink className={navData => navData.isActive ? s.active : s.link} to='/popular'>Popular</NavLink></button>
                </li>
                <li className={s.item}>
                    <button className={s.link}><NavLink className={navData => navData.isActive ? s.active : s.link} to='/newsfeed'>News Feed</NavLink></button>
                </li>
                <li className={s.item}>
                    <button className={s.link}><NavLink className={navData => navData.isActive ? s.active : s.link} to='/music'>Music</NavLink></button>
                </li>
            </ul>}
    </nav>)
}
const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }

}
const NavContainer = connect(mapStateToProps, {})(Nav)

export default NavContainer;