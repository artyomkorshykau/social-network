import usersReducer, {InitialState} from "../../users-reducer";
import {follow, unfollow} from "../actions";

let state: InitialState

beforeEach(() => {
    state = {
        users: [{
            id: 1,
            status: 'status 1',
            name: 'Artyom',
            followed: false,
            photos: {small: null, large: null},
            uniqueUrlName: 'artyom'
        }, {
            id: 2,
            status: 'status 2',
            name: 'Artyom',
            followed: false,
            photos: {small: null, large: null},
            uniqueUrlName: 'artyom'
        }, {
            id: 3,
            status: 'status 3',
            name: 'Artyom',
            followed: true,
            photos: {small: null, large: null},
            uniqueUrlName: 'artyom'
        }, {
            id: 4,
            status: 'status 4',
            name: 'Artyom',
            followed: true,
            photos: {small: null, large: null},
            uniqueUrlName: 'artyom'
        }],
        pageSize: 10,
        totalUserCount: 1,
        currentPage: 1,
        isFetching: true,
        isFollowing: []
    }
})
test('Followed success', () => {

    const newState = usersReducer(state, follow(2))

    expect((newState.users[0]).followed).toBeFalsy()
    expect(newState.users[1].followed).toBeTruthy()

})

test('Unfollow success', () => {
    const newState = usersReducer(state, unfollow(3))

    expect(newState.users[0].followed).toBeFalsy()
    expect(newState.users[2].followed).toBeFalsy()
})