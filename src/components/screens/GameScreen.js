import React from "react";
import { useSelector } from "react-redux";

const GameScreen = () => {
    const questions = useSelector(state => state.questions);
    const playerInfo = useSelector(state => state.playerInfo);

    return (
        <p>GAME SCREEN</p>
    );
};

export default GameScreen;