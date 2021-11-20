import { createSlice } from '@reduxjs/toolkit';

const gameInfoSlice = createSlice({
    // Must have a name property
    name: 'gameInfo',
    // Set up the inital state
    initialState: {
        playerInfo: [],
        numberOfPlayers: 0,
        gameReady: false
    },
    reducers: {
        setPlayerInfo(state, action) {
            const playerInfo = action.payload;
            state.playerInfo = playerInfo;
            state.numberOfPlayers = playerInfo.length;

        },
        setQuestions(state, action) {
            const questions = action.payload;

            state.playerInfo.forEach((player, index) => {
                player.questions = questions[index];
            });

            state.gameReady = true;
        },
        // setCurrentPlayerInfo(state) {
        //     // if (!state.currentPlayerInfo) {
        //     //     state.currentPlayerInfo = {
        //     //         currentPlayer: state.playerInfo[0],
        //     //         questions: state.questions[0]
        //     //     }
        //     // }
        //     state.currentPlayerInfo = {
        //         currentPlayer: state.playerInfo[0],
        //         questions: state.questions[0]
        //     }
        // }
    }
});

// Export the actions object
export const gameInfoActions = gameInfoSlice.actions;

export default gameInfoSlice;