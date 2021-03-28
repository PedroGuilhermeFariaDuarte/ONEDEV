import redis from "redis"

export default () => {
    const client = redis.createClient({
        url: process.env.REDIS_URL,
        password: process.env.REDIS_PassWord,
        db: process.env.REDIS_DataBase,
        retry_strategy: function (options) {
            if (options.error && options.error.code === "ECONNREFUSED") {
                // End reconnecting on a specific error and flush all commands with
                // a individual error
                return new Error("The server refused the connection");
            }
            if (options.total_retry_time > 1000 * 60 * 60) {
                // End reconnecting after a specific timeout and flush all commands
                // with a individual error
                return new Error("Retry time exhausted");
            }
            if (options.attempt > 10) {
                // End reconnecting with built in error
                return undefined;
            }
            // reconnect after
            return Math.min(options.attempt * 100, 3000);
        },
    })

    client.on("ready", () => {
        console.log("Pictor RedisWarning: Connection was established")
    })

    client.on("connect", () => {
        console.log("Pictor RedisWarning: connected with success")
    })

    client.on("error", (err) => {
        console.log(`Pictor RedisError: ${err.message}`)
        client.quit()
    })

    client.on("end", () => {
        console.log("Pictor RedisWarning: The connection with server was closed")
    })

    client.on("warning", (error) => {
        console.log(`Pictor RedisWarning: ${error.message}`)
    })

    return client
}
