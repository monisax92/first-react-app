import { Component } from "react";

// import logo from './logo.svg';
import "./App.css";
// import $ from 'jquery';

class App extends Component {
  constructor() {
    super();

    this.state = {
      people: [], //initial (empty) state
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(resp => resp.json())
      .then(users => {
        this.setState(() => (this.state = { people: users }));
      });
  }

  render() {
    const selectedPeople = this.state.people.filter(person => {
      return person.name.toLowerCase().includes(this.state.searchField);
    });
    console.log(this.state);

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search the name..."
          onChange={e => {
            this.setState(() => {
              return {
                searchField: e.target.value.toLowerCase()
              };
            });
          }}
        />

        {selectedPeople.map(person => {
          return (
            <p>
              <h1 key={person.id}>{person.name}</h1>
              {/* <img src="https://thispersondoesnotexist.com/image" /> */}
            </p>
          );
        })}
      </div>
    );
  }
}
// function App() {

// }

export default App;
