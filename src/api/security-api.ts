import {instance} from "./common/common-api";

export const securityApi = {
    async getCaptcha() {
        let res = await instance.get<{ url: string }>(`security/get-captcha-url`);
        return res.data;
    }
}