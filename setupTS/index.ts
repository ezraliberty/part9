import express from "express";
import { calculateBmi } from "./bmiCalculator";
import { calculateExercises } from "./exerciseCalculator";
const app = express();

app.use(express.json());

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
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const {daily_exercises, target} = req.body;

    if(!daily_exercises || !target) {
        res.status(400).send({error: "parameters missing"});
    }

    if(!Array.isArray(daily_exercises) || isNaN(Number(target))) {
        res.status(400).send({error: "malformatted parameters"});
    }

    const exercises = calculateExercises(daily_exercises as number[], Number(target));
    res.json({exercises});
});

const PORT = 3006;

app.listen(PORT, () => {
    console.log(`APP is running on PORT: ${PORT}`);
});