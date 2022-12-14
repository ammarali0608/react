// import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState(""); // [set,value]
  const [title, setTitle] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  console.log("rendered");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const stateChange = (event) => {
    const searchString = event.target.value.toLowerCase();
    setSearchField(searchString); 
  };

  const titleChange = (event) => {
    const searchString = event.target.value.toLowerCase();
    setTitle(searchString);
  };

  return (
    <div className="App">
      <h1 className="app-title">{title} </h1>
      <SearchBox
        onChangeHandler={stateChange}
        placeholder="Search Monster"
        className="search-box"
      />
      <br />
      <SearchBox
        onChangeHandler={titleChange}
        placeholder="Set Title"
        className="title-search-box"
      />
      <CardList monsters={filteredMonsters} />
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
//    // function optimization

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
