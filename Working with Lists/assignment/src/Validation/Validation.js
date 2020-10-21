import React from 'react';
import './Validation.css';

const validation = (props) => {
    let text = 'Text Long Enough';
    if(props.inputLength <= 5){
        text = 'Text too Short';
    }
    return(
    <div>
        <p>{text}</p>
    </div>
    );
}

export default validation;