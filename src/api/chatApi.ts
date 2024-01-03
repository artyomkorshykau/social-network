import {ChatMessageApi} from "../pages/ChatPage/ChatPage";

type Subscriber = MessageReceivedSubscriber | StatusChangedSubscriber
type MessageReceivedSubscriber = (messages: ChatMessageApi[]) => void
type StatusChangedSubscriber = (status: EventStatus) => void
export type EventStatus = 'pending' | 'ready' | 'error'

let subscribers = {
    'message-received': [] as MessageReceivedSubscriber[],
    'status-changed': [] as StatusChangedSubscriber[]
}

let socket: WebSocket | null = null

type Event = 'message-received' | 'status-changed'

const closeHandler = () => {
    notifyStatusChanged('pending')
    alert('The connection to the channel is lost. Auto-connection after 3 seconds.')
    setTimeout(createChannel, 3000)
}

const messageHandler = (event: MessageEvent) => {
    const newMessage = JSON.parse(event.data)
    subscribers["message-received"].forEach(sub => sub(newMessage))
}
const openHandler = () => {
    notifyStatusChanged('ready')
}
const errorHandler = () => {
    notifyStatusChanged('error')
    alert('Please refresh page.')
}

const cleanup = () => {
    socket?.removeEventListener('close', closeHandler)
    socket?.removeEventListener('message', messageHandler)
    socket?.removeEventListener('open', openHandler)
    socket?.removeEventListener('error', errorHandler)
    socket?.close()
}

const notifyStatusChanged = (status: EventStatus) => {
    subscribers["status-changed"].forEach(sub => sub(status))
}

function createChannel() {
    cleanup()
    socket = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    notifyStatusChanged('pending')
    socket.addEventListener('close', closeHandler)
    socket.addEventListener('message', messageHandler)
    socket.addEventListener('open', openHandler)
    socket.addEventListener('error', errorHandler)
}

export const chatApi = {
    subscribe(event: Event, callback: Subscriber) {
        // @ts-ignore
        subscribers[event].push(callback)

        return () => {
            // @ts-ignore
            subscribers[event] = subscribers[event].filter(sub => sub !== callback)
        }
    },
    unsubscribe(event: Event, callback: Subscriber) {
        // @ts-ignore
        subscribers[event] = subscribers[event].filter(sub => sub !== callback)
    },
    sendMessage(message: string) {
        socket?.send(message)
    },

    createConnection() {
        createChannel()
    },
    deleteConnection() {
        subscribers["message-received"] = []
        subscribers["status-changed"] = []
        cleanup()
    }

}