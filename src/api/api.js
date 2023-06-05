import React from "react";
import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL:"https://social-network.samuraijs.com/api/1.0/"
})

const userAPI = {
    getUsers (pageSize = 5, pageNumber = 1){
        return (instance.get("users?count=" +
            pageSize + "&page=" + pageNumber).then(response => response.data))
    },
    subUser(id){
        return (instance.post("follow/" + id, {},).then(response => response.data.resultCode))
    },
    unsubUser(id){
        return (instance.delete("follow/" + id,).then(response => response.data.resultCode))
    },
    getUserProfile(userid){
        return (instance.get("profile/"+userid).then(response=>response.data))
    }
}
export { userAPI }
