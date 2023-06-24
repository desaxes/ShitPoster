export enum ResultCodes {
    Success = 0,
    Error = 1,
    NeedCaptcha = 10
}
export namespace APITypes {
    export namespace CommonAPITypes {
        export type onlyResultAPIType = {
            resultCode: ResultCodes
            messages: string[],
            data: any
        }
    }
    export namespace authAPITypes {
        export type authType = {
            data: {
                id: number
                login: string
                email: string
            }, messages: string[]
            fieldsErrors: string[]
            resultCode: ResultCodes
        }
        export type loginType = {
            resultCode: ResultCodes
            messages: string[],
            data: {
                userId: number
            }
        }
    }
    export namespace userAPITypes {
        export type getUsersType = {
            items: userItemType[],
            totalCount: number,
            error: null | string
        }
    }
    export namespace securityAPITypes {
        export type captchaType = {
            url: string
        }
    }
    export namespace profileAPITypes {
        export type getUserProfileType = {
            userId: number,
            aboutMe: string,
            lookingForAJob: boolean,
            lookingForAJobDescription: string,
            fullName: string,
            contacts: contactsType
            photos: {
                small: string,
                large: string
            }
        }
    }
}
