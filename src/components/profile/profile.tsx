import React, { useEffect, useState } from 'react';
import profile_head_img from './../../img/profile_head.png'
import logo from './../../img/shit_icon.png'
import s from './profile.module.css'
import Post from '../posts/post.tsx'
import ProfileStatus from './profile-status';
import { useForm } from 'react-hook-form';
import { Accordion, Button, FileButton, Flex, Tabs, Textarea, Text } from '@mantine/core';
import { following } from '../../redux/subs-reducer.ts';
import { useDispatch, useSelector } from 'react-redux';
import * as profileSelectors from '../../redux/profile-selectors.ts'
import * as authSelectors from '../../redux/auth-selectors.ts'
import * as dialogSelectors from '../../redux/messages-selectors.ts'
import { dialogActions } from '../../redux/messages-reducer';
import * as newsSelectors from '../../redux/news-selectors.ts'
import { useNavigate, useParams } from 'react-router-dom';
import { AppDispatch } from '../../redux/redux-store.ts';
import { getUserProfile, setPhoto } from '../../redux/profile-reducer.ts';
import { addPost } from '../../redux/news-reducer.ts';
import { changeAuthPhoto } from '../../redux/auth-reducer.ts';
import { AuthRedirect } from '../common_components/hoc-components.tsx';
import { compose } from 'redux';
import { scrollUp } from '../common_components/functions.ts';

type FormValues = {
    postText: string
}
const ProfilePage: React.FC = (props) => {
    const userid = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        scrollUp()
    }, [])
    useEffect(() => {
        if (!userid.id) {
            navigate('/ShitPoster/profile/' + authId)
        } else {
            dispatch(getUserProfile(parseInt(userid.id)));
        }
    }, [userid.id])
    useEffect(() => { localStorage.postImage = '' }, [])
    const [loadImage, setLoadImage] = useState<boolean>(false)
    const postData = useSelector(profileSelectors.getPosts)
    const status = useSelector(profileSelectors.getStatus)
    const profileInfo = useSelector(profileSelectors.getProfileInfo)
    const authId = useSelector(authSelectors.getAuthId)
    const authPhoto = useSelector(authSelectors.getAuthPhoto)
    const login = useSelector(authSelectors.getLogin)
    const followed = useSelector(profileSelectors.getFollowedInfo)
    const dispatch: AppDispatch = useDispatch()
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({ mode: 'onSubmit' });
    let sortedPosts = [...postData].reverse().filter(e => e.userId === profileInfo.userId)

    let posts = sortedPosts.map(p => <Post postId={p.userId} key={p.id} userId={p.userId} id={p.id} name={p.name} avatar={p.avatar} time={p.time}
        postimage={p.postimage} posttext={p.posttext} like_count={p.like_count} comments={p.comments} />)
    let rait = 0
    for (let i = 0; i < posts.length; i++) {
        const element = posts[i];
        rait = rait + element.props.like_count
    }
    let onSubmit = (e: any) => {
        dispatch(addPost(authId, login === null ? '' : login, authPhoto === null ? logo : authPhoto, localStorage.getItem('postImage'), 'Now', e.postText, 0))
        reset()
        localStorage.postImage = ''
        setLoadImage(false)
    }
    const setUserPhoto = (e: any) => {
        // props.setPhoto(e.target.files[0])
        dispatch(setPhoto(e))
        dispatch(changeAuthPhoto(authId === null ? 0 : authId))
    }
    const followUser = () => {
        dispatch(following(followed, profileInfo.userId))
        dispatch(getUserProfile(profileInfo.userId))
    }
    const setPostImage = (e: any) => {
        const image = URL.createObjectURL(e)
        // localStorage.setItem('postImage', image)
        localStorage.postImage = image
        setLoadImage(true)
        console.log(localStorage.postImage)
    }

    const dialogs = useSelector(dialogSelectors.getDialogsData)
    const openDialog = () => {
        if (dialogs.some(e => e.id === profileInfo.userId.toString())) {
            navigate('/ShitPoster/messages/' + profileInfo.userId)
        }
        else {
            dispatch(dialogActions.createDialog(profileInfo.userId.toString(), profileInfo.fullName != null ? profileInfo.fullName : 'Unknown', profileInfo.photos.small != null ? profileInfo.photos.small : ''))
            navigate('/ShitPoster/messages/' + profileInfo.userId)
        }
    }

    console.log(localStorage.postImage)
    return (
        <div className={s.profile}>
            <div className={s.head}>
                <img className={s.header} src={profile_head_img} alt='profile__header'></img>
                <div className='page-block'>
                    <Tabs defaultValue='Profile'>
                        <Tabs.List grow>
                            <Tabs.Tab value='Profile'>Profile</Tabs.Tab>
                            <Tabs.Tab value='About'>About</Tabs.Tab>
                        </Tabs.List>
                        <Tabs.Panel pt={30} value='Profile'>
                            <div className={s.info_block}>
                                <div className={s.avatar_box}>
                                    <img className={s.avatar} src={profileInfo.photos.large === null ? logo : profileInfo.photos.large} alt='avatar'></img>
                                    {profileInfo.userId === authId &&
                                        <div className={s.photo_btn}>
                                            <FileButton onChange={setUserPhoto} accept="image/png,image/jpeg">
                                                {(props) => <Button color='red' variant="subtle" size='s' compact {...props}>💾</Button>}
                                            </FileButton>
                                        </div>
                                    }
                                </div>
                                <div className={s.info_inf}>
                                    <div className={s.name}>{profileInfo.fullName}</div>
                                    {<ProfileStatus profileId={profileInfo.userId}
                                        authId={authId} status={status} />}
                                    <div className={s.desc_block}>
                                        <p className={s.question}>Rating:</p>
                                        <p className={s.answer}>{rait}</p>
                                    </div>
                                    <div className={s.desc_block}>
                                        <p className={s.question}>Posts Counter:</p>
                                        <p className={s.answer}>{posts.length}</p>
                                    </div>
                                </div>
                                {profileInfo.userId != authId && <div className={s.btn_block}>
                                    <div className='quick-posting-btnbox'>
                                        <button onClick={openDialog} className='quick-posting__btn'>Message</button>
                                    </div>
                                    <div className='quick-posting-btnbox'>
                                        <button onClick={followUser}
                                            className={`${'quick-posting__btn'} ${followed && s.f_color}`}>
                                            {followed ? 'Unsubscribe' : 'Subscribe'}</button>
                                    </div>
                                </div>}
                            </div>
                        </Tabs.Panel>
                        <Tabs.Panel pt={30} value='About'>
                            <p className={s.about}>Full Name - {profileInfo.fullName === null ? '' : profileInfo.fullName}</p>
                            {profileInfo.aboutMe === null ? <p className={s.about}>"There could be a description of me here"</p> : <p className={s.about}> {profileInfo.aboutMe}</p>}
                            <p className={s.about}>Looking For A Job - {profileInfo.lookingForAJob === true ? 'Yes' : 'No'}</p>
                            {profileInfo.lookingForAJobDescription != null && <p className={s.about}>{profileInfo.lookingForAJobDescription}</p>}
                            <div className={s.accordion}>
                                <h1 className={s.accordion_header}>Socials</h1>
                                <div className={s.accordion_box}>
                                    <Accordion defaultValue="GitHub">
                                        <Accordion.Item value="GitHub">
                                            <Accordion.Control>GitHub</Accordion.Control>
                                            <Accordion.Panel>{profileInfo.contacts.github}</Accordion.Panel>
                                        </Accordion.Item>
                                        <Accordion.Item value="VK">
                                            <Accordion.Control>VK</Accordion.Control>
                                            <Accordion.Panel>{profileInfo.contacts.vk}</Accordion.Panel>
                                        </Accordion.Item>
                                        <Accordion.Item value="Facebook">
                                            <Accordion.Control>Facebook</Accordion.Control>
                                            <Accordion.Panel>{profileInfo.contacts.facebook}</Accordion.Panel>
                                        </Accordion.Item>
                                        <Accordion.Item value="Instagram">
                                            <Accordion.Control>Instagram</Accordion.Control>
                                            <Accordion.Panel>{profileInfo.contacts.instagram}</Accordion.Panel>
                                        </Accordion.Item>
                                        <Accordion.Item value="Twitter">
                                            <Accordion.Control>Twitter</Accordion.Control>
                                            <Accordion.Panel>{profileInfo.contacts.twitter}</Accordion.Panel>
                                        </Accordion.Item>
                                        <Accordion.Item value="Website">
                                            <Accordion.Control>Website</Accordion.Control>
                                            <Accordion.Panel>{profileInfo.contacts.website}</Accordion.Panel>
                                        </Accordion.Item>
                                        <Accordion.Item value="Youtube">
                                            <Accordion.Control>Youtube</Accordion.Control>
                                            <Accordion.Panel>{profileInfo.contacts.youtube}</Accordion.Panel>
                                        </Accordion.Item>
                                        <Accordion.Item value="MainLink">
                                            <Accordion.Control>MainLink</Accordion.Control>
                                            <Accordion.Panel>{profileInfo.contacts.mainLink}</Accordion.Panel>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </div>
                        </Tabs.Panel>
                    </Tabs>
                </div>
            </div>
            {profileInfo.userId === authId &&
                <form onSubmit={handleSubmit(onSubmit)} className='quick-posting page-block'>
                    {
                        <Textarea error={errors?.postText?.message} label='Quick Post' size='xl' {...register("postText", { required: "✎ You must enter the text ⇒", minLength: { value: 10, message: "Min length is 10 symbols" } })} placeholder='Enter Text'
                            className='quick-posting-field' />
                    }
                    <Flex>
                        <FileButton disabled={loadImage === true} onChange={setPostImage} accept="image/png,image/jpeg">
                            {(props) => <Button disabled={loadImage === true} color='green' variant="subtle" size='s' compact {...props}>💾 {loadImage === true && <div>Image Loaded</div>}</Button>}
                        </FileButton>
                    </Flex>
                    <div className='quick-posting-btnbox'>
                        <input value={'Post'} type='submit' className={`${'quick-posting__btn'} ${s.post_button}`} />
                    </div>
                </form>}
            {posts.length != 0 && <div className="page-block">
                {posts}
            </div>}
        </div>
    )
}
// export default Profile;
export default compose<React.FC>(
    AuthRedirect,
)(ProfilePage);