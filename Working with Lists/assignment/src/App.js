import React, { Component} from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  
  state = {
    userInput : ''
  }

  inputChangeHandler = (event) => {
    this.setState( {userInput : event.target.value} );
  }
  
  deleteCharHandler = (index) => {
    const userIn = this.state.userInput.split('');
    userIn.splice(index,1);
    const updatedText = userIn.join('');
    this.setState({userInput : updatedText}); 
  }

  render() {
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char character={ch} key={index} click={() =>  this.deleteCharHandler(index)}/>
    });

    return (
      <div className="App">
        <input type = "text" onChange={this.inputChangeHandler} value={this.state.userInput}></input>
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
