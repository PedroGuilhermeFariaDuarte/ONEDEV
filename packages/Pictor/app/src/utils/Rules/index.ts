// Types
import { IChatting, IChattingEvent } from "../../components/subNavigations/Chat/types"

// Regra de negocio para enviar um convite [BUG] Double message
export function handlerSendInvite(OldsInvites: Array<IChatting>, data: IChattingEvent, dataUser: any) {
    let newChatting = {}
    let existChatting = OldsInvites.find((item) => item?.idTarget === data?.target?.idTarget)

    if (existChatting) {
        existChatting?.messageFrom?.push({
            content: data?.from?.message || '',
            dateSend: data?.from?.dataInvite || ''
        })
    } else {
        newChatting = {
            idTarget: data?.target.idTarget,
            idFrom: dataUser?.id,
            fullName: data?.target.fullName,
            username: data?.target.username,
            description: data?.target.description,
            distance: data?.target.distance,
            messageFrom: [ {
                content: data?.from.message,
                dateSend: data?.from.dataInvite
            } ],
            messageTo: []
        }
    }

    return Object.getOwnPropertyNames(newChatting).length > 0
        ? { newChat: true, newChatting }
        : { newChat: false, item: { existChatting } }
}

// Regra de negocio para receber um convite
export function handlerReceiveInvite(OldsInvites: Array<IChatting>, data: IChattingEvent, dataUser: any) {
    let newChatting = {}

    let existChatting = OldsInvites.find((item) => item?.idTarget === data?.from?.idFrom)

    if (existChatting) {
        existChatting?.messageTo?.push({
            content: data?.from?.message || '',
            dateSend: data?.from?.dataInvite || ''
        })
    } else {
        newChatting = {
            idTarget: data?.from?.idFrom,
            fullName: data?.from?.fullName,
            username: data?.from?.username,
            description: data?.from?.description,
            distance: data?.from?.distance,
            messageFrom: [],
            messageTo: [ {
                content: data?.from?.message,
                dateSend: data?.from?.dataInvite
            } ]
        }
    }

    return Object.getOwnPropertyNames(newChatting).length > 0
        ? { newChat: true, newChatting }
        : { newChat: false, item: { existChatting } }
}
