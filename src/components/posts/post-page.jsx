import s from './post.module.css'

import comment from './../../img/com_item.png'
const Post = (props) => {
    return (
        <div className={s.post}>

            <div className={s.inner}>
                <div className={s.header}>
                    <div className= {s.avatar}>
                        <img src={props.avatar} alt="" />
                    </div>
                    <div className={s.name}>
                        {props.name}
                    </div>
                    <div className={s.date}>
                        {props.time}
                    </div>
                </div>
                <div className={s.post_image}>
                    <img src={props.postimage} alt="" />
                </div>
                <div className={s.text_block}>
                    <p>{props.posttext}</p>
                </div>
                <div className={s.footer}>
                    <div className={s.left_block}>
                        <button className={s.comments}>
                            <img src={comment} alt="" />
                        </button>
                        <div className={s.comments_counter}>
                            {props.com_count}
                        </div>
                    </div>
                    <div className={s.right_block}>
                        <div className={s.like}>
                            <button type="button" className={s.like_btn}>+</button>
                        </div>
                        <div className={s.likes_dislikes__counter}>
                            {props.like_count}
                        </div>
                        <div className={s.dislike}>
                            <button type="button" className={s.dislike_btn}>-</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Post;