import React, { Component } from 'react';
//import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';


//BELOW CODE BASED ON CLASS COMPONENT, STATE IS USED..
class App extends Component {
  
  state = {
    persons : [
      {name : 'Max', age : 28},
      {name : 'Manu', age : 29},
      {name : 'Stephanie', age : 26}
    ],
    otherState : 'Some Value'
  }
  
  switchNameHandler = () => {
    // console.log('Clicked');
    // DON'T Do this to change value    this.state.persons[0].name = 'Harsh';
    this.setState({
      persons : [
       {name : 'Maxmillian', age : 28}, //It will check state and update only those values which are changed
       {name : 'Manu', age : 29},
       {name : 'Stephanie', age : 27}
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React app</h1>
        <p>This is Working.</p>
        <button onClick = {this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies : Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    //Below code is code which is complied into JS Code of above code.
    //return React.createElement('div',{className : 'App'},React.createElement('h1',null,'Does it Work?'));
  }
}

export default App;

















// //BELOW CODE BASED ON FUNCTIONAL COMPONENT, HOOKS ARE USED..

// const app = props => {
  
//   const [personsState, setPersonsState] = useState(
//     {
//       persons : [
//               {name : 'Max', age : 28},
//               {name : 'Manu', age : 29},
//               {name : 'Stephanie', age : 26}
//             ] 
//     });

//   const [otherState, setOtherState] = useState('Some Value');
  
//   console.log(personsState,otherState);

//   const switchNameHandler = () => {
//       setPersonsState({
//         persons : [
//               {name : 'Maxmillian', age : 28}, //It will check state and update only those values which are changed
//               {name : 'Manu', age : 29},
//               {name : 'Stephanie', age : 27}
//       ]
//     });
//   };
  
  
  
//   return(
//         <div className="App">
//           <h1>Hi I'm a React app</h1>
//           <p>This is Working.</p>
//           <button onClick = {switchNameHandler}>Switch name</button>
//           <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//           <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies : Racing</Person>
//           <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
//       </div>
//   );
// };

// export default app;




