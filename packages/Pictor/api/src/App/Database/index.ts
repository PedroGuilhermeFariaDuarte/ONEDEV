import mongoose from "mongoose"

class Database {
    host: string | undefined = ""
    username: string | undefined = ""
    password: string | undefined = ""
    database: string | undefined = ""

    constructor(host: string | undefined = process.env.DB_HOST,
        username: string | undefined = process.env.DB_USERNAME,
        password: string | undefined = process.env.DB_PASSWORD,
        database: string | undefined = process.env.DB_DATABASE) {
        this.host = host
        this.username = username
        this.password = password
        this.database = database
    }

    init() {
        try {
            /*
             In your localhost, you can use this URI with username and password OR the URI below

            `mongodb://${this.username}:${this.password}@/${this.host}/${this.database}?retryWrites=true&w=majority`
            */

            mongoose.connect(`mongodb://${this.host}/${this.database}?retryWrites=true&w=majority`, {
                useFindAndModify: true,
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
            }).then((_resolved) => {
                this.monitoring()
                console.log("Pictor DatabaseWarning: Database connected with success")
            }).catch(error => console.log(`Pictor DatabaseError: ${error.message}`))
        } catch (error) {
            console.log(`Pitcor DatabaseError: ${error.message}`)
        }
    }

    monitoring() {
        try {
            mongoose.connection.on("error", (error) => console.log(`Pictor DatabaseMonitoring: ${error.message} `))
        } catch (error) {
            console.log(`Pictor MonitoringError: ${error.message}`)
        }

    }
}

export default Database
