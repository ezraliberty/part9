import { useState, useEffect } from 'react'
import { Diary, NewDiary, Weather, Visibility } from './types'
import { getAllDiaries, createDiary } from './diaryService'
import DiaryItem from './DiaryItem'
import AlertComponent from './AlertComponent'

const App = () => {
    const [diaries, setDiaries] = useState<Diary[]>([])
    const [newDiary, setNewDiary] = useState<NewDiary>({
        weather: Weather.Sunny,
        visibility: Visibility.Great,
        date: '',
        comment: '',
    })
    const [showError, setShowError] = useState<string | null>(null);

    useEffect(() => {
        getAllDiaries().then(data => {
            setDiaries(data)
        })
    }, [])

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setNewDiary((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));
    };

    const handleWeatherChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewDiary((prevState) => ({
            ...prevState,
            weather: event.target.value as Weather,
        }));
    };

    const handleVisibilityChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setNewDiary((prevState) => ({
            ...prevState,
            visibility: event.target.value as Visibility,
        }));
    };

    const diaryCreation = (event: React.SyntheticEvent) => {
        event.preventDefault()
        const { weather, visibility, date, comment } = newDiary;
        createDiary({ weather, visibility, date, comment })
        .then((returnedDiary: Diary) => {
            setDiaries(diaries.concat(returnedDiary));
        }).catch((e) => {
            console.log('component e', e)
            handleError(`${e.validation}: ${e.message}`)
        })

        setNewDiary({
            weather: Weather.Sunny,
            visibility: Visibility.Great,
            date: '',
            comment: '',
        });

    }

    const handleError = (errorMessage: string) => {
        setShowError(errorMessage);
        setTimeout(() => {
          setShowError(null);
        }, 5000);
      };

    return (
        <div>
            <h2>Add new entry</h2>
            {showError && <AlertComponent message={showError} />}
            <form onSubmit={diaryCreation}>
                <label>Date:<input type="date" name='date' value={newDiary.date} onChange={handleInputChange} /> </label><br></br>
                <label>
                    Visibility:{Object.values(Visibility).map((v) => (
                    <div key={v}>
                        <input key={v}
                            type="radio"
                            name="visibility"
                            value={v}
                            checked={newDiary.visibility === v}
                            onChange={handleVisibilityChange}
                        />{v}
                    </div>
                ))}
                </label>
                <label>Weather:{Object.values(Weather).map((w) => (
                    <div key={w}>
                        <input
                            type="radio"
                            name='weather'
                            value={w}
                            checked={newDiary.weather === w}
                            onChange={handleWeatherChange}
                        />
                        {w}
                    </div>
                ))}
                </label>
                <label>comment<input name='comment' value={newDiary.comment} onChange={handleInputChange} /> </label>
                <button type='submit'>Create Diary</button>
            </form>

            <h2>Diary entries</h2>
            {diaries.map((diary) => 
                (<DiaryItem key={diary.id} {...diary} />
        
            ))}
        </div>
    )
}

export default App
