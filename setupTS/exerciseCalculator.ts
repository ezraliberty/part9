interface ArgsValue {
    value1: number,
    value2: number[]
}


const parseArguments = (args: string[]): ArgsValue => {
    return {
        value1: Number(args[2]),
        value2: args.slice(3).map(Number).filter(num => !isNaN(num))
    };
};


interface CalculatedValue {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
}

export function calculateExercises(hours: number[], duration: number): CalculatedValue {
    const periodLength = hours.length;
    const trainingDays = hours.filter(h => h > 0).length;
    const success = trainingDays > 6;
    let rating = 0;
    let ratingDescription = '';
    if (trainingDays < 3) {
        rating = 1;
        ratingDescription = 'Poor Performance. You can do better!!';
    } else if (trainingDays < 7) {
        rating = 2;
        ratingDescription = 'Well Well Consistency is Key';
    } else {
        rating = 3;
        ratingDescription = 'Boss Moves! 10/10';
    }
    const target = duration;
    const average = hours.reduce((a, c) => a + c, 0) / periodLength;

    return {
        periodLength,
        trainingDays,
        success,
        rating,
        ratingDescription,
        target,
        average
    };
}

if (require.main === module) {
    const { value1, value2 } = parseArguments(process.argv);

    console.log(calculateExercises(value2, value1));
}