interface ArgsValue {
    value1: number,
    value2: number[]
}

const parseArguments = (args: string[]): ArgsValue => {
    if (args.length < 4) throw new Error('Not Enough Args')

    console.log(args)
}