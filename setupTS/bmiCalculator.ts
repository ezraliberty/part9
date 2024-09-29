export function calculateBmi(height: number, weight: number): string {
    const m = height / 100;
    const bmi = weight / (m * m);
    if (bmi < 18.5) {
        return "Underweight range"
    } else if (bmi < 24.9) {
        return "Normal range"
    } else if (bmi < 29.9) {
        return "Overweight range"
    } else {
        return "Obese range"
    }
}

if (require.main === module) {
    const height = Number(process.argv[2]);
    const weight = Number(process.argv[3]);

    console.log(calculateBmi(height, weight))
}