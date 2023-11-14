import React from 'react'
import defaultAvatar from './../img/shit_icon.png'
import avatar from './../img/Cart.png'
import avatar2 from './../img/Kyle.png'
import week1 from './../img/react-1week.png'
import week2 from './../img/react-2week.png'
import week3 from './../img/react-3week.png'
import week4 from './../img/react-4week.png'
import week5 from './../img/react-5week.png'
import week6 from './../img/react-6week.png'
import week7 from './../img/react-7week.png'
import week8 from './../img/react-8week.png'
import week9 from './../img/react-9week.png'
import week10 from './../img/react-10week.png'
import week11 from './../img/react-11week.png'
import test from './../img/profile_head.png'
import ff2 from './../img/ff2.png'
import ff1 from './../img/ff1.png'
import ff3 from './../img/ff3.png'
import jsg from './../img/jsgif.gif'
import k1 from './../img/k1.gif'
import effy from './../img/effy.gif'

import { InferActionsTypes } from './redux-store'
// ----------------------------------------------ACTIONS---------------------------------------------------
const actions = {
    addPost: (userId: number | null, name: string, avatar: string, postimage: string | null, time: string, posttext: string, like_count: number) => (
        {
            type: 'ADD_POST', userId, name, avatar, postimage, time, posttext, like_count
        } as const),
    openPost: (id: string, userId: number | null, name: string, time: string, posttext: string, like_count: number, postimage: string, avatar: string, comments: commentArrayType) => ({
        type: 'OPEN_POST', id, userId, name, time, posttext, like_count, postimage, avatar, comments
    } as const),
    addComment: (id: string, avatar: string, name: string, text: string) => ({
        type: 'ADD_COMMENT', id, avatar, name, text
    } as const),
    like: (id: string) => ({
        type: 'LIKE', id
    } as const),
    dislike: (id: string) => ({
        type: 'DISLIKE', id
    } as const)
}
export type NewsActionTypes = InferActionsTypes<typeof actions>
// ----------------------------------------------INIT STATE TYPES-----------------------------------------

type initialStateType = {
    postData: Array<postType>,
    currentPost: postType,
}
const com = (id: string, avatar: string, name: string, text: string) => {
    return {
        id,
        avatar,
        name,
        text
    }
}
const post = (
    id: string, userId: number | null, name: string, time: string, posttext: string, like_count: number,
    postimage: string | null, avatar: string, comments: commentArrayType) => {
    return {
        id,
        userId,
        name,
        time,
        posttext,
        like_count,
        postimage,
        avatar,
        comments
    }
}
// ----------------------------------------------INIT STATE -----------------------------------------
const initialState: initialStateType = {
    postData: [
        post('1', 29179, 'desaxe', '29 April 2023', 'First Week', 10, week1, avatar, [
            com('1', avatar, 'desaxe', 'Comment'),
            com('2', avatar, 'desaxe', 'Comment'),
        ]),
        post('b1', 29897, 'Axim', '30 April 2023',
            'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Sed ut perspiciatis, quia voluptas sit, aspernatur aut odit aut fugit',
            8, '', defaultAvatar, [
            com('b1', defaultAvatar, 'test', 'Comment')
        ]),
        post('2', 29179, 'desaxe', '6 May 2023', 'Second Week', 54, week2, avatar, [
            com('3', avatar, 'desaxe', 'Comment'),
        ]),
        post('3', 29179, 'desaxe', '13 May 2023', 'Third Week', 86, week3, avatar, [
            com('4', avatar, 'desaxe', 'Comment'),
        ]),
        post('a1', 24741, 'soulshon', '16 May 2023', 'Sed ut perspiciatis, quia voluptas sit, aspernatur aut...',
            18, ff1, defaultAvatar, [
            com('a1', defaultAvatar, 'test', 'Comment')
        ]),
        post('4', 29179, 'desaxe', '20 May 2023', 'Fourth Week', 15, week4, avatar, [
            com('5', avatar, 'desaxe', 'Comment'),
        ]),
        post('b2', 22185, 'Delerion', '24 May 2023',
            'Excepteur sint occaecat cupidatat non proident, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, qui dolorem eum fugiat, quo voluptas nulla pariatur. Et harum quidem rerum facilis est et expedita',
            41, '', defaultAvatar, [
            com('b2', defaultAvatar, 'test', 'Comment')
        ]),
        post('5', 29179, 'desaxe', '27 May 2023', 'Fifth Week', 124, week5, avatar, [
            com('6', avatar, 'desaxe', 'Comment'),
        ]),
        post('a2', 22185, 'Delerion', '1 June 2023', '',
            11, ff2, defaultAvatar, [
            com('a2', defaultAvatar, 'test', 'Comment')
        ]),
        post('6', 29179, 'desaxe', '3 June 2023', 'Sixth Week', 50, week6, avatar, [
            com('7', avatar, 'desaxe', 'Comment'),
        ]),
        post('b3', 21453, 'Rintik', '6 June 2023',
            'Lorem ipsum dolor sit amet, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, qui dolorem eum fugiat, quo voluptas nulla pariatur? Duis aute irure dolor in reprehenderit in voluptate, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, qui dolorem eum fugiat, quo voluptas nulla pariatur? Excepteur sint occaecat cupidatat non proident, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem eum fugiat, quo voluptas nulla pariatur. Lorem ipsum dolor sit...',
            2, '', defaultAvatar, [
            com('b3', defaultAvatar, 'test', 'Comment')
        ]),
        post('a3', 23232, 'Poptyuoq', '9 May 2023', 'Duis aute irure dolor',
            19, ff3, defaultAvatar, [
            com('a3', defaultAvatar, 'test', 'Comment')
        ]),
        post('7', 29179, 'desaxe', '10 June 2023', 'Seventh Week', 51, week7, avatar, [
            com('8', avatar, 'desaxe', 'Comment'),
        ]),
        post('a4', 26002, 'Chonay', '12 June 2023', '',
            45, jsg, defaultAvatar, [
            com('a4', defaultAvatar, 'test', 'Comment')
        ]),
        post('b4', 14259, 'Kulio', '27 May 2023',
            'Quis autem vel eum iure reprehenderit, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, ut et voluptates repudiandae sint et molestiae non recusandae. Sed ut perspiciatis, quis nostrum exercitationem ullam corporis suscipit laboriosam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat? At vero eos et accusamus et iusto odio dignissimos ducimus, quis nostrum exercitationem ullam corporis suscipit laboriosam, obcaecati cupiditate non provident, similique sunt in culpa',
            1, '', defaultAvatar, [
            com('b4', defaultAvatar, 'test', 'Comment')
        ]),
        post('0', 1079, 'Test', '16 June 2023', 'Test Account', 112, '', defaultAvatar, [
            com('9', defaultAvatar, 'Ummma', "Test?"),
            com('10', defaultAvatar, 'Test', "Test!")
        ]),
        post('8', 29179, 'desaxe', '18 June 2023', 'Eighth Week', 34, week8, avatar, [
            com('11', avatar, 'desaxe', 'Eeeeeeeeeee'),
        ]),
        post('a5', 18875, 'Svyatoslav', '19 June 2023', 'Et harum quidem rerum facilis',
            77, k1, defaultAvatar, [
            com('a5', defaultAvatar, 'test', 'Comment')
        ]),
        post('9', 29179, 'desaxe', '24 June 2023', 'Ninth Week', 69, week9, avatar, [
            com('12', avatar2, 'Kyle', 'Typescript is so COOL!!!'),
        ]),
        post('10', 29179, 'desaxe', '2 Jule 2023', 'Tenth Week', 17, week10, avatar, [
            com('13', avatar2, 'Kyle', 'Comment'),
        ]),
        post('11', 1079, 'Test', '10 November 2023',
            'At vero eos et accusamus et iusto odio dignissimos ducimus, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat? Ut enim ad minima veniam, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, ut et voluptates repudiandae sint et molestiae non recusandae? Duis aute irure dolor in reprehenderit in voluptate, quis nostrum exercitationem ullam corporis suscipit laboriosam, velit esse cillum dolore eu fugiat nulla pariatur. At vero eos et accusamus et iusto odio dignissimos ducimus, consectetur adipiscing elit, ut et voluptates repudiandae sint et molestiae non recusandae. At vero eos et accusamus et iusto odio dignissimos ducimus, quis nostrum exercitationem ullam corporis suscipit laboriosam, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus? Nemo enim ipsam voluptatem, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minima veniam, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, sunt in culpa qui officia deserunt mollit anim id est laborum. Quis autem vel eum...',
            112, '', defaultAvatar, [
            com('14', defaultAvatar, 'Ummma', "???"),
            com('15', defaultAvatar, 'Ummma', "What?")
        ]),
        post('a6', 29689, 'Malina', '12 November 2023', 'Duis aute irure dolor in...',
            201, effy, defaultAvatar, [
            com('a6', avatar2, 'test', 'Comment'),
            com('a61', avatar2, 'test', 'Comment'),
            com('a62', avatar2, 'test', 'Comment'),
            com('a63', avatar2, 'test', 'Comment'),
            com('a64', avatar2, 'test', 'Comment'),
        ]),
        post('12', 29179, 'desaxe', '13 November 2023', 'Eleventh Week', 27, week11, avatar, [
            com('16', avatar2, 'Kyle', 'Complete'),
        ])
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
const newsReducer = (state = initialState, action: NewsActionTypes): initialStateType => {
    switch (action.type) {
        case 'ADD_POST': {
            if (action.posttext == '') { return state }
            else {
                return {
                    ...state,
                    postData: [...state.postData,
                    post(action.name + '-' + action.posttext.substring(1, 9) + '-' + action.userId,
                        action.userId, action.name, action.time, action.posttext, action.like_count,
                        action.postimage, action.avatar, [])
                    ]
                };
            }
        }
        case 'OPEN_POST': {
            return {
                ...state, currentPost: {
                    ...state.currentPost, id: action.id, userId: action.userId,
                    name: action.name, time: action.time, posttext: action.posttext,
                    like_count: action.like_count, postimage: action.postimage,
                    avatar: action.avatar, comments: action.comments
                }
            }
        }
        case 'ADD_COMMENT': {
            return {
                ...state, postData: state.postData.map(p => {
                    if (p.id === action.id) {
                        return {
                            ...p, comments: [...p.comments,
                            com(action.id + '-' + action.text.substring(0, 7), action.avatar, action.name, action.text)]
                        }
                    }
                    else {
                        return p
                    }
                })
            }
        }
        case 'LIKE': {
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
        case 'DISLIKE': {
            return {
                ...state, postData: state.postData.map(p => {
                    if (p.id === action.id) {
                        return { ...p, like_count: p.like_count - 1 }
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

const addPost = (userId: number | null, name: string, avatar: string, postimage: string | null, time: string, posttext: string, like_count: number) => (dispatch: any) => {
    dispatch(actions.addPost(userId, name, avatar, postimage, time, posttext, like_count))
}
const openPost = (id: string, userId: number | null, name: string, time: string, posttext: string, like_count: number, postimage: string, avatar: string, comments: commentArrayType) => (dispatch: any) => {
    dispatch(actions.openPost(id, userId, name, time, posttext, like_count, postimage, avatar, comments))
}
const addComment = (id: string, avatar: string, name: string, text: string) => (dispatch: any) => {
    dispatch(actions.addComment(id, avatar, name, text))
}
const like = (id: string) => (dispatch: any) => {
    dispatch(actions.like(id))
}
const dislike = (id: string) => (dispatch: any) => {
    dispatch(actions.dislike(id))
}

export { newsReducer, addPost, openPost, addComment, like, dislike } 