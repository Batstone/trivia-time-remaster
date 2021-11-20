import React from "react";
import { useSelector } from "react-redux";

const PlayerInfo = () => {

    const info = useSelector(state => state.currentPlayerInfo);
    console.log(info)

    return (
        <p>{info.currentPlayer.Name}</p>
    )
};

export default PlayerInfo;