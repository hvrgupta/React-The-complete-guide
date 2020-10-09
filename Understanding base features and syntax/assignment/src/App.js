import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'

class App extends Component {

  state = {
    username : 'Max'
  }

  userNameChangeHandler = (event) => {
    this.setState({
      username : event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput  userName={this.state.username} changed={this.userNameChangeHandler}/>
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
      </div>
    );
  }
}

export default App;
