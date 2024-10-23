// siin käivitan serverit

import express from "express";
import dotenv from "dotenv"  //salastatud väärtuste pärast
import todoRouter from "./routes/todo.router.js";

dotenv.config()  //get saame browserist kätte, POST ei saa

const PORT = process.env.PORT || 3006 //lambi port ja PORT läheb app.listen ka aga käsk et võta .env PORT ja kui seal ei ole siis siit.

const app = express() //teen mooduli ja käivitan expressi seal sees

app.use(express.json())

app.use('/api/v1', todoRouter)

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`); //
})  // kuulab rakenduse siseseid muudatusi