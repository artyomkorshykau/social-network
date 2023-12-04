import axios from "axios";
import {AuthMeType} from "../components/Header/HeaderContainer";
import {ProfilePhoto, ProfileUserType} from "../components/Profile/ProfileContainer";
import header from "../components/Header/Header";

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
    },
    login(email: string, password: string, captcha: string | null = null, rememberMe: boolean = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}

export const profileAPI = {
    getProfile(userID: number | null) {
        return instance.get<ProfileUserType>(`profile/` + userID)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put<ResponseType>(`profile/status`, {status})
    },
    savePhoto(photo: File) {
        const formData = new FormData()
        formData.append('image', photo)
        return instance.put<ResponseType<ProfilePhoto>>(`profile/photo`, formData, {headers: {'Content-Type': 'multipart/form-data'}})
    },
    saveProfile(profile: ProfileUserType) {
        return instance.put<ResponseType>(`profile`, profile)
    },
}

export const securityAPI = {
    getCaptcha() {
        return instance.get<{ url: string }>(`security/get-captcha-url`)
    }
}

//---------------------------------TYPES---------------------------------
type ResponseType<T = {}> = {
    resultCode: number
    messages: [string]
    data: T
}

export type UserType = {
    id: number
    uniqueUrlName: string | null
    photos: {
        small: string | null
        large: string | null
    }
    followed: boolean
    name: string
    status: string
}
export type UsersDataType = {
    items: UserType[]
    totalCount: number
    error: string
}
