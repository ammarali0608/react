import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        { id: 1, name: "Kohli" },
        { id: 2, name: "Shaheen" },
        { id: 3, name: "Butler" },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {/* <h1>{this.state.monster1.name}</h1>
        <h1>{this.state.monster2.name}</h1>
        <h1>{this.state.monster3.name}</h1>

        What if we have million records 
        
        with array mapping
        */}

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

/*
  21 - 31
  <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            this is {this.state.name} {this.state.cast}
          </p>
          <button
            onClick={() => {
              this.setState(
                () => {
                  return { name: "Ameer Hamza" };
                },
                () => {
                  console.log(this.state.name);
                }
              );
            }}
          >
            Change Name
          </button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

    
*/
