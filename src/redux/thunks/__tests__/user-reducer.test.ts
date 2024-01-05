import {usersAPI} from "../../../api/user-api";
import {Response} from "../../../api/types/types-api";
import {ResultCode} from "../../../common/enums/response";
import {actions} from "../../actions/actions";
import {thunks} from "../thunks";

jest.mock('../../../api/user-api')
const userApiMock = usersAPI as jest.Mocked<typeof usersAPI>

const dispatchMock = jest.fn()
const getStateMock = jest.fn()

beforeEach(() => {
    dispatchMock.mockClear()
    getStateMock.mockClear()
    userApiMock.follow.mockClear()
    userApiMock.unfollow.mockClear()
})

const res: Response = {
    resultCode: ResultCode.SUCCEED,
    messages: ['sdsd'],
    data: {}
}

userApiMock.follow.mockReturnValue(Promise.resolve(res))
userApiMock.unfollow.mockReturnValue(Promise.resolve(res))

test('Success follow thunk', async () => {
    const thunk = thunks.follow(1)

    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleIsFollowing(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.follow(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleIsFollowing(false, 1))
})