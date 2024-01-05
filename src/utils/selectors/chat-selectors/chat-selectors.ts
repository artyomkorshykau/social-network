import {AppState} from "../../../redux/store/store";

export const getChatMessages = (state: AppState) => state.chat.messages
export const getSocketStatus = (state: AppState) => state.chat.status



