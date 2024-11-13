import axios, { AxiosError } from 'axios'
import { Diary, NewDiary } from './types'

const baseUrl = 'http://localhost:3000/api/diaries'

export const getAllDiaries = () => {
    return axios.get<Diary[]>(baseUrl).then(response => response.data)
}

export const createDiary = (object: NewDiary) => {
    return axios.post<NewDiary>(baseUrl, object, {
        headers: {
            "Content-Type": "application/json",  // Ensure correct content-type is set
        }
    }).then(response => response.data)
    .catch(e => {
        const error = e as AxiosError
        const errorMessage = error.response.data.error[0]
        return Promise.reject(errorMessage);
    })
}