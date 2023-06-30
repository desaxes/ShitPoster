import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import s from './nav.module.css'
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profile-reducer';
import { compose } from 'redux';
import { appStateType } from '../../redux/redux-store';
import { ScrollArea } from "@mantine/core";
import logo from './../../img/shit_icon.png'
type props = {
    id: number
    isAuth: boolean
    subs: userItemType[]
    getUserProfile: (id: number) => void
}
const Nav: React.FC<props> = (props) => {
    let toMyProfile = () => {
        props.getUserProfile(props.id)
    }
    const navigate = useNavigate()
    const toProfile = (id: number) => {
        navigate('profile/' + id)
    }
    let subs = props.subs.map(p =>
        <div onClick={() => { toProfile(p.id) }} className={s.sub_box}><img className={s.sub_avatar} src={p.photos.small === null ? logo : p.photos.small} alt="" /> <p className={s.name}>{p.name}</p></div>)
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
                    <button className={s.link}><NavLink className={navData => navData.isActive ? s.active : s.link} to='/subs?page=1'>Subs</NavLink></button>
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
        {props.isAuth && <ScrollArea type='hover' h={400} className={s.sub_list}>{subs}</ScrollArea>}
    </nav>)
}
const mapStateToProps = (state: appStateType) => {
    return {
        id: state.auth.id,
        isAuth: state.auth.isAuth,
        subs: state.auth.subUsers
    }
}
// const NavContainer = connect(mapStateToProps, { getUserProfile })(Nav)

export default compose<React.ComponentClass>(connect(mapStateToProps, { getUserProfile }))(Nav);