export enum ResultCodes {
    Success = 0,
    Error = 1,
    NeedCaptcha = 10
}
export namespace APITypes {
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
        export type onlyResultAPIType = {
            resultCode: ResultCodes
            messages: string[],
            data: any
        }
    }
}