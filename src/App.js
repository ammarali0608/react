// import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      {/* <SearchBox
          onChangeHandler={stateChange}
          placeholder="Search Monster"
          className="search-box"
        />
        <CardList monsters={filteredMonsters} /> */}
    </div>
  );
};
// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       );
//   }
//   // function optimization
//   stateChange = (event) => {
//     const searchString = event.target.value.toLowerCase();

//     this.setState(() => {
//       return { searchField: searchString };
//     });
//   };

//   render() {
//     // values destruction
//     const { monsters, searchField } = this.state;
//     const { stateChange } = this;
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     });
//     return (

//     );
//   }
// }

export default App;
