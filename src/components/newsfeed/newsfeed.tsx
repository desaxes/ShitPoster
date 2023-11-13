import React, { useEffect, useState } from 'react'
import s from './newsfeed.module.css'
import { useSelector } from 'react-redux';
import Post from '../posts/post';
import { getPosts } from '../../redux/profile-selectors';
import { NativeSelect } from '@mantine/core';
import { scrollUp } from '../common_components/functions';

const Newsfeed: React.FC = () => {
    const [value, setValue] = useState('0');
    useEffect(() => {

    }, [value])
    useEffect(() => {
        scrollUp()
    }, [])

    const postData = useSelector(getPosts)
    const postDataFilter = [...postData].filter(p => p.like_count >= parseInt(value))
    let posts = [...postDataFilter].reverse().map(p => <Post key={p.id} userId={p.userId} postId={p.userId} id={p.id} name={p.name} avatar={p.avatar} time={p.time}
        postimage={p.postimage} posttext={p.posttext} like_count={p.like_count} comments={p.comments} />
    )
    return <>
        <div className={s.newsfeed}>
            <div className={s.select}>
                <NativeSelect
                    data={['0', '+10', '+25', '+50']}
                    label="Sort Posts"
                    size='xs'
                    variant="filled"
                    value={value}
                    onChange={(event) => setValue(event.currentTarget.value)}
                />
            </div>
            {posts}
        </div>
    </>
}


export default Newsfeed