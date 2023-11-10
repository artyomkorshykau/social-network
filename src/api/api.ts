import axios from "axios";
import {AuthMeType} from "../components/Header/HeaderContainer";
import {ProfileUserType} from "../components/Profile/ProfileContainer";

const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': '88c70fdf-4e66-4d91-860b-59030fc7971d'
    }
}
const instance = axios.create({baseURL: 'https://social-network.samuraijs.com/api/1.0/', ...settings})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    follow(id: number) {
        return instance.post(`follow/${id}`)
            .then(res => res.data)
    },
    unfollow(id: number) {
        return instance.delete(`follow/${id}`)
            .then(res => res.data)
    }

};

export const authAPI = {
    authMe() {
        return instance.get<AuthMeType>(`auth/me`)
            .then(res => res.data)
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}

export const profileAPI = {
    getProfile(userID: string) {
        return instance.get<ProfileUserType>(`profile/` + userID)
            .then(res => res.data)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put<ResponseType<{}>>(`profile/status`, {status})
    }
}

type ResponseType<T> = {
    resultCode: number
    messages: []
    data: T
}