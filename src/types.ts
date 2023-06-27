// =============================================AUTHORIZATION-TYPES=================================================
type loginProps = {
    id: number
    isAuth: boolean
    authId: number
    authError: boolean
    captchaUrl: string
    authtorize: () => void
    login: (email: string, password: string, checkbox: boolean, captcha: string) => void
}
// =============================================USER-INFO-TYPES=================================================
type userItemType = {
    name: string,
    id: number,
    uniqueUrlName: null | string,
    photos: {
        small: string,
        large: string
    },
    status: string,
    followed: boolean
}

type contactsType = {
    facebook: string | null,
    website: string | null,
    vk: string | null,
    twitter: string | null,
    instagram: string | null,
    youtube: string | null,
    github: string | null,
    mainLink: string | null
}
type profileInfoType = {
    aboutMe: string | null,
    contacts: contactsType,
    followed: boolean | null,
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    fullName: string | null,
    userId: number,
    photos: {
        small: string | null,
        large: string | null
    }
}
type profileType = {
    userId: number,
    aboutMe: string,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: contactsType
}
// =============================================POST-TYPES=================================================
type postType = {
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
type postsOwnProps = {
    postId: number
    key: string
    id: string
    name: string
    avatar: string
    time: string
    postimage: string
    posttext: string
    like_count: number
    comments: commentArrayType
}

type postsStateProps = {
    likeList: string[]
    isAuth: boolean
}

type postsDispatchProps = {
    openPost: () => void
    addToLikeList: (postId: string) => void
    like: (postId: string) => void
}

type postPageProps = {
    posts: postType[]
}

// =============================================POST-PAGE-TYPES=============================================

type ownPPProps = {
    news: postType[]
}
type statePPProps = {
    post: postType
    login: string
    likeList: string[]
    isAuth: boolean
    authPhoto: string
}
type dispatchPPProps = {
    openPost: (id: string, userId: number, name: string, time: string, text: string, likes: number, image: string,
        avatar: string, comments: commentArrayType) => void
    addComment: (postId: string | undefined, photo: string, login: string, comment: string) => void
    addToLikeList: (postId: string) => void
    like: (postId: string) => void
}
type commentArrayType =
    {
        id: string,
        avatar: string,
        name: string,
        text: string
    }[]
// =============================================MESSAGES-TYPES=============================================
type DialogType = {
    id: string
    name: string
}
type MessagesType = {
    id: string;
    inout: string;
    text: string;
}
type MessagesProps = {
    contacts: DialogType[]
    messages: MessagesType[]
    authId: number
    sendMessage: () => void
}