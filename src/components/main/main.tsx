import { useSelector } from "react-redux";
import React from 'react'
import Content from "../content/content";
import NavContainer from "../nav/nav";
import s from './main.module.css'
import Post from '../posts/post'
import { ScrollArea } from "@mantine/core";
import { getPostData } from "../../redux/news-selectors";


const Main: React.FC = () => {
    const news: any = useSelector(getPostData)
    return (
        <main className={s.main}>
            <NavContainer />
            <Content news={news} />
            <div className={s.right_panel}>
                <div className={s.rp_inner}>
                    <p className={s.rp_header}>Last Posts</p>
                    <div className={s.suka}>
                        <ScrollArea h={850} className={s.posts_container}>
                            <Post postId={news.at(-1).userId} key={news.at(-1).id} userId={news.at(-1).userId} id={news.at(-1).id} name={news.at(-1).name} avatar={news.at(-1).avatar} time={news.at(-1).time}
                                postimage={news.at(-1).postimage} posttext={news.at(-1).posttext} like_count={news.at(-1).like_count} comments={news.at(-1).comments} />
                            <Post postId={news.at(-2).userId} key={news.at(-2).id} userId={news.at(-2).userId} id={news.at(-2).id} name={news.at(-2).name} avatar={news.at(-2).avatar} time={news.at(-2).time}
                                postimage={news.at(-2).postimage} posttext={news.at(-2).posttext} like_count={news.at(-2).like_count} comments={news.at(-2).comments} />
                            <Post postId={news.at(-3).userId} key={news.at(-3).id} userId={news.at(-3).userId} id={news.at(-3).id} name={news.at(-3).name} avatar={news.at(-3).avatar} time={news.at(-3).time}
                                postimage={news.at(-3).postimage} posttext={news.at(-3).posttext} like_count={news.at(-3).like_count} comments={news.at(-3).comments} />
                            <Post postId={news.at(-4).userId} key={news.at(-4).id} userId={news.at(-4).userId} id={news.at(-4).id} name={news.at(-4).name} avatar={news.at(-4).avatar} time={news.at(-4).time}
                                postimage={news.at(-4).postimage} posttext={news.at(-4).posttext} like_count={news.at(-4).like_count} comments={news.at(-4).comments} />
                            <Post postId={news.at(-5).userId} key={news.at(-5).id} userId={news.at(-5).userId} id={news.at(-5).id} name={news.at(-5).name} avatar={news.at(-5).avatar} time={news.at(-5).time}
                                postimage={news.at(-5).postimage} posttext={news.at(-5).posttext} like_count={news.at(-5).like_count} comments={news.at(-5).comments} />
                        </ScrollArea>
                    </div>
                </div>
            </div>
            
        </main>)
}
export default Main;