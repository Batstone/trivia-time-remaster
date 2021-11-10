import React from 'react';

const NamesAndAvatars = (props) => {
    const avatars = props.avatars;

    return (
        <>
            {
                avatars.map(avatar => {
                    return (
                        <div key={avatar}>
                            <img src={avatar} alt="The player avatar" />
                            <input />
                        </div>
                    );
                })
            }
        </>
    );
};

export default NamesAndAvatars;
