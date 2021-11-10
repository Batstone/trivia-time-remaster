import { createSlice } from '@reduxjs/toolkit';

const gameInfoSlice = createSlice({
    // Must have a name property
    name: 'gameInfo',
    // Set up the inital state
    initialState: {
        playerInfo: [],
        questions: [],
        currentScore: []
    },
    reducers: {
        setPlayerInfo(state, action) {
            const playerInfo = action.payload;
            state.playerInfo = playerInfo;
        },
        setQuestions(state, action) {
            const questions = action.payload;
            state.questions = questions;
        }
    }
});

// Export the actions object
export const gameInfoActions = gameInfoSlice.actions;

export default gameInfoSlice;