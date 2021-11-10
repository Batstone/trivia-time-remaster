import React from "react";

const SelectCategory = (props) => {

    const handleChange = (e) => {
        props.categorySelection(e.target.value);
    };

    return (
        <>
            <fieldset>
                <label htmlFor="playerForm">Category Selection</label>
                <select onChange={(e) => handleChange(e)}>
                // Value key corresponds with API values
                    <option value="">Category</option>
                    <option value="9">General Knowledge</option>
                    <option value="27">Animals</option>
                    <option value="29">Comics</option>
                    <option value="11">Movies</option>
                    <option value="17">Science And Nature</option>
                </select>
            </fieldset>
        </>
    );
};

export default SelectCategory;