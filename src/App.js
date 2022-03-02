import "./App.css";
import React, { Component } from "react";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stepp", age: 26 },
    ],
    otherState: "some other state",
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 32 },
        { name: "Manu", age: 29 },
        { name: "Stephamoe", age: 27 },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Max", age: 32 },
        { name: event.target.value, age: 29 },
        { name: "Stephamoe", age: 27 },
      ],
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      marginBottom: "10px",
      cursor: "pointer",
    };
    return (
      <div className="App">
        <h1>Hi, I'm a React App!!!</h1>
        <button
          style={style}
          onClick={() => this.switchNameHandler("Maximilian")}
        >
          Switch name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Maxxxx")}
          changed={this.nameChangedHandler}
        >
          My hobbies: Sports
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
