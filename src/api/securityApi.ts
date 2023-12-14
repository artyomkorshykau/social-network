import {instance} from "./common.api";
import {Response} from "./types/typesApi";

export const securityAPI = {
    getCaptcha() {
        return instance.get<{ url: string }>(`security/get-captcha-url`)
    }
}