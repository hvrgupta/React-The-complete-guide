import React,{Component, /*Fragment*/} from 'react';
import classes from './Person.css';
// import Auxiliary from '../../../hoc/auxiliary';
import WithClass from '../../../hoc/WithClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';   

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

class Person extends Component {
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount(){
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render(){
        return (
            // <Fragment>
            <WithClass classes={classes.Person}>
            {this.context.authenticated ? <p>Authenticated !</p> : <p>Please Log in</p>} 
            <p onClick = {this.props.click}>I'm {this.props.name} and I am {this.props.age} years old.</p>
            <p>{this.props.children}</p>
            <input type="text" 
            // ref={(inputEl) => {this.inputElement = inputEl}}
            ref={this.inputElementRef}
            onChange={this.props.changed} 
            value={this.props.name}></input>
            </WithClass>
            // </Fragment>
        ); 
    }
    // const style = {
    //     '@media (min-width: 500px)' : {
    //         width:'450px'
    //     }
    // };      
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number, 
    changed: PropTypes.func
}

// export default Radium(person);
export default Person;