import {instance} from "./common.api";
import {ProfilePhoto} from "../components/Profile/ProfileContainer";
import {UserProfile} from "./types/typesApi";
import {Response} from "./types/typesApi";

export const profileAPI = {
    getProfile(userID: number | null) {
        return instance.get<UserProfile>(`profile/${userID}`)
    },
    getStatus(userId: string) {
        return instance.get<string>(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put<Response>(`profile/status`, {status})
    },
    savePhoto(photo: File) {
        const formData = new FormData()
        formData.append('image', photo)
        return instance.put<Response<ProfilePhoto>>(`profile/photo`, formData, {headers: {'Content-Type': 'multipart/form-data'}})
    },
    saveProfile(profile: UserProfile) {
        return instance.put<Response>(`profile`, profile)
    },
}