import {instance} from "./common.api";
import {DataAuthMe} from "./types/typesApi";
import {Response} from './types/typesApi'

export const authAPI = {
    me() {
        return instance.get<Response<DataAuthMe>>(`auth/me`)
    },
    login(email: string, password: string, captcha: string | null = null, rememberMe: boolean = false) {
        return instance.post<Response<{ userId: number }>>(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete<Response>(`auth/login`)
    }
}