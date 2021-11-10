import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import SelectCategory from "../UI/SelectCategory";
import NumberOfPlayers from "../UI/NumberOfPlayers";

import Button from "../UI/Button";

import { gameInfoActions } from "../../store/gameInfo-slice";
import { getQuestionData } from "../../store/gameInfo-actions";


const avatarList = [
    "https://avatars.dicebear.com/api/bottts/example.svg?options[colors][]=blue",
    "https://avatars.dicebear.com/api/bottts/example.svg?options[colors][]=red",
    "https://avatars.dicebear.com/api/bottts/example.svg?options[colors][]=yellow",
    "https://avatars.dicebear.com/api/bottts/example.svg?options[colors][]=purple",
];

const Setup = () => {
    const [numberOfPlayers, setNumberOfPlayers] = useState(0);
    const [categorySelection, setCategorySelection] = useState('9');
    const [avatars, setAvatars] = useState([]);
    const [playerNames, setPlayerNames] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        const avatar = [];
        const players = [];

        for (let i = 0; i < numberOfPlayers; i++) {
            avatar.push(avatarList[i]);
            players.push('');
        };

        setAvatars(avatar);
        setPlayerNames(players);

    }, [numberOfPlayers]);

    const numberOfPlayersHandler = (num) => {
        setNumberOfPlayers(num);
    };

    const categorySelectionHandler = (category) => {
        setCategorySelection(category);
    };

    const onChangeHandler = (e, index) => {
        // setPlayerNames(prevState => [...state])

        let names = [...playerNames];

        names[index] = e.target.value;

        setPlayerNames(names);

        console.log(names);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        // Checking to see if all player names have been entered
        if (playerNames.indexOf('') === -1) {
            let playerInfo = [];

            for (let i = 0; i < playerNames.length; i++) {

                // Set up the info for each player
                playerInfo.push({
                    Name: playerNames[i],
                    Avatar: avatars[i],
                    Score: 0
                })
            }

            // Set the player info to redux global state
            dispatch(gameInfoActions.setPlayerInfo(playerInfo));

            // Length of the player names to get the total number of players
            dispatch(getQuestionData(playerNames.length, categorySelection));
        };
    };

    return (
        <form onSubmit={e => onSubmitHandler(e)}>
            <NumberOfPlayers numberOfPlayers={numberOfPlayersHandler} />
            <SelectCategory categorySelection={categorySelectionHandler} />
            {numberOfPlayers ? avatars.map((avatar, index) => {
                return (
                    <div key={avatar} >
                        <img src={avatar} alt="The player avatar" />
                        <label htmlFor={`playerName${index}`}>Player Name:</label>
                        <input id={`playerName${index}`} onChange={e => onChangeHandler(e, index)} />
                    </div>
                );
            }) : ''}
            <Button>PLAY!</Button>
        </form>
    )
};

export default Setup;