import React from 'react';

const userInput = (props) => {

    const inputStyle = {
        border : '2px solid red'
    }

    return <input style={inputStyle} type="text" onChange={props.changed} value={props.userName}/>
};

export default userInput;

