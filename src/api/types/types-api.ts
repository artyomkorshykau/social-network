import {ResultCode} from "../../common/enums/response";
import {ProfileContacts, ProfilePhoto} from "../../pages/profile/profile";

export type Response<T = {}> = {
    resultCode: ResultCode
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
export type UsersData = {
    items: UserType[]
    totalCount: number
    error: string
}

export type UserProfile = {
    aboutMe: string
    userId: number | null
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ProfileContacts
    photos: ProfilePhoto
}

export type AuthResponse = {
    data: DataAuthMe,
    "messages": [],
    "fieldsErrors": [],
    "resultCode": number
}

export type DataAuthMe = {
    id: number,
    login: string,
    email: string
}