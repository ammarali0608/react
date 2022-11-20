import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");

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
  // function optimization
  stateChange = (event) => {
    const searchString = event.target.value.toLowerCase();

    this.setState(() => {
      return { searchField: searchString };
    });
  };

  render() {
    // values destruction
    const { monsters, searchField } = this.state;
    const { stateChange } = this;
    const filteredMonsters = monsters.filter((monster) => {
      console.log("render");
      return monster.name.toLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <input
          className="search"
          type="search"
          placeholder="search monster"
          onChange={stateChange}
        />
        {filteredMonsters.map((monster) => {
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
