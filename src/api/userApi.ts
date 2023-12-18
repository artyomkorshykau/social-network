import {instance} from "./common.api";
import {UsersData} from "./types/typesApi";
import {Response} from "./types/typesApi";

export const usersAPI = {
    async getUsers(currentPage: number = 1, pageSize: number) {
        let res = await instance.get<UsersData>(`users?page=${currentPage}&count=${pageSize}`);
        return res.data;
    },
    follow(id: number) {
        return instance.post<Response>(`follow/${id}`)
            .then(res => res.data)

    },
    unfollow(id: number) {
        return instance.delete<Response>(`follow/${id}`)
            .then(res => res.data)

    }

};