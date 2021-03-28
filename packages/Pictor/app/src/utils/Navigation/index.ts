export function handlerSetNavigationID(nextPageID: string, callback: Function, prevPageID: string = ""): boolean {
    if (prevPageID.trim() !== '' && prevPageID.trim() !== nextPageID) {
        callback(nextPageID)
        return true;
    }

    return false
}
