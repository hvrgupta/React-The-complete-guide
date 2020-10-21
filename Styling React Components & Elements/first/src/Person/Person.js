import React from 'react';
import classes from './Person.css';

// import classes from './Person.module.css'; IF SCRIPT VERSION IS 2.X.X change name of file 
// to Person.module.css

// import styled from 'styled-components';
// import Radium from 'radium';
// import './Person.css'

// const StyledDiv = styled.div`
//             width: 60%;
//             margin: 15px auto;
//             padding: 16px;
//             border: 1px solid #eee;
//             box-shadow: 0 2px 3px #ccc;
//             text-align: center;

//             @media (min-width: 500px) {
//                 width:450px;
//             }`;

const person = (props) => {
    // const style = {
    //     '@media (min-width: 500px)' : {
    //         width:'450px'
    //     }
    // };
    return (
        <div className={classes.Person}>
        <p onClick = {props.click}>I'm {props.name} and I am {props.age} years old.</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    );        
};

// export default Radium(person);
export default person;