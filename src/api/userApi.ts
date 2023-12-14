import {instance} from "./common.api";
import {UsersData} from "./types/typesApi";
import {Response} from "./types/typesApi";

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number) {
        return instance.get<UsersData>(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
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