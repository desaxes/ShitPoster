import React from 'react'
import defaultAvatar from './../img/shit_icon.png'
import avatar from './../img/Cart.png'
import week1 from './../img/react-1week.png'
import week2 from './../img/react-2week.png'
import week3 from './../img/react-3week.png'
import week4 from './../img/react-4week.png'
import week5 from './../img/react-5week.png'
import week6 from './../img/react-6week.png'
import week7 from './../img/react-7week.png'
import week8 from './../img/react-8week.png'
import test from './../img/profile_head.png'
// ----------------------------------------------ACTIONS CONST-----------------------------------------
const ADD_POST = 'ADD-POST'
const OPEN_POST = 'OPEN_POST'
const ADD_COMMENT = 'ADD-COMMENT'
const LIKE = 'LIKE'
// ----------------------------------------------ACTIONS TYPES-----------------------------------------

type addCommentActionType =
    {
        type: typeof ADD_COMMENT,
        id: string,
        avatar: string,
        name: string,
        text: string
    }
type addPostActionType = {
    type: typeof ADD_POST,
    userId: number,
    name: string,
    avatar: string,
    time: string,
    posttext: string,
    like_count: number
}
type openPostActionType = {
    type: typeof OPEN_POST,
    id: string,
    userId: number,
    name: string,
    time: string,
    posttext: string,
    like_count: number,
    postimage: string,
    avatar: string,
    comments: commentArrayType
}
// ----------------------------------------------ACTIONS---------------------------------------------------

const addPost = (userId: number, name: string, avatar: string, time: string, posttext: string, like_count: number): addPostActionType => (
    {
        type: ADD_POST, userId, name, avatar, time, posttext, like_count
    })
const openPost = (id: string, userId: number, name: string, time: string, posttext: string, like_count: number, postimage: string, avatar: string, comments: commentArrayType): openPostActionType => ({
    type: OPEN_POST, id, userId, name, time, posttext, like_count, postimage, avatar, comments
})
const addComment = (id: string, avatar: string, name: string, text: string): addCommentActionType => ({
    type: ADD_COMMENT, id, avatar, name, text
})
const like = (id: string): { type: typeof LIKE, id: string } => ({
    type: LIKE, id
})

// ----------------------------------------------INIT STATE TYPES-----------------------------------------

type postArrayType = {
    id: string,
    userId: number,
    name: string,
    time: string,
    posttext: string,
    like_count: number,
    postimage: string | null,
    avatar: string | null,
    comments: commentArrayType
}[]

type initialStateType = {
    postData: Array<postType>,
    currentPost: postType
}

// ----------------------------------------------INIT STATE -----------------------------------------
const initialState: initialStateType = {
    postData: [
        {
            id: "1",
            userId: 29179,
            name: 'desaxe',
            time: '29 April 2023',
            posttext: 'First Week',
            like_count: 10,
            postimage: week1,
            avatar: avatar,
            comments: [
                {
                    id: '1',
                    avatar: avatar,
                    name: "desaxe",
                    text: "Comment"
                },
                {
                    id: '2',
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
            time: '6 May 2023',
            posttext: 'Second Week',
            like_count: 54,
            postimage: week2,
            avatar: avatar,
            comments: [
                {
                    id: '3',
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
            time: '13 May 2023',
            posttext: "Third Week",
            like_count: 86,
            postimage: week3,
            avatar: avatar,
            comments: [
                {
                    id: '4',
                    avatar: avatar,
                    name: "desaxe",
                    text: "Comment"
                }
            ]
        },
        {
            id: "4",
            userId: 29179,
            name: 'desaxe',
            time: '20 May 2023',
            posttext: "Fourth Week",
            like_count: 15,
            postimage: week4,
            avatar: avatar,
            comments: [
                {
                    id: '5',
                    avatar: avatar,
                    name: "desaxe",
                    text: "Comment"
                }
            ]
        },
        {
            id: "5",
            userId: 29179,
            name: 'desaxe',
            time: '27 May 2023',
            posttext: "Fifth Week",
            like_count: 124,
            postimage: week5,
            avatar: avatar,
            comments: [
                {
                    id: '6',
                    avatar: avatar,
                    name: "desaxe",
                    text: "Comment"
                }
            ]
        },
        {
            id: "6",
            userId: 29179,
            name: 'desaxe',
            time: '3 June 2023',
            posttext: "Sixth Week",
            like_count: 50,
            postimage: week6,
            avatar: avatar,
            comments: [
                {
                    id: '7',
                    avatar: avatar,
                    name: "desaxe",
                    text: "Comment"
                }
            ]
        },
        {
            id: "7",
            userId: 29179,
            name: 'desaxe',
            time: '10 June 2023',
            posttext: "Seventh Week",
            like_count: 51,
            postimage: week7,
            avatar: avatar,
            comments: [
                {
                    id: '8',
                    avatar: avatar,
                    name: "desaxe",
                    text: "Comment"
                }
            ]
        },
        {
            id: "0",
            userId: 1079,
            name: 'Test',
            time: '16 June 2023',
            posttext: 'Test Account',
            like_count: 77,
            postimage: test,
            avatar: defaultAvatar,
            comments: [
                {
                    id: '9',
                    avatar: defaultAvatar,
                    name: "Ummma",
                    text: "Test?"
                },
                {
                    id: '10',
                    avatar: defaultAvatar,
                    name: "Test",
                    text: "Test!"
                }
            ]
        },
        {
            id: "8",
            userId: 29179,
            name: 'desaxe',
            time: '18 June 2023',
            posttext: "Eighth Week",
            like_count: 34,
            postimage: week8,
            avatar: avatar,
            comments: [
                {
                    id: '11',
                    avatar: avatar,
                    name: "desaxe",
                    text: "Eeeeeeeeeee"
                }
            ]
        },
    ],
    currentPost: {
        id: "",
        userId: 0,
        name: '',
        time: '',
        posttext: '',
        like_count: 0,
        postimage: '',
        avatar: '',
        comments: [
        ]
    }
}
// ----------------------------------------------REDUCER-----------------------------------------
const newsReducer = (state = initialState, action: any): initialStateType => {
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
                        postimage: action.postimage,
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
                        return { ...p, comments: [...p.comments, { id: action.id + '-' + action.text.substring(0, 7), avatar: action.avatar, name: action.name, text: action.text }] }
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