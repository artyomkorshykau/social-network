import {instance} from "./common.api";
import {UsersData} from "./types/typesApi";
import {Response} from "./types/typesApi";

export const usersAPI = {
    async getUsers(currentPage: number = 1, pageSize: number) {
        let res = await instance.get<UsersData>(`users?page=${currentPage}&count=${pageSize}`);
        return res.data;
    },
    async follow(id: number) {
        let res = await instance.post<Response>(`follow/${id}`);
        return res.data;
    },
    async unfollow(id: number) {
        let res = await instance.delete<Response>(`follow/${id}`);
        return res.data;
    }

};