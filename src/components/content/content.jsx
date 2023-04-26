import Profile from '../profile/profile'
import s from './content.module.css'
const Content = () => {
    return (<section className={s.content}>
        <div className='container'>
            <div className='content__inner'>
                <Profile />
            </div>
        </div>
    </section>)
}
export default Content;