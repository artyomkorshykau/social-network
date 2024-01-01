import {ChatMessage} from "../pages/ChatPage/ChatPage";

type Subscriber = (messages: ChatMessage[]) => void

let subscribers: Subscriber[] = []

let socket: WebSocket | null = null

const closeHandler = () => {
    setTimeout(createChannel, 3000)
}

const messageHandler = (event: MessageEvent) => {
    const newMessage = JSON.parse(event.data)
    subscribers.forEach(s => s(newMessage))
}

function createChannel() {
    socket?.removeEventListener('close', closeHandler)
    socket?.close()
    socket = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    socket.addEventListener('close', closeHandler)
    socket.addEventListener('message', messageHandler)
}

export const chatApi = {
    subscribe(callback: Subscriber) {
        subscribers.push(callback)

        return () => {
            subscribers = subscribers.filter(s => s !== callback)
        }
    },
    unsubscribe(callback: Subscriber) {
        subscribers = subscribers.filter(s => s !== callback)
    },
    sendMessage(message: string) {
        socket?.send(message)
    },

    createConnection() {
        createChannel()
    },
    deleteConnection() {
        subscribers = []
        socket?.removeEventListener('close', closeHandler)
        socket?.removeEventListener('message', messageHandler)
        socket?.close()
    }

}