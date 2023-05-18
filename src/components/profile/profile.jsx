import React from 'react';
import profile_head_img from './../../img/profile_head.png'
import logo from './../../img/shit_icon.png'
import s from './profile.module.css'
import Post from './../posts/post'
import avatar from './../../img/shit_icon.svg'
import { addPostActionCreator, addUpdatePostTextActionCreator } from '../../redux/dataStorage';



const Profile = (props) => {
    let newPostElement = React.createRef();
    let addQuickPost = (e) => {
        e.preventDefault();
        props.dispatch(addPostActionCreator('Shitposter',avatar,'Now','0','0'))
    }
    let posts = props.state.profilePage.postData.map(p => <Post name={p.name} avatar={p.avatar} time={p.time}
        postimage={p.postimage} posttext={p.posttext} com_count={p.com_count} like_count={p.like_count} />
    )

    let onPostChange =()=>{
        let text = newPostElement.current.value;
        props.dispatch(addUpdatePostTextActionCreator(text));
    }
    return (
        <div className={s.profile}>
            <div className={s.head}>
                <img className={s.header} src={profile_head_img} alt='profile__header'></img>
                <div className='page-block'>
                    <div className={s.info_block}>
                        <img className={s.avatar} src={logo} alt='avatar'></img>
                        <div className={s.info_inf}>
                            <div className={s.name}>ShitPoster</div>
                            <div className={s.desc_block}>
                                <p className={s.question}>Date of Birth:</p>
                                <p className={s.answer}>8 february</p>
                            </div>
                            <div className={s.desc_block}>
                                <p className={s.question}>City:</p>
                                <p className={s.answer}>kms</p>
                            </div>
                            <div className={s.desc_block}>
                                <p className={s.question}>Rating:</p>
                                <p className={s.answer}>10000</p>
                            </div>
                            <div className={s.desc_block}>
                                <p className={s.question}>Posts Counter:</p>
                                <p className={s.answer}>3</p>
                            </div>
                        </div>
                        <div className={s.btn_block}>
                            <div className='quick-posting-btnbox'>
                                <button className='quick-posting__btn'>Send Message</button>
                            </div>
                            <div className='quick-posting-btnbox'>
                                <button className='quick-posting__btn'>Subscribe</button>
                            </div>
                            <div className='quick-posting-btnbox'>
                                <button className='quick-posting__btn'>Show Subs</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <form className='quick-posting page-block'>
                <textarea onChange={onPostChange} ref={newPostElement} placeholder='Enter Text' className='quick-posting-field' value={props.state.profilePage.newPostText}>

                </textarea>
                <div className='quick-posting-btnbox'>
                    <button onClick={addQuickPost} type='submit' className='quick-posting__btn'>Quick Post</button>
                </div>
            </form>
            <div className="page-block">
                {posts}
            </div>
        </div>
    )
}
export default Profile;