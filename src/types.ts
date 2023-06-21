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
type commentArrayType =
    {
        id: string,
        avatar: string,
        name: string,
        text: string
    }[]

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
    followed: string | null,
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    fullName: string | null,
    userId: number,
    photos: {
        small: string | null,
        large: string | null
    }
}