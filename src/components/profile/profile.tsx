import React from 'react';
import profile_head_img from './../../img/profile_head.png'
import logo from './../../img/shit_icon.png'
import s from './profile.module.css'
import Post from '../posts/post.tsx'
import ProfileStatus from './profile-status';
import { useForm } from 'react-hook-form';
import { Accordion, Button, FileButton, Tabs, Textarea } from '@mantine/core';

type props = {
    posts: postType[]
    profileInfo: profileInfoType
    userId: number
    subscribeProgress: number[]
    status: string
    authId: number
    authPhoto: string
    login: string
    addPost: (id: number, login: string, photo: string, image: string, time: string, text: string, likes: number) => void
    getUserProfile: (userId: string) => void
    following: () => void
    setStatus: () => void
    setPhoto: (photo: string) => void
    changeAuthPhoto: (id: number) => void
}
type FormValues = {
    postText: string
}

const Profile: React.FC<props> = (props) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({ mode: 'onSubmit' });
    let sortedPosts = [...props.posts].reverse().filter(e => e.userId === props.profileInfo.userId)

    let posts = sortedPosts.map(p => <Post postId={p.userId} key={p.id} id={p.id} name={p.name} avatar={p.avatar} time={p.time}
        postimage={p.postimage} posttext={p.posttext} like_count={p.like_count} comments={p.comments} />)
    let rait = 0
    for (let i = 0; i < posts.length; i++) {
        const element = posts[i];
        rait = rait + element.props.like_count
    }
    let onSubmit = (e: any) => {
        props.addPost(props.authId, props.login, props.authPhoto, '', 'Now', e.postText, 0)
        reset()
    }
    const setPhoto = (e: any) => {
        // props.setPhoto(e.target.files[0])
        props.setPhoto(e)
        props.changeAuthPhoto(props.authId)
    }
    return (
        <div className={s.profile}>
            <div className={s.head}>
                <img className={s.header} src={profile_head_img} alt='profile__header'></img>
                <div className='page-block'>
                    <Tabs defaultValue='Profile'>
                        <Tabs.List grow>
                            <Tabs.Tab value='Profile'>Profile</Tabs.Tab>
                            <Tabs.Tab value='About'>About</Tabs.Tab>
                            <Tabs.Tab value='Subs'>Subs</Tabs.Tab>
                        </Tabs.List>
                        <Tabs.Panel pt={30} value='Profile'>
                            <div className={s.info_block}>
                                <div className={s.avatar_box}>
                                    <img className={s.avatar} src={props.profileInfo.photos.large === null ? logo : props.profileInfo.photos.large} alt='avatar'></img>
                                    {props.profileInfo.userId === props.authId &&
                                        <div className={s.photo_btn}>
                                            <FileButton onChange={setPhoto} accept="image/png,image/jpeg">
                                                {(props) => <Button color='red' variant="subtle" size='s' compact {...props}>💾</Button>}
                                            </FileButton>
                                        </div>
                                    }
                                </div>
                                <div className={s.info_inf}>
                                    <div className={s.name}>{props.profileInfo.fullName}</div>
                                    {<ProfileStatus setStatus={props.setStatus} profileId={props.profileInfo.userId}
                                        authId={props.authId} status={props.status} />}
                                    <div className={s.desc_block}>
                                        <p className={s.question}>Rating:</p>
                                        <p className={s.answer}>{rait}</p>
                                    </div>
                                    <div className={s.desc_block}>
                                        <p className={s.question}>Posts Counter:</p>
                                        <p className={s.answer}>{posts.length}</p>
                                    </div>
                                </div>
                                {props.profileInfo.userId != props.authId && <div className={s.btn_block}>
                                    <div className='quick-posting-btnbox'>
                                        <button className='quick-posting__btn'>Send Message</button>
                                    </div>
                                    <div className='quick-posting-btnbox'>
                                        <button
                                            // disabled={props.subscribeProgress.some(id => id === props.profileInfo.userId)} onClick={onSubClick} 
                                            className={`${'quick-posting__btn'} ${props.profileInfo.followed && s.f_color}`}>
                                            {props.profileInfo.followed ? 'Unsubscribe' : 'Subscribe'}</button>
                                    </div>
                                    <div className='quick-posting-btnbox'>
                                        <button className='quick-posting__btn'>Show Subs</button>
                                    </div>
                                </div>}
                            </div>
                        </Tabs.Panel>
                        <Tabs.Panel pt={30} value='About'>
                            <p className={s.about}>Full Name - {props.profileInfo.fullName === null ? '' : props.profileInfo.fullName}</p>
                            {props.profileInfo.aboutMe === null ? <p className={s.about}>"There could be a description of me here"</p> : <p className={s.about}> {props.profileInfo.aboutMe}</p>}
                            <p className={s.about}>Looking For A Job - {props.profileInfo.lookingForAJob === true ? 'Yes' : 'No'}</p>
                            {props.profileInfo.lookingForAJobDescription != null && <p className={s.about}>{props.profileInfo.lookingForAJobDescription}</p>}
                            <div className={s.accordion}>
                                <h1 className={s.accordion_header}>Socials</h1>
                                <div className={s.accordion_box}>
                                    <Accordion defaultValue="GitHub">
                                        <Accordion.Item value="GitHub">
                                            <Accordion.Control>GitHub</Accordion.Control>
                                            <Accordion.Panel>{props.profileInfo.contacts.github}</Accordion.Panel>
                                        </Accordion.Item>
                                        <Accordion.Item value="VK">
                                            <Accordion.Control>VK</Accordion.Control>
                                            <Accordion.Panel>{props.profileInfo.contacts.vk}</Accordion.Panel>
                                        </Accordion.Item>
                                        <Accordion.Item value="Facebook">
                                            <Accordion.Control>Facebook</Accordion.Control>
                                            <Accordion.Panel>{props.profileInfo.contacts.facebook}</Accordion.Panel>
                                        </Accordion.Item>
                                        <Accordion.Item value="Instagram">
                                            <Accordion.Control>Instagram</Accordion.Control>
                                            <Accordion.Panel>{props.profileInfo.contacts.instagram}</Accordion.Panel>
                                        </Accordion.Item>
                                        <Accordion.Item value="Twitter">
                                            <Accordion.Control>Twitter</Accordion.Control>
                                            <Accordion.Panel>{props.profileInfo.contacts.twitter}</Accordion.Panel>
                                        </Accordion.Item>
                                        <Accordion.Item value="Website">
                                            <Accordion.Control>Website</Accordion.Control>
                                            <Accordion.Panel>{props.profileInfo.contacts.website}</Accordion.Panel>
                                        </Accordion.Item>
                                        <Accordion.Item value="Youtube">
                                            <Accordion.Control>Youtube</Accordion.Control>
                                            <Accordion.Panel>{props.profileInfo.contacts.youtube}</Accordion.Panel>
                                        </Accordion.Item>
                                        <Accordion.Item value="MainLink">
                                            <Accordion.Control>MainLink</Accordion.Control>
                                            <Accordion.Panel>{props.profileInfo.contacts.mainLink}</Accordion.Panel>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </div>
                        </Tabs.Panel>
                        <Tabs.Panel pt={30} value='Subs'>
                        </Tabs.Panel>
                    </Tabs>
                </div>
            </div>
            {props.profileInfo.userId === props.authId &&
                <form onSubmit={handleSubmit(onSubmit)} className='quick-posting page-block'>
                    {
                        <Textarea error={errors?.postText?.message} label='Quick Post' size='xl' {...register("postText", { required: "✎ You must enter the text ⇒", minLength: { value: 10, message: "Min length is 10 symbols" } })} placeholder='Enter Text'
                            className='quick-posting-field' />}
                    <div className='quick-posting-btnbox'>
                        <input value={'Post'} type='submit' className='quick-posting__btn' />
                    </div>
                </form>}
            <div className="page-block">
                {posts}
            </div>
        </div>
    )
}
export default Profile;


// const ProfilePage = (props) => {
//     const userid = useParams()
//     useEffect(() => {
//         // if (!userid.id) {
//         //     userid.id = props.userId;
//         // }
//         props.getUserProfile(userid.id);
//     })
//     return (<Profile {...props} />)
// }