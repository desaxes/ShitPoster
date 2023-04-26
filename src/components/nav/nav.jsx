import s from './nav.module.css'

const Nav = () => {
    return (<nav className={s.nav}>
        <ul className={s.ul}>
            <li className={s.item}>
                <button className={s.link}>Profile</button>
            </li>
            <li className={s.item}>
                <button className={s.link}>Popular</button>
            </li>
            <li className={s.item}>
                <button className={s.link}>News Feed</button>
            </li>
            <li className={s.item}>
                <button className={s.link}>Messages</button>
            </li>
            <li className={s.item}>
                <button className={s.link}>Post Editor</button>
            </li>
            <li className={s.item}>
                <button className={s.link}>Music</button>
            </li>
        </ul>
    </nav>)
}
export default Nav;