import axios, { AxiosError } from 'axios'
import { Diary, NewDiary } from './types'

const baseUrl = 'http://localhost:3000/api/diaries'

export const getAllDiaries = () => {
    return axios.get<Diary[]>(baseUrl).then(response => response.data)
}

export const createDiary = (object: NewDiary): Promise<Diary> => {
    return axios.post<Diary>(baseUrl, object)  // Change NewDiary to Diary here
        .then(response => response.data)
        .catch(e => {
            const error = e as AxiosError
            const errorMessage = error.response?.data?.error?.[0] || 'An error occurred'
            return Promise.reject(errorMessage);
        })
}