export interface IContextChat {
    chat: Array<IChatting> | Array<any>
    setChat: Function,
    chatIDFocus: string,
    setChatIDFocus: Function
}

export interface IChatting {
    idTarget: string
    idFrom: string
    fullName: string
    username: string
    description: string
    distance: string,
    messageFrom?: Array<{
        content: string,
        dateSend: string
    }>,
    messageTo?: Array<{
        content: string,
        dateSend: string
    }>
}
