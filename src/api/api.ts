import React from "react";
import axios from "axios";
import { APITypes } from "../api-types";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: { "API-KEY": "568f7a3f-f1e5-4bdb-af65-e3569e78f4b7" }
})
const userAPI = {
    getUsers(pageSize = 5, pageNumber = 1) {
        return (instance.get("users?count=" +
            pageSize + "&page=" + pageNumber).then(response => response.data))
    },
    subUser(id: number) {
        return (instance.post("follow/" + id, {},).then(response => response.data.resultCode))
    },
    unsubUser(id: number) {
        return (instance.delete("follow/" + id,).then(response => response.data.resultCode))
    },
}
const securityAPI = {
    captcha() {
        return (instance.get("security/get-captcha-url").then(response => response))
    }
}

const authAPI = {
    login(email: string, password: string, rememberMe: boolean, captcha: string) {
        return (instance.post<APITypes.authAPITypes.loginType>("auth/login", { email, password, rememberMe, captcha }).then(response => response.data.resultCode))
    },
    logout() {
        return (instance.delete<APITypes.authAPITypes.onlyResultAPIType>("auth/login").then(response => response.data.resultCode))
    },
    auth() {
        return (instance.get<APITypes.authAPITypes.authType>("auth/me",).then(response => response.data))
    },
    setUserPhoto(img: string) {
        const formData = new FormData()
        formData.append("image", img)
        return (instance.put<APITypes.authAPITypes.onlyResultAPIType>("profile/photo", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => response.data))
    },
    setUserInfo(profile: profileType) {
        return (instance.put<APITypes.authAPITypes.onlyResultAPIType>("profile", profile).then(response => response.data))
    }
}

const profileAPI = {
    getUserProfile(userid: number) {
        return (instance.get("profile/" + userid).then(response => response.data))
    },
    getStatus(userid: number) {
        return (instance.get("profile/status/" + userid).then(response => response.data))
    },
    putStatus(status: string) {
        return (instance.put("profile/status", { status: status }).then(response => response.data))
    }
}
export { userAPI, authAPI, profileAPI, securityAPI }
