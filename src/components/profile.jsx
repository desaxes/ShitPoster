import profile_head_img from './../img/profile_head.png'
import logo from './../img/shit_icon.png'
const Profile = () => {
    return (
        <div className='profile'>
            <div className='profile__head'>
                <img className='profile__header' src={profile_head_img} alt='profile__header'></img>
                <div className='profile_info-block page-block'>
                    <img className='profile__avatar' src={logo} alt='avatar'></img>
                    <div className='profile_info-inf'>
                        <div className='profile__name'>ShitPoster</div>
                        <div className='profile__desc-block'>
                            <p className='profile__question'>Date of Birth:</p>
                            <p className='profile__answer'>8 february</p>
                        </div>
                        <div className='profile__desc-block'>
                            <p className='profile__question'>City:</p>
                            <p className='profile__answer'>kms</p>
                        </div>
                        <div className='profile__desc-block'>
                            <p className='profile__question'>Rating:</p>
                            <p className='profile__answer'>10000</p>
                        </div>
                        <div className='profile__desc-block'>
                            <p className='profile__question'>Posts Counter:</p>
                            <p className='profile__answer'>300</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='quick-posting page-block'>
                <textarea className='quick-posting-field'>

                </textarea>
                <button className='quick-posting__btn'>Quick Post</button>
            </div>
        </div>
    )
}
export default Profile;