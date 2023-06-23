import React from 'react'
import s from './popular.module.css'
import { connect } from 'react-redux';
import Post from '../../posts/post';
import { appStateType } from '../../../redux/redux-store';

const Popular: React.FC<postPageProps   > = (props) => {
    let posts = [...props.posts].reverse().map(p => p.like_count > 50 && <Post key={p.id} id={p.id} postId={p.userId} name={p.name} avatar={p.avatar} time={p.time}
        postimage={p.postimage} posttext={p.posttext} like_count={p.like_count} comments={p.comments} />
    )
    return <>
        <div className={s.newsfeed}>
            {/* <div className="page-block"> */}
            {posts}
            {/* </div> */}
        </div>
    </>
}
const mapStateToProps = (state: appStateType) => {
    return {
        posts: state.news.postData
    }
}
const PopularContainer = connect(mapStateToProps, {})(Popular)
export default PopularContainer