import React, { Component } from "react";
import "./App.css";
import { CardList } from "./Components/card-list/cardList";
import SearchBox from "./Components/searchBox/SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className="app">
        <h1> Monsters Roledex</h1>
        <div className="center">
          <SearchBox
            placeholder="search monsters"
            handleChange={this.handleChange}
          />
        </div>

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
