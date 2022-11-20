import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
    console.log("constructor");
  }
  // When do I get the list
  // How do I get the list
  // where to put the list

  componentDidMount() {
    console.log("componentDidMount");

    // code will be executed whenever the component will mount
    // it only happens once
    // fetch for getting data from json api
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log("Monsters has been updated");
          }
        )
      );
  }

  render() {
    console.log("render");

    return (
      <div className="App">
        <input
          className="search"
          type="search"
          placeholder="search monster"
          onChange={() => {}}
        />
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
//first the constructor will be called
// then the render function
// last didcomponentmount will be
// after changing state the ui will be rerendered
