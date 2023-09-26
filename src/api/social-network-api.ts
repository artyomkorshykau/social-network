export type UsersInfoType = {
    id: number
    uniqueUrlName: string | null
    photos: {
        small: string | null
        large: string | null
    }
    followed: boolean
    name: string
    status: string
}
export type UsersDataType = {
    items: UsersInfoType[]
    totalCount: number
    error: string
}