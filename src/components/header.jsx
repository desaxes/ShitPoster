import s from './header.module.css'
import logo from './../img/shit_icon.png'
const Header = () => {
    return (<header className={s.header}>
        <div className={s.inner}>
            <div>
                <img className={s.logo} src={logo} alt='logotip'></img>
            </div>
            <div className='header__title'>
                ShitPoster
            </div>
            <div className="header__avatar">

            </div>
            <div className="header__settings">

            </div>
        </div>
    </header>)
}
export default Header;