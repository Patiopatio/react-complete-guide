import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 25 },
      { name: "Steve", age: 30 }
    ]
  };

  switchNameHandler = NewName => {
    this.setState({
      persons: [
        { name: NewName, age: 28 },
        { name: "Manu", age: 25 },
        { name: "Steve", age: 40 }
      ]
    });
  };

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: "Tom", age: 28 },
        { name: event.target.value, age: 25 },
        { name: "Steve", age: 30 }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      margin: "20px"
    };
    return (
      <div className="App">
        <h1> That's a cool app!</h1>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangeHandler}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={this.switchNameHandler.bind(this, "Maxi")}
        >
          My hobby
        </Person>
        <button style={style} onClick={() => this.switchNameHandler()}>
          Switch Name
        </button>
      </div>
    );
  }
}

export default App;
