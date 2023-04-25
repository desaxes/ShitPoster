const Nav = () => {
    return (<nav className='nav'>
        <ul className='nav__list'>
            <li className='nav__item'>
                <button className='nav__link'>Profile</button>
            </li>
            <li className='nav__item'>
                <button className='nav__link'>Popular</button>
            </li>
            <li className='nav__item'>
                <button className='nav__link'>News Feed</button>
            </li>
            <li className='nav__item'>
                <button className='nav__link'>Messages</button>
            </li>
            <li className='nav__item'>
                <button className='nav__link'>Post Editor</button>
            </li>
            <li className='nav__item'>
                <button className='nav__link'>Music</button>
            </li>
        </ul>
    </nav>)
}
export default Nav;