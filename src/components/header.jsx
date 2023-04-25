import logo from './../img/shit_icon.png'
const Header = () => {
    return (<header className='header'>
        <div className="header__inner">
            <div className="header__logo">
                <img src={logo} alt='logotip'></img>
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