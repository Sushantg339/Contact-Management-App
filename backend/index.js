import app from "./src/app.js";
import { config } from "dotenv";
import connectToDB from "./src/config/db.js";
config()

const PORT = process.env.PORT || 3000
app.listen(PORT , ()=>{
    console.log(`server is running on port ${PORT}`)
    connectToDB()
})