interface CalculatedValue {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
}

function calculateExercises(hours: number[], target: number) : CalculatedValue {
    const periodLength = hours.length;
    const trainingDays = hours.filter(h => h > 0).length
    const success = hours.length > 6;
    const rating = 
}
