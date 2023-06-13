import React from 'react'
import s from './newsfeed.module.css'
import { connect } from 'react-redux';
import Post from '../posts/post';
const Newsfeed = (props) => {
    let posts = [...props.posts].reverse().map(p => <Post key={p.id} name={p.name} avatar={p.avatar} time={p.time}
        postimage={p.postimage} posttext={p.posttext} com_count={p.com_count} like_count={p.like_count} />
    )
    return <>
        <div className={s.newsfeed}>
            {/* <div className="page-block"> */}
                {posts}
            {/* </div> */}
        </div>
    </>
}
const mapStateToProps = (state) => {
    return {
        posts: state.news.postData
    }
}
const NewsfeedContainer = connect(mapStateToProps, {})(Newsfeed)
export default NewsfeedContainer