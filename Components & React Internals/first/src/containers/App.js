import React, { Component } from 'react';
//import React, { useState } from 'react';
import classes from './App.css';
// import styled from 'styled-components';
// import Radium, { StyleRoot } from 'radium';
// import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
import AuthContext from '../context/auth-context';

class App extends Component {
  
  constructor(props){
    super(props);
    console.log('constructor');
  }
  state = {
    persons : [
      {id : 'asdf1', name : 'Max', age : 28},
      {id : 'qrwv1', name : 'Manu', age : 29},
      {id : 'advd1', name : 'Stephanie', age : 26}
    ],
    otherState : 'Some Value',
    showPersons : false,
    showCockpit : true,
    changeCounter : 0,
    authenticated : false
  }
  
  static getDerivedStateFromProps(props,state){
    console.log('App.js Derived state',props);
    return state;
  }

  componentDidMount(){
    console.log('App.js componentDidMount');
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log('App.js shouldComponentUpdate');
    return true;
  }
  componentDidUpdate(){
    console.log('App.js componentDidUpdate');
  }
 
  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
        return p.id === id;
    });
    
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

  this.setState((prevState,props) => {
      return {
        persons : persons,
        changeCounter : prevState.changeCounter + 1
      };
  });
};

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

  logInHandler = () => {
    this.setState({authenticated : true});
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
    console.log('render');
    let persons = null;

    if(this.state.showPersons){
      persons=<Persons persons={this.state.persons} 
              clicked={this.deletePersonHandler}
              changed={this.changeNameHandler}
              isAuthenticated={this.state.authenticated}/>;
    
    // style.backgroundColor = 'red';
    // style[':hover'] = {
    //   backgroundColor:'salmon',
    //   color:'black'
    // }
    // btnClass.push(classes.Red); 
    }
    
    return (
      // <StyleRoot>
      <WithClass classes={classes.App}>
          <button onClick={() => {this.setState({showCockpit : false});}}>
          Remove Cockpit</button>
          <AuthContext.Provider 
          value={{
            authenticated: this.state.authenticated,
            login: this.logInHandler
          }
          }>
            {
              this.state.showCockpit ? 
              <Cockpit title={this.props.appTitle}
              personsLength={this.state.persons.length}
              clickbtn={this.togglePersonHandler} 
              showPersons={this.state.showPersons}
              logIn={this.logInHandler}/> : null
            }
            {persons}
          </AuthContext.Provider>
      </WithClass>
      // </StyleRoot>
      );

  }
}

// export default Radium(App);
export default App;