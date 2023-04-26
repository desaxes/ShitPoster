import s from './header.module.css'
import logo from './../../img/shit_icon.png'
const Header = () => {
    return (<header className={s.header}>
        <div className={s.inner}>
            <div>
                <img className={s.logo} src={logo} alt='logotip'></img>
            </div>
            <div className={s.title}>
                ShitPoster
            </div>
            <div className={s.header__avatar}>
                <img className={s.avatar} src={logo} alt='logotip'></img>
            </div>
            <div className={s.settings}>
                <button type='button' className={s.set_btn}>
                    ▼
                </button>
            </div>
        </div>
    </header>)
}
export default Header;