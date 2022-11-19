import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "Ammar Ali",
      cast: "Noohani",
    };
  }

  render() {
    return (
      <div className="App">
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
        s
      </div>
    );
  }
}

export default App;
