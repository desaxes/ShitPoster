const SUBSCRIBE = 'SUBSCRIBE';
const SETSUBS = 'SETSUBS';
const subscribeAC = (userid) => (
    { type: SUBSCRIBE, userid: userid })
const setsubsAC = (subsData) => (
    { type: SETSUBS, subsData:subsData})


let initialState = {
    subsData: [
        // {
        //     id: 1,
        //     name: 'John',
        //     desc: 'Beginner Shitposter',
        //     sub: false
        // },
        // {
        //     id: 2,
        //     name: 'James',
        //     desc: 'I love dogs. I can post dogs all day. Dogs Dogs DOGS!',
        //     sub: false
        // },
        // {
        //     id: 3,
        //     name: 'Jenny',
        //     desc: 'My name is Jenny.',
        //     sub: false
        // },
        // {
        //     id: 4,
        //     name: 'Jeff',
        //     desc: 'Crazy Guy',
        //     sub: false
        // },
        // {
        //     id: 5,
        //     name: 'Julie',
        //     desc: 'Give me money, plz. My cat is sick.',
        //     sub: false
        // },
        // {
        //     id: 6,
        //     name: 'Jessy',
        //     desc: 'Jessy!',
        //     sub: false
        // }
    ]
}

const subsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBSCRIBE: {
            return {
                ...state, subsData: state.subsData.map(u => {
                    if (u.id === action.userid) {
                        if (u.followed === false) {
                            return { ...u, followed: true }
                        }
                        else {
                            return { ...u, followed: false }
                        }
                    }
                    else {
                        return u
                    }
                })
            }
        }
        case SETSUBS:{
            return {...state,subsData:[...action.subsData]}
        }
        default: return state
    }
}
export { subsReducer, setsubsAC,subscribeAC }