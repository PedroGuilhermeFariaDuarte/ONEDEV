require("dotenv").config()
import App from "./App"

App.listen(process.env.API_PORT, () => {
    console.log(`Pictor WebSockt, online at ${process.env.API_PORT}`)
})
