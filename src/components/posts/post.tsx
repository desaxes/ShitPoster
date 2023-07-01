import s from './post.module.css'
import React from 'react'
import comment from './../../img/com_item.png'
import { useDispatch, useSelector } from 'react-redux';
import { like } from '../../redux/news-reducer.ts';
import { useNavigate } from 'react-router-dom';
import { addToLikeList } from '../../redux/auth-reducer.ts';
import { AppDispatch, appStateType } from '../../redux/redux-store.ts';
import * as authSelectors from '../../redux/auth-selectors.ts'

type props = postsOwnProps
const Post: React.FC<props> = (props) => {
    const isAuth = useSelector(authSelectors.getIsAuth)
    const likeList = useSelector(authSelectors.getLikedPosts)
    const dispatch: AppDispatch = useDispatch()
    const navigate = useNavigate()
    const openPostPage = () => {
        navigate('/post/' + props.id)
    }
    const toProfile = () => {
        navigate('/profile/' + props.postId)
    }
    const likePost = () => {
        if (isAuth === true) {
            dispatch(like(props.id))
            dispatch(addToLikeList(props.id))
        }
    }
    return (
        <div className={s.post}>
            <div className={s.inner}>
                <div onClick={toProfile} className={s.header}>
                    <div className={s.avatar}>
                        <img src={props.avatar} alt="" />
                    </div>
                    <div className={s.name}>
                        {props.name}
                    </div>
                    <div className={s.date}>
                        {props.time}
                    </div>
                </div>
                {props.postimage != "" && <div onClick={openPostPage} className={s.post_image}>
                    <img src={props.postimage} alt="" />
                </div>}
                <div className={s.text_block}>
                    <p>{props.posttext}</p>
                </div>
                <div className={s.footer}>
                    <div className={s.left_block}>
                        <button onClick={openPostPage} className={s.comments}>
                            <img src={comment} alt="" />
                        </button>
                        <div className={s.comments_counter}>
                            {props.comments.length}
                        </div>
                    </div>
                    <div className={s.right_block}>
                        <div className={s.likes_dislikes__counter}>
                            {props.like_count}
                        </div>
                        <div className={s.like}>
                            <button disabled={likeList.some(id => id === props.id)} onClick={likePost}
                                className={`${s.like_btn} ${likeList.some(id => id === props.id) && isAuth && s.liked}`}>❤</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Post;
