import React, { useEffect } from 'react'
import s from './popular.module.css'
import { useSelector } from 'react-redux';
import Post from '../../posts/post';
import { getPosts } from '../../../redux/profile-selectors';
import { scrollUp } from '../../common_components/functions';

const PopularPage: React.FC = () => {
    useEffect(() => {
        scrollUp()
    }, [])
    const postData = useSelector(getPosts)
    const postDataFilter = [...postData].filter(p => p.like_count > 50)
    let posts = [...postDataFilter].reverse().map(p => <Post key={p.id} userId={p.userId} id={p.id} postId={p.userId} name={p.name} avatar={p.avatar} time={p.time}
        postimage={p.postimage} posttext={p.posttext} like_count={p.like_count} comments={p.comments} />
    )
    return <>
        <div className={s.newsfeed}>
            {posts}
        </div>
    </>
}
export default PopularPage