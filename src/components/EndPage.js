import React, {useContext} from 'react'
import { Questions } from '../Helpers/QuestionBank'
import { QuizContext } from '../Helpers/Contexts'
const EndPage = () => {

    const {score, setScore, setGameState} =useContext(QuizContext)

    const restartQuiz = () => {
        setScore(0)
        setGameState("menu")
    }

    return (
        <div className="endPage">
            <h1> Finish QUiz</h1>
            <h3>
                {score} / {Questions.length}
            </h3>
            <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
    )
}

export default EndPage
