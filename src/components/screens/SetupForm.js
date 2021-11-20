import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Player from '../../models/player';

import SelectCategory from "../UI/SelectCategory";
import NumberOfPlayers from "../UI/NumberOfPlayers";
import Button from "../UI/Button";

import classes from './SetupForm.module.css';

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
        let names = [...playerNames];

        names[index] = e.target.value;

        setPlayerNames(names);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        // Checking to see if all player names have been entered
        if (playerNames.indexOf('') === -1) {
            const playerInfo = playerNames.map((playerName, index) => {
                return {
                    id: index + 1,
                    name: playerName,
                    avatar: avatars[index],
                    questions: [],
                    score: 0
                };
            });

            // // Set the player info to redux global state
            dispatch(gameInfoActions.setPlayerInfo(playerInfo));

            // // Length of the player names array to get the total number of players
            dispatch(getQuestionData(playerNames.length, categorySelection));
        };
    };

    return (
        <form onSubmit={e => onSubmitHandler(e)}>
            <NumberOfPlayers numberOfPlayers={numberOfPlayersHandler} />
            {<SelectCategory categorySelection={categorySelectionHandler} />}
            <div className={classes.names}>
                {avatars.map((avatar, index) => {
                    return (
                        <div key={avatar} className={classes.card} >
                            <div className={classes['name-img-container']}>
                                <img src={avatar} alt="The player avatar" />
                            </div>
                            <label htmlFor={`playerName${index}`}>Player Name:</label>
                            <input id={`playerName${index}`} onChange={e => onChangeHandler(e, index)} value={playerNames[index]} />
                        </div>
                    );
                })}
            </div>
            <Button>PLAY!</Button>
        </form>
    )
};

export default Setup;