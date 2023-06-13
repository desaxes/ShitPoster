import React from 'react'
import avatar from './../img/shit_icon.png'
import postimage1 from './../img/jsgif.gif'
import postimage2 from './../img/profile_head.png'
import postimage3 from './../img/effy.gif'

const ADD_POST = 'ADD-POST'
const addPost = (userId, name, avatar, time, posttext, com_count, like_count) => (
    { type: ADD_POST, userId: userId, name: name, avatar: avatar, time: time, posttext: posttext, com_count: com_count, like_count: like_count })
const initialState = {
    postData: [
        {
            id: 1,
            userId: 29179,
            name: 'desaxe',
            time: '28 April 2023',
            posttext: 'I hate TV',
            com_count: '34',
            like_count: '30',
            postimage: postimage1,
            avatar: avatar
        },
        {
            id: 2,
            userId: 29179,
            name: 'desaxe',
            time: 'Yesterday',
            posttext: 'We updated the header of our profile',
            com_count: '57',
            like_count: '54',
            postimage: postimage2,
            avatar: avatar
        },
        {
            id: 3,
            userId: 29179,
            name: 'desaxe',
            time: '10 minutes ago',
            posttext: 'Friday',
            com_count: '233',
            like_count: '86',
            postimage: postimage3,
            avatar: avatar
        }
    ],
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
                        id: state.postData.at(-1).id + 1,
                        userId: action.userId,
                        name: action.name,
                        avatar: action.avatar,
                        time: action.time,
                        posttext: action.posttext,
                        com_count: action.com_count,
                        like_count: action.like_count
                    }]
                };
            }
        }
        default: return state
    }
}
export { newsReducer, addPost }