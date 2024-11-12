import { useState, useEffect } from 'react'
import { Diary } from './types'
import { getAllDiaries, createDiary } from './diaryService'
import DiaryItem from './DiaryItem'

const App = () => {
    const [diaries, setDiaries] = useState<Diary[]>([])
    const [newDiary, setNewDiary] = useState('')

    useEffect(()=>{
        getAllDiaries().then(data => {
            setDiaries(data)
        })
    }, [])

    const diaryCreation = (event: React.SyntheticEvent) => {
        event.preventDefault()
        createDiary({content: newDiary}).then(data => {
            setNewDiary(diaries.concat(data))
        })

        setNewDiary('')
    }

    return (
        <div>
            <h2>Add new entry</h2>
            <form onSubmit={diaryCreation}>
                <input type="date" value={} onchange={(event) => (event.target.value)} />
                <input type="radio" value={} onchange={(event) => (event.target.value)} />
                <input type="radio" value={} onchange={(event) => (event.target.value)} />
                <input value={} onchange={(event) => (event.target.value)} />  
            </form>

            <h2>Diary entries</h2>
            {diaries.map(diary => <DiaryItem key={diary.id} diary={diary} />)}
        </div>
    )
}

export default App
