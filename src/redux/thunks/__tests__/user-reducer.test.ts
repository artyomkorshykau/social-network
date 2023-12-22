import {usersAPI} from "../../../api/userApi";
import {Response} from "../../../api/types/typesApi";
import {ResultCode} from "../../../common/enums/Response";
import {follow, toggleIsFollowing} from "../../actions/actions";
import {followTC} from "../thunks";

jest.mock('../../../api/userApi')
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

test('Success follow thunk', async () => {
    userApiMock.follow.mockReturnValue(Promise.resolve(res))
    userApiMock.unfollow.mockReturnValue(Promise.resolve(res))

    const thunk = followTC(1)
    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, toggleIsFollowing(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, follow(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, toggleIsFollowing(false, 1))
})