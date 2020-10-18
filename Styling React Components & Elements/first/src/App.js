import React, { Component } from 'react';
//import React, { useState } from 'react';
import './App.css';
// import styled from 'styled-components';
// import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';


class App extends Component {
  
  state = {
    persons : [
      {id : 'asdf1', name : 'Max', age : 28},
      {id : 'qrwv1', name : 'Manu', age : 29},
      {id : 'advd1', name : 'Stephanie', age : 26}
    ],
    otherState : 'Some Value',
    showPersons : false
  }
  
  
  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
        return p.id === id;
    });
    
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons : persons
    });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({
      persons : persons
    });
  }

  togglePersonHandler =  () =>  {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons : !doesShow
    });
  }

  render() {
    // const StyledButton = styled.button` 
    // background-color : ${props => props.alt ? 'red' : 'green'};
    // color: white;
    // border : 1px solid blue;
    // font : inherit;
    // padding : 8px;
    // cursor : pointer;
    // &:hover {
    //   background-color:${props => props.alt ? 'salmon' : 'lightgreen'};;
    //   color:black;
    // }`;

    let persons = null;

    if(this.state.showPersons){
      persons =( 
        <div>
            {
            this.state.persons.map((person, index) => {
            return <Person 
            name={person.name} 
            age={person.age} 
            click={() => {this.deletePersonHandler(index)} }
            changed={(event) => {this.changeNameHandler(event,person.id)}}
            key={person.id}/>
            })
            }
        </div>
    );
    // style.backgroundColor = 'red';
    // style[':hover'] = {
    //   backgroundColor:'salmon',
    //   color:'black'
    // }
    }
    
    const classes = [];

    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <= 1){
      classes.push('bold');
    }

    return (
      // <StyleRoot>
        <div className="App">
          <h1>Hi I'm a React app</h1>
          <p className={classes.join(' ')}>This is Working.</p>
          <button className='button'onClick = {this.togglePersonHandler}>Toggle Persons</button>
          {persons}
        </div>
      // </StyleRoot>
      );

  }
}

// export default Radium(App);
export default App;