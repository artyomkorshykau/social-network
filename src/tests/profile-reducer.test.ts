import profileReducer, {initialState} from "../redux/profile-reducer";
import {addPostAC, deletePostAC} from "../redux/actions/actions";

it('new post should be added', () => {
    let action = addPostAC('it-kamasutra.com')
    let newState = profileReducer(initialState, action)

    expect(newState.posts.length).toBe(3)
})

it('after delete length should be decrement', () => {
    let action = deletePostAC('1')
    let newState = profileReducer(initialState, action)

    expect(newState.posts.length).toBe(1)
})

it('after delete length shouldn`t be decrement if id is incorrect', () => {
    let action = deletePostAC('5')
    let newState = profileReducer(initialState, action)

    expect(newState.posts.length).toBe(2)
})

