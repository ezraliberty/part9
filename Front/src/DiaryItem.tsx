import { Diary } from "./types"

const DiaryItem = ({date, visibility, weather, comment}: Diary) => (
    <div>
        <h3>{date}</h3>

        <p>visibility: {visibility}</p>
        <p>weather: {weather}</p>
        {comment && <p>Comment: {comment}</p>}
    </div>
)

export default DiaryItem