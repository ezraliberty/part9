export interface Diary {
    id: number
    weather:
    visibility:
    date: string
    comment: string
}

export type NewDiary = Omit<Diary, 'id'>
