import axios from 'axios'
import (Diary) from './types'

baseUrl = 'http://localhost:3001/diaries'

export const getAllDiaries = () => {
    return axios.get<Diary[]>(baseUrl).then(response => response.data)
}

export const createDiary = (object: NewDiary) => {
    return axios.post<Diary>(baseUrl, object).then(response => response.data)
}