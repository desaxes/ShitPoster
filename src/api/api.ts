import React from "react";
import axios from "axios";
import { APITypes } from "../api-types";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: { "API-KEY": "568f7a3f-f1e5-4bdb-af65-e3569e78f4b7" }
})
const userAPI = {
    getUsers(pageSize = 5, pageNumber = 1, term = '') {
        return (instance.get<APITypes.userAPITypes.getUsersType>("users?count=" +
            pageSize + "&page=" + pageNumber + '&term=' + term).then(response => response.data))
    },
    getSubUsers() {
        return (instance.get<APITypes.userAPITypes.getUsersType>("users?friend=" + true + "&count=100").then(response => response.data))
    },
    subUser(id: number) {
        return (instance.post<APITypes.CommonAPITypes.onlyResultAPIType>("follow/" + id, {},).then(response => response.data.resultCode))
    },
    unsubUser(id: number) {
        return (instance.delete<APITypes.CommonAPITypes.onlyResultAPIType>("follow/" + id,).then(response => response.data.resultCode))
    },
    getFollowInfo(id: number) {
        return (instance.get<boolean>('follow/' + id).then(response => response.data))
    }
}
const securityAPI = {
    captcha() {
        return (instance.get<APITypes.securityAPITypes.captchaType>("security/get-captcha-url").then(response => response))
    }
}

const authAPI = {
    login(email: string, password: string, rememberMe: boolean, captcha: string) {
        return (instance.post<APITypes.authAPITypes.loginType>("auth/login", { email, password, rememberMe, captcha }).then(response => response.data.resultCode))
    },
    logout() {
        return (instance.delete<APITypes.CommonAPITypes.onlyResultAPIType>("auth/login").then(response => response.data.resultCode))
    },
    auth() {
        return (instance.get<APITypes.authAPITypes.authType>("auth/me",).then(response => response.data))
    },
    setUserPhoto(img: string) {
        const formData = new FormData()
        formData.append("image", img)
        return (instance.put<APITypes.CommonAPITypes.onlyResultAPIType>("profile/photo", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => response.data))
    },
    setUserInfo(profile: profileType) {
        return (instance.put<APITypes.CommonAPITypes.onlyResultAPIType>("profile", profile).then(response => response.data))
    }
}

const profileAPI = {
    getUserProfile(userid: number) {
        return (instance.get<APITypes.profileAPITypes.getUserProfileType>("profile/" + userid).then(response => response.data))
    },
    getStatus(userid: number) {
        return (instance.get<string>("profile/status/" + userid).then(response => response.data))
    },
    putStatus(status: string) {
        return (instance.put<APITypes.CommonAPITypes.onlyResultAPIType>("profile/status", { status: status }).then(response => response.data))
    }
}
export { userAPI, authAPI, profileAPI, securityAPI }
