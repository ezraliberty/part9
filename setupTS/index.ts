import express from "express";
import { calculateBmi } from "./bmiCalculator";
import { calculateExercises } from "./exerciseCalculator";
const app = express();


app.get("/hello", (_req, res) => {
    res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
    const weight = Number(req.query.weight);
    const height = Number(req.query.height);

    if (isNaN(height) || isNaN(weight)) {
        res.status(400).json({error: 'malformatted parameters'});
        return;
    }

    const bmi = calculateBmi(weight, height);
    res.json({ weight, height, bmi });
});

app.post("/exercises", (req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const {daily_exercises, target} = req.body;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const exercises = calculateExercises(daily_exercises, Number(target));
    res.json({})
});

const PORT = 3006;

app.listen(PORT, () => {
    console.log(`APP is running on PORT: ${PORT}`);
});