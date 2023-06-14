import React from 'react'
import avatar from './../img/shit_icon.png'
import postimage1 from './../img/jsgif.gif'
import postimage2 from './../img/profile_head.png'
import postimage3 from './../img/effy.gif'

const ADD_POST = 'ADD-POST'
const OPEN_POST = 'OPEN_POST'
const ADD_COMMENT = 'ADD-COMMENT'
const LIKE = 'LIKE'
const addPost = (userId, name, avatar, time, posttext, like_count) => (
    {
        type: ADD_POST, userId: userId, name: name, avatar: avatar, time: time,
        posttext: posttext, like_count: like_count
    })
const openPost = (id, userId, name, time, posttext, like_count, postimage, avatar, comments) => ({
    type: OPEN_POST, id, userId, name, time, posttext, like_count, postimage, avatar, comments
})
const addComment = (id, avatar, name, text) => ({
    type: ADD_COMMENT, id, avatar, name, text
})
const like = (id) => ({
    type: LIKE, id
})
const initialState = {
    postData: [
        {
            id: "1",
            userId: 29179,
            name: 'desaxe',
            time: '28 April 2023',
            posttext: 'I hate TV',
            like_count: 30,
            postimage: postimage1,
            avatar: avatar,
            comments: [
                {
                    avatar: avatar,
                    name: "desaxe",
                    text: "Comment"
                },
                {
                    avatar: avatar,
                    name: "desaxe",
                    text: "Comment"
                }
            ]
        },
        {
            id: "2",
            userId: 29179,
            name: 'desaxe',
            time: 'Yesterday',
            posttext: 'We updated the header of our profile',
            like_count: 54,
            postimage: postimage2,
            avatar: avatar,
            comments: [
                {
                    avatar: avatar,
                    name: "desaxe",
                    text: "Comment"
                }
            ]
        },
        {
            id: "3",
            userId: 29179,
            name: 'desaxe',
            time: '10 minutes ago',
            posttext: 'Friday',
            like_count: 86,
            postimage: postimage3,
            avatar: avatar,
            comments: [
                {
                    avatar: avatar,
                    name: "desaxe",
                    text: "Comment"
                }
            ]
        }
    ],
    currentPost: {
        id: "",
        userId: 0,
        name: '',
        time: '',
        posttext: '',
        like_count: 0,
        postimage: null,
        avatar: null,
        comments: [
        ]
    }
}
const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            if (action.posttext == '') { return state }
            else {
                return {
                    ...state,
                    postData: [...state.postData,
                    {
                        id: action.name + '-' + action.posttext.substring(1, 9) + '-' + action.userId,
                        userId: action.userId,
                        name: action.name,
                        avatar: action.avatar,
                        time: action.time,
                        posttext: action.posttext,
                        like_count: action.like_count,
                        comments: []
                    }]
                };
            }
        }
        case OPEN_POST: {
            return {
                ...state, currentPost: {
                    ...state.currentPost, id: action.id, userId: action.userId,
                    name: action.name, time: action.time, posttext: action.posttext,
                    like_count: action.like_count, postimage: action.postimage,
                    avatar: action.avatar, comments: action.comments
                }
            }
        }
        case ADD_COMMENT: {
            return {
                ...state, postData: state.postData.map(p => {
                    if (p.id === action.id) {
                        return { ...p, comments: [...p.comments, { avatar: action.avatar, name: action.name, text: action.text }] }
                    }
                    else {
                        return p
                    }
                })
            }
        }
        case LIKE: {
            return {
                ...state, postData: state.postData.map(p => {
                    if (p.id === action.id) {
                        return { ...p, like_count: p.like_count + 1 }
                    }
                    else {
                        return p
                    }
                })
            }
        }
        default: return state
    }
}
export { newsReducer, addPost, openPost, addComment, like }