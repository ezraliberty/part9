import express from "express"
const app = express()

app.get("/hello", (_req, res) => {
    res.send("Hello Full Stack!")
})

const PORT = 3006

app.listen(PORT, () => {
    console.log(`APP is running on PORT: ${PORT}`)
})