import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { gameInfoActions } from "../../store/gameInfo-slice";

import CurrentQuestion from "../game/CurrentQuestion";
import Timer from "../game/Timer";
import Button from "../UI/Button";

const GameScreen = () => {
    const [currentPlayer, setCurrentPlayer] = useState(1);

    const dispatch = useDispatch();

    return (
        <div>
            <Timer />
            <CurrentQuestion />
        </div>

    );
};

export default GameScreen;