import { connect } from "react-redux";
import React from 'react'
import Content from "../content/content";
import NavContainer from "../nav/nav";
import s from './main.module.css'
import Post from '../posts/post'
import { ScrollArea } from "@mantine/core";
import { appStateType } from "../../redux/redux-store";

type props = {
    news: any
}
const Main: React.FC<props> = (props) => {
    return (
        <main className={s.main}>
            <NavContainer />
            <Content news={props.news} />
            <div className={s.right_panel}>
                <div className={s.rp_inner}>
                    <p className={s.rp_header}>Last Posts</p>
                    <ScrollArea h={500} className={s.posts_container}>
                        <Post postId={props.news.at(-1).userId} key={props.news.at(-1).id} id={props.news.at(-1).id} name={props.news.at(-1).name} avatar={props.news.at(-1).avatar} time={props.news.at(-1).time}
                            postimage={props.news.at(-1).postimage} posttext={props.news.at(-1).posttext} like_count={props.news.at(-1).like_count} comments={props.news.at(-1).comments} />
                        <Post postId={props.news.at(-2).userId} key={props.news.at(-2).id} id={props.news.at(-2).id} name={props.news.at(-2).name} avatar={props.news.at(-2).avatar} time={props.news.at(-2).time}
                            postimage={props.news.at(-2).postimage} posttext={props.news.at(-2).posttext} like_count={props.news.at(-2).like_count} comments={props.news.at(-2).comments} />
                        <Post postId={props.news.at(-3).userId} key={props.news.at(-3).id} id={props.news.at(-3).id} name={props.news.at(-3).name} avatar={props.news.at(-3).avatar} time={props.news.at(-3).time}
                            postimage={props.news.at(-3).postimage} posttext={props.news.at(-3).posttext} like_count={props.news.at(-3).like_count} comments={props.news.at(-3).comments} />
                        <Post postId={props.news.at(-4).userId} key={props.news.at(-4).id} id={props.news.at(-4).id} name={props.news.at(-4).name} avatar={props.news.at(-4).avatar} time={props.news.at(-4).time}
                            postimage={props.news.at(-4).postimage} posttext={props.news.at(-4).posttext} like_count={props.news.at(-4).like_count} comments={props.news.at(-4).comments} />
                    </ScrollArea>
                </div>
            </div>
        </main>)
}
const mapStateToProps = (state: appStateType) => {
    return {
        news: state.news.postData
    }
}
const MainContainer = connect(mapStateToProps, {})(Main)
export default MainContainer;