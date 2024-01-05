import {DataAuthMe} from "./types/types-api";
import {Response} from './types/types-api'
import {instance} from "./instance/instance-api";

export const authAPI = {
    async me() {
        let res = await instance.get<Response<DataAuthMe>>(`auth/me`);
        return res.data;
    },
    async login(email: string, password: string, captcha: string | null = null, rememberMe: boolean = false) {
        let res = await instance.post<Response<{ userId: number }>>(`auth/login`, {
            email,
            password,
            rememberMe,
            captcha
        });
        return res.data;
    },
    async logout() {
        let res = await instance.delete<Response>(`auth/login`);
        return res.data;
    }
}