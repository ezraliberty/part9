

interface CalculatedValue {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
}

function calculateExercises(hours: number[], duration: number): CalculatedValue {
    const periodLength = hours.length;
    const trainingDays = hours.filter(h => h > 0).length
    const success = trainingDays > 6;
    let rating = 0
    let ratingDescription = ''
    if (trainingDays < 3) {
        rating = 1
        ratingDescription = 'Poor Performance. You can do better!!'
    } else if (trainingDays < 6) {
        rating = 2
        ratingDescription = 'Well Well Consistency is Key'
    } else {
        rating = 3
        ratingDescription = 'Boss Moves! 10/10'
    }
    const target = duration
    const average = hours.reduce((a, c) => a + c, 0) / periodLength

    return {
        periodLength,
        trainingDays,
        success,
        rating,
        ratingDescription,
        target,
        average
    }
}

const hours = Array(process.argv[2])
const duration = Number(process.argv[3])

console.log(calculateExercises(hours, duration))