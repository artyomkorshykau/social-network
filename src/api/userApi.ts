import {instance} from "./common.api";
import {UsersData} from "./types/typesApi";
import {Response} from "./types/typesApi";

export const usersAPI = {
    async getUsers(currentPage: number = 1, pageSize: number = 10, term: string, friend: null | boolean = null) {
        let res = await instance.get<UsersData>(`users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend === null ? '' : `&friend${friend}`));
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