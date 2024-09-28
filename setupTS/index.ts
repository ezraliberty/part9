import express from "express"
import { calculateBmi } from "./bmiCalculator"
const app = express()


app.get("/hello", (_req, res) => {
    res.send("Hello Full Stack!")
})

app.get("/bmi", (req, res) => {
    const weight = Number(req.query.weight);
    const height = Number(req.query.height);

    if (isNaN(height) || isNaN(weight)) {
        res.status(400).json({error: 'malformatted parameters'});
        return;
    }

    const bmi = calculateBmi(weight, height);
    res.json({ weight, height, bmi });
})

const PORT = 3006

app.listen(PORT, () => {
    console.log(`APP is running on PORT: ${PORT}`)
})