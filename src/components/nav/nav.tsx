import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import s from './nav.module.css'
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profile-reducer';
import { compose } from 'redux';
import { appStateType } from '../../redux/redux-store';
type props = {
    id: number
    isAuth: boolean
    getUserProfile: (id: number) => void
}
const Nav: React.FC<props> = (props) => {
    let toMyProfile = () => {
        props.getUserProfile(props.id)
    }
    return (<nav className={s.nav}>
        {props.isAuth ?
            <ul className={s.ul}>
                <li className={s.item}>
                    <button onClick={toMyProfile} className={s.link}><NavLink className={navData => navData.isActive ? s.active : s.link} to={'/profile/' + props.id}>Profile</NavLink></button>
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
                {/* <li className={s.item}>
                    <button className={s.link}><NavLink className={navData => navData.isActive ? s.active : s.link} to='/music'>Music</NavLink></button>
                </li> */}
            </ul>
            :
            <ul className={s.ul}>
                <li className={s.item}>
                    <button className={s.link}><NavLink className={navData => navData.isActive ? s.active : s.link} to='/popular'>Popular</NavLink></button>
                </li>
                <li className={s.item}>
                    <button className={s.link}><NavLink className={navData => navData.isActive ? s.active : s.link} to='/newsfeed'>News Feed</NavLink></button>
                </li>
                {/* <li className={s.item}>
                    <button className={s.link}><NavLink className={navData => navData.isActive ? s.active : s.link} to='/music'>Music</NavLink></button>
                </li> */}
            </ul>}
    </nav>)
}
const mapStateToProps = (state: appStateType) => {
    return {
        id: state.auth.id,
        isAuth: state.auth.isAuth,
    }
}
// const NavContainer = connect(mapStateToProps, { getUserProfile })(Nav)

export default compose<React.ComponentClass>(connect(mapStateToProps, { getUserProfile }))(Nav);