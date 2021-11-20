import React, { useState, useEffect } from "react";

const Timer = () => {

    const [seconds, setSeconds] = React.useState(30);

    useEffect(() => {
        if (seconds > 0) {
            setTimeout(() => setSeconds(seconds - 1), 1000);
        } else {
            setSeconds('BOOOOM!');
        }
    });

    return (
        <>
            {seconds}
        </>

    )
};

export default Timer;