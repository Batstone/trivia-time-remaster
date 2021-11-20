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

            // The array containing the questions
            const dataArray = data.results;

            let formattedData = [];
            let split;


            // Construct the question array so that contains arrays with three questions each
            while (dataArray.length > 0) {
                split = dataArray.splice(0, 3);
                formattedData.push(split);
            }

            return formattedData;
        };

        try {
            const questionData = await getQuestions();
            dispatch(gameInfoActions.setQuestions(questionData));
        } catch (error) {
            console.log(error);
            dispatch(gameInfoActions.setQuestions(error));
        }
    };
}