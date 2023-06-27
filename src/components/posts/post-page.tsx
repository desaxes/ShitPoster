import s from './post.module.css'
import React from 'react'
import comment from './../../img/com_item.png'
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { openPost, addComment, like } from '../../redux/news-reducer.ts';
import { addToLikeList } from '../../redux/auth-reducer.ts';
import { useForm } from 'react-hook-form';
import { Textarea } from '@mantine/core'
import avatar from './../../img/shit_icon.png'
import { appStateType } from '../../redux/redux-store.ts';
import { compose } from 'redux';

type props = ownPPProps & statePPProps & dispatchPPProps
const PostPage: React.FC<props> = (props) => {
    const { register, handleSubmit, reset } = useForm()
    let postId = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        props.news.filter(post => {
            if (post.id === postId.id) {
                props.openPost(post.id, post.userId,
                    post.name, post.time, post.posttext,
                    post.like_count, post.postimage, post.avatar, post.comments)
            }
        })
    }, [postId, props.news])
    const comments = props.post.comments.map(c => <Comment key={c.id} ava={c.avatar} name={c.name} text={c.text} />)
    const sendComment = (e: any) => {
        props.addComment(postId.id, props.authPhoto, props.login, e.com)
        reset()
    }
    const likePost = () => {
        if (props.isAuth === true) {
            props.like(props.post.id)
            props.addToLikeList(props.post.id)
        }
    }
    const toProfile = () => {
        navigate('/profile/' + props.post.userId)
    }
    return (
        <div className={s.post}>
            <div className={s.inner}>
                <div onClick={toProfile} className={s.header}>
                    <div className={s.avatar}>
                        <img src={props.post.avatar} alt="" />
                    </div>
                    <div className={s.name}>
                        {props.post.name}
                    </div>
                    <div className={s.date}>
                        {props.post.time}
                    </div>
                </div>
                <div className={s.post_image}>
                    <img src={props.post.postimage} alt="" />
                </div>
                <div className={s.text_block}>
                    <p>{props.post.posttext}</p>
                </div>
                <div className={s.footer}>
                    <div className={s.left_block}>
                        <button className={s.comments}>
                            <img src={comment} alt="" />
                        </button>
                        <div className={s.comments_counter}>
                            {props.post.comments.length}
                        </div>
                    </div>
                    <div className={s.right_block}>
                        <div className={s.likes_dislikes__counter}>
                            {props.post.like_count}
                        </div>
                        <div className={s.like}>
                            <button disabled={props.likeList.some(id => id === props.post.id)}
                                onClick={likePost} type="button" className={`${s.like_btn} ${props.likeList.some(id => id === props.post.id) && props.isAuth && s.liked}`}>❤</button>
                        </div>
                    </div>
                </div>
                <div className={s.comments_box}>
                    {props.isAuth && <form onSubmit={handleSubmit(sendComment)} className={s.form}>
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

const mapStateToProps = (state: appStateType) => {
    return {
        post: state.news.currentPost,
        login: state.auth.login,
        likeList: state.auth.likedPosts,
        isAuth: state.auth.isAuth,
        authPhoto: state.auth.photo,
    }
}
// const PostPageContainer = connect(mapStateToProps, { openPost, addComment, addToLikeList, like })(PostPage)
export default compose<React.FC<ownPPProps>>(
    connect(mapStateToProps,
        {
            openPost,
            addComment,
            addToLikeList,
            like
        })
)(PostPage);