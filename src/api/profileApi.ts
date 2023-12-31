import {instance} from "./common.api";
import {UserProfile} from "./types/typesApi";
import {Response} from "./types/typesApi";
import {ProfilePhoto} from "../components/Profile/ProfilePage";

export const profileAPI = {
    async getProfile(userID: number | null) {
        let res = await instance.get<UserProfile>(`profile/${userID}`);
        return res.data;
    },
    async getStatus(userId: string) {
        let res = await instance.get<string>(`profile/status/${userId}`);
        return res.data;
    },
    async updateStatus(status: string) {
        let res = await instance.put<Response>(`profile/status`, {status});
        return res.data;
    },
    async savePhoto(photo: File) {
        const formData = new FormData()
        formData.append('image', photo)
        let res = await instance.put<Response<ProfilePhoto>>(`profile/photo`, formData, {headers: {'Content-Type': 'multipart/form-data'}});
        return res.data;
    },
    async saveProfile(profile: UserProfile) {
        let res = await instance.put<Response>(`profile`, profile);
        return res.data;
    },
}