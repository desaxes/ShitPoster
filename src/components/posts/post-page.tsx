import s from './post.module.css'
import React from 'react'
import comment from './../../img/com_item.png'
import { connect, useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { openPost, addComment, like } from '../../redux/news-reducer.ts';
import { addToLikeList } from '../../redux/auth-reducer.ts';
import { useForm } from 'react-hook-form';
import { Textarea } from '@mantine/core'
import avatar from './../../img/shit_icon.png'
import { AppDispatch, appStateType } from '../../redux/redux-store.ts';
import { compose } from 'redux';
import * as authSelectors from '../../redux/auth-selectors.ts'
import * as newsSelectors from '../../redux/news-selectors.ts'
import { getCurrentPost } from './../../redux/news-selectors';

type props = ownPPProps
const PostPage: React.FC<props> = (props) => {

    const post = useSelector(newsSelectors.getCurrentPost)
    const login = useSelector(authSelectors.getLogin)
    const likeList = useSelector(authSelectors.getLikedPosts)
    const isAuth = useSelector(authSelectors.getIsAuth)
    const authPhoto = useSelector(authSelectors.getAuthPhoto)
    const dispatch: AppDispatch = useDispatch()
    const { register, handleSubmit, reset } = useForm()
    let postId = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        props.news.filter(post => {
            if (post.id === postId.id) {
                dispatch(openPost(post.id, post.userId,
                    post.name, post.time, post.posttext,
                    post.like_count, post.postimage, post.avatar, post.comments))
            }
        })
    }, [postId, props.news])
    const comments = post.comments.map(c => <Comment key={c.id} ava={c.avatar} name={c.name} text={c.text} />)
    const sendComment = (e: any) => {
        dispatch(addComment(postId.id as string, authPhoto as string, login as string, e.com))
        reset()
    }
    const likePost = () => {
        if (isAuth === true) {
            dispatch(like(post.id))
            dispatch(addToLikeList(post.id))
        }
    }
    const toProfile = () => {
        navigate('/profile/' + post.userId)
    }
    return (
        <div className={s.post}>
            <div className={s.inner}>
                <div onClick={toProfile} className={s.header}>
                    <div className={s.avatar}>
                        <img src={post.avatar} alt="" />
                    </div>
                    <div className={s.name}>
                        {post.name}
                    </div>
                    <div className={s.date}>
                        {post.time}
                    </div>
                </div>
                <div className={s.post_image}>
                    <img src={post.postimage} alt="" />
                </div>
                <div className={s.text_block}>
                    <p>{post.posttext}</p>
                </div>
                <div className={s.footer}>
                    <div className={s.left_block}>
                        <button className={s.comments}>
                            <img src={comment} alt="" />
                        </button>
                        <div className={s.comments_counter}>
                            {post.comments.length}
                        </div>
                    </div>
                    <div className={s.right_block}>
                        <div className={s.likes_dislikes__counter}>
                            {post.like_count}
                        </div>
                        <div className={s.like}>
                            <button disabled={likeList.some(id => id === post.id)}
                                onClick={likePost} type="button" className={`${s.like_btn} ${likeList.some(id => id === post.id) && isAuth && s.liked}`}>❤</button>
                        </div>
                    </div>
                </div>
                <div className={s.comments_box}>
                    {isAuth && <form onSubmit={handleSubmit(sendComment)} className={s.form}>
                        <div className={s.textbox}><Textarea required {...register('com')} placeholder='Comment' /></div>
                        <div className={s.btn_box}><input value={'Comment'} className='quick-posting__btn' type="submit" /></div>
                    </form>}
                    {comments}
                </div>
            </div>
        </div>
    )
};

type commentType = {
    ava: string
    name: string
    text: string
}

const Comment: React.FC<commentType> = (props) => {
    return (
        <div className={s.comment}>
            <div className={s.com_header}>
                <img className={s.com_ava} src={props.ava === null ? avatar : props.ava} alt="" />
                <div className={s.com_name}>{props.name}</div>
            </div>
            <div className={s.com_text}>{props.text}</div>
        </div>
    )
}
export default PostPage;