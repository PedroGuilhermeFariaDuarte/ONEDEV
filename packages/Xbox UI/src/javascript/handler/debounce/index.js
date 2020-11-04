let time = null

function debounce(callback, args, delay = 1000) {
    if (time) {
        clearTimeout(time)
    }

    time = setTimeout(callback(args), delay)
}
