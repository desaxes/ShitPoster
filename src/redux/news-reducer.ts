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
            id: "b1",
            userId: 29897,
            name: 'Axim',
            time: '30 April 2023',
            posttext: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Sed ut perspiciatis, quia voluptas sit, aspernatur aut odit aut fugit",
            like_count: 8,
            postimage: '',
            avatar: defaultAvatar,
            comments: [
                {
                    id: 'b1',
                    avatar: defaultAvatar,
                    name: "test",
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
            id: "a1",
            userId: 24741,
            name: 'soulshon',
            time: '16 May 2023',
            posttext: "Sed ut perspiciatis, quia voluptas sit, aspernatur aut...",
            like_count: 18,
            postimage: ff1,
            avatar: defaultAvatar,
            comments: [
                {
                    id: 'a1',
                    avatar: defaultAvatar,
                    name: "test",
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
            id: "b2",
            userId: 22185,
            name: 'Delerion',
            time: '24 May 2023',
            posttext: "Excepteur sint occaecat cupidatat non proident, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, qui dolorem eum fugiat, quo voluptas nulla pariatur. Et harum quidem rerum facilis est et expedita",
            like_count: 41,
            postimage: '',
            avatar: defaultAvatar,
            comments: [
                {
                    id: 'b2',
                    avatar: defaultAvatar,
                    name: "test",
                    text: "Comment"
                },
                {
                    id: 'b22',
                    avatar: defaultAvatar,
                    name: "test",
                    text: "Comment"
                },
                {
                    id: 'b23',
                    avatar: defaultAvatar,
                    name: "test",
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
            id: "a2",
            userId: 22185,
            name: 'Delerion',
            time: '1 June 2023',
            posttext: "",
            like_count: 111,
            postimage: ff2,
            avatar: defaultAvatar,
            comments: [
                {
                    id: 'a2',
                    avatar: defaultAvatar,
                    name: "test",
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
            id: "b3",
            userId: 21453,
            name: 'Rintik',
            time: '6 June 2023',
            posttext: "Lorem ipsum dolor sit amet, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, qui dolorem eum fugiat, quo voluptas nulla pariatur? Duis aute irure dolor in reprehenderit in voluptate, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, qui dolorem eum fugiat, quo voluptas nulla pariatur? Excepteur sint occaecat cupidatat non proident, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem eum fugiat, quo voluptas nulla pariatur. Lorem ipsum dolor sit...",
            like_count: 2,
            postimage: '',
            avatar: defaultAvatar,
            comments: [
                {
                    id: 'b3',
                    avatar: defaultAvatar,
                    name: "test",
                    text: "Comment"
                }
            ]
        },
        {
            id: "a3",
            userId: 23232,
            name: 'Poptyuoq',
            time: '9 May 2023',
            posttext: "Duis aute irure dolor",
            like_count: 19,
            postimage: ff3,
            avatar: defaultAvatar,
            comments: [
                {
                    id: 'a3',
                    avatar: defaultAvatar,
                    name: "test",
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
            id: "a4",
            userId: 26002,
            name: 'Chonay',
            time: '12 June 2023',
            posttext: "",
            like_count: 45,
            postimage: jsg,
            avatar: defaultAvatar,
            comments: [
                {
                    id: 'a4',
                    avatar: defaultAvatar,
                    name: "test",
                    text: "Comment"
                }
            ]
        },
        {
            id: "b4",
            userId: 14259,
            name: 'Kulio',
            time: '27 May 2023',
            posttext: "Quis autem vel eum iure reprehenderit, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, ut et voluptates repudiandae sint et molestiae non recusandae. Sed ut perspiciatis, quis nostrum exercitationem ullam corporis suscipit laboriosam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat? At vero eos et accusamus et iusto odio dignissimos ducimus, quis nostrum exercitationem ullam corporis suscipit laboriosam, obcaecati cupiditate non provident, similique sunt in culpa",
            like_count: 1,
            postimage: '',
            avatar: defaultAvatar,
            comments: [
                {
                    id: 'b4',
                    avatar: defaultAvatar,
                    name: "test",
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
        {
            id: "a5",
            userId: 18875,
            name: 'Svyatoslav',
            time: '19 June 2023',
            posttext: "Et harum quidem rerum facilis",
            like_count: 77,
            postimage: k1,
            avatar: defaultAvatar,
            comments: [
                {
                    id: 'a5',
                    avatar: defaultAvatar,
                    name: "test",
                    text: "Comment"
                }
            ]
        },
        {
            id: "9",
            userId: 29179,
            name: 'desaxe',
            time: '24 June 2023',
            posttext: "Ninth Week",
            like_count: 69,
            postimage: week9,
            avatar: avatar,
            comments: [
                {
                    id: '12',
                    avatar: avatar2,
                    name: "Kyle",
                    text: "Typescript is so COOL!!!"
                }
            ]
        },
        {
            id: "10",
            userId: 29179,
            name: 'desaxe',
            time: '2 Jule 2023',
            posttext: "Tenth Week",
            like_count: 17,
            postimage: week10,
            avatar: avatar,
            comments: [
                {
                    id: '13',
                    avatar: avatar2,
                    name: "Kyle",
                    text: "Comment"
                }
            ]
        },
        {
            id: "11",
            userId: 1079,
            name: 'Test',
            time: '10 November 2023',
            posttext: 'At vero eos et accusamus et iusto odio dignissimos ducimus, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat? Ut enim ad minima veniam, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, ut et voluptates repudiandae sint et molestiae non recusandae? Duis aute irure dolor in reprehenderit in voluptate, quis nostrum exercitationem ullam corporis suscipit laboriosam, velit esse cillum dolore eu fugiat nulla pariatur. At vero eos et accusamus et iusto odio dignissimos ducimus, consectetur adipiscing elit, ut et voluptates repudiandae sint et molestiae non recusandae. At vero eos et accusamus et iusto odio dignissimos ducimus, quis nostrum exercitationem ullam corporis suscipit laboriosam, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus? Nemo enim ipsam voluptatem, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minima veniam, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, sunt in culpa qui officia deserunt mollit anim id est laborum. Quis autem vel eum...',
            like_count: 112,
            postimage: '',
            avatar: defaultAvatar,
            comments: [
                {
                    id: '14',
                    avatar: defaultAvatar,
                    name: "Ummma",
                    text: "???"
                },
                {
                    id: '15',
                    avatar: defaultAvatar,
                    name: "Test",
                    text: "What?"
                }
            ]
        },
        {
            id: "a6",
            userId: 29689,
            name: 'Malina',
            time: '12 November 2023',
            posttext: "Duis aute irure dolor in...",
            like_count: 201,
            postimage: effy,
            avatar: defaultAvatar,
            comments: [
                {
                    id: 'a6',
                    avatar: defaultAvatar,
                    name: "test",
                    text: "Comment"
                },
                {
                    id: 'a61',
                    avatar: defaultAvatar,
                    name: "test",
                    text: "Comment"
                },
                {
                    id: 'a62',
                    avatar: defaultAvatar,
                    name: "test",
                    text: "Comment"
                },
                {
                    id: 'a63',
                    avatar: defaultAvatar,
                    name: "test",
                    text: "Comment"
                },
                {
                    id: 'a64',
                    avatar: defaultAvatar,
                    name: "test",
                    text: "Comment"
                }
            ]
        },
        {
            id: "12",
            userId: 29179,
            name: 'desaxe',
            time: '13 November 2023',
            posttext: "Eleventh Week",
            like_count: 27,
            postimage: week11,
            avatar: avatar,
            comments: [
                {
                    id: '16',
                    avatar: avatar2,
                    name: "Kyle",
                    text: "Complete"
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
const newsReducer = (state = initialState, action: NewsActionTypes): initialStateType => {
    switch (action.type) {
        case 'ADD_POST': {
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
                        return { ...p, comments: [...p.comments, { id: action.id + '-' + action.text.substring(0, 7), avatar: action.avatar, name: action.name, text: action.text }] }
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