import { gameInfoActions } from "./gameInfo-slice";

export const getQuestionData = (numOfPlayers, categorySelection) => {
    return async (dispatch) => {

        // Selected category
        const selectedCategory = categorySelection

        // Get 3 questions per player
        const numberOfQuestions = numOfPlayers * 3

        const getQuestions = async () => {
            // https://opentdb.com/api.php?amount=10&category=10&difficulty=medium&type=multiple
            const response = await fetch(`https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${selectedCategory}&difficulty=medium&type=multiple`);


            if (!response.ok) {
                throw new Error('Could not fetch question data')
            }

            const data = await response.json();
            return data.results;
        };

        try {
            const questionData = await getQuestions();
            dispatch(gameInfoActions.setQuestions(questionData));

        } catch (error) {
            console.log(error);
            dispatch(gameInfoActions.setQuestions(error));
        }




        // .then(response => {
        //     const res = response.data.results;

        //     // Useing DOMParser to get a string without crazy characters
        //     const parser = new DOMParser();
        //     res.map((question) => {
        //         question.incorrect_answers.forEach((incorrectAnswer, index) => {
        //             const dom = parser.parseFromString(incorrectAnswer, "text/html")
        //             const newString = dom.body.textContent;
        //             question.incorrect_answers[index] = newString;
        //         });
        //         const oldString = question.correct_answer
        //         const dom = parser.parseFromString(oldString, "text/html")
        //         const newString = dom.body.textContent;
        //         question.correct_answer = newString
        //     })
        //     res.map((question) => {
        //         const oldString = question.question;
        //         const dom = parser.parseFromString(oldString, "text/html")
        //         const newString = dom.body.textContent;
        //         question.question = newString
        //     })
        //     this.questionsSubmit(res, this.props.playerInfo)
        // })
    };
}