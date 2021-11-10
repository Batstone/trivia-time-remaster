import React from "react";

const NumberOfPlayers = (props) => {

    const handleChange = (e) => {
        props.numberOfPlayers(e.target.value);
    };

    return (
        <>
            <fieldset>
                <label htmlFor="playerForm">Number of Players</label>
                <select onChange={(e) => handleChange(e)}>
                    <option value="">Number of Players</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </fieldset>
        </>
    )
};

export default NumberOfPlayers;