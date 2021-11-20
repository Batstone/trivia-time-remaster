import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const CurrentQuestion = props => {
    const [currentPlayer, setCurrentPlayer] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [nextTurn, setNextTurn] = useState(true);

    let playerName = useSelector(state => state.playerInfo[currentPlayer].name);
    let questions = useSelector(state => state.playerInfo[currentPlayer].questions);

    const numberOfPlayers = useSelector(state => state.numberOfPlayers);

    // Set up the scoreboard
    const scoreboardSetup = [];
    useEffect(() => {
        for (let i = 0; i < numberOfPlayers; i++) {
            const playerNumber = i + 1
            scoreboardSetup.push(0)
        }

        setTimeout(() => {
            setNextTurn(false);
        }, 3000)
    }, []);

    const [scoreboard, setScoreboard] = useState(scoreboardSetup);

    console.log(scoreboard)

    let question = questions[currentQuestion].question;
    let correctAnswer = questions[currentQuestion].correct_answer
    let answers = [correctAnswer, ...questions[currentQuestion].incorrect_answers];


    const setNextPlayerTurn = () => {
        setNextTurn(true);

        setTimeout(() => {
            setNextTurn(false);
        }, 3000)
    };

    const onClickHandler = (selection) => {

        if (selection === correctAnswer) {
            // const score = [...scoreboard];

            // score[currentPlayer]++

            setScoreboard(prevState => [...prevState, prevState[setCurrentPlayer]++])
        }

        console.log(currentQuestion)

        if (currentQuestion !== 2) {
            setCurrentQuestion(prevState => prevState + 1);

        } else {
            if (currentPlayer + 1 < numberOfPlayers) {
                setNextPlayerTurn()
                setCurrentPlayer(prevState => prevState + 1);
                setCurrentQuestion(0);
            } else {
                // set the score dispatch action
            }
        }
    }

    const shuffledAnswers = answers
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)

    return (
        <div>

            {!nextTurn ?
                <div>
                    <div>
                        {playerName}
                    </div>
                    <div>
                        {question}
                        {shuffledAnswers.map(answer => <button onClick={() => onClickHandler(answer)}>{answer}</button>)}
                    </div>
                </div>
                : ''}
            {nextTurn ? <p>{playerName}, Get Ready!</p> : ''}
        </div>
    )
};

export default CurrentQuestion;