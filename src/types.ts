// =============================================AUTHORIZATION-TYPES=================================================
type loginProps = {
    id: number | null
    isAuth: boolean
    authError: boolean
    captchaUrl: string
    authtorize: () => void
    login: (email: string, password: string, checkbox: boolean, captcha: string) => void
}
// =============================================USER-INFO-TYPES=================================================
type userItemType = {
    name: string,
    id: number ,
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
    userId: number | null,
    aboutMe: string,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: contactsType
}
// =============================================POST-TYPES=================================================
type postType = {
    id: string,
    userId: number | null,
    name: string,
    time: string,
    posttext: string,
    like_count: number,
    postimage: any,
    avatar: string,
    comments: commentArrayType
}
type postsOwnProps = {
    postId: number | null
    userId: number | null
    key: string
    id: string
    name: string
    avatar: string
    time: string
    postimage: any
    posttext: string
    like_count: number
    comments: commentArrayType
}

type postPageProps = {
    posts: postType[]
}

// =============================================POST-PAGE-TYPES=============================================

type ownPPProps = {
    news: postType[]
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
    avatar: string
    messages: Array<{ id: string, inout: string, text: string }>
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