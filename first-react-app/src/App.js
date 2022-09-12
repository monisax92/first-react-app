import {Component} from 'react';

// import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

class App extends Component{

  constructor(){
    super();

    this.state = {
      books: []//initial (empty) state
    };
  };

  componentDidMount(){
    // fetch('https://jsonplaceholder.typicode.com/albums')
    // .then((resp) => resp.json())
    // .then((albums) => {this.setState(() => this.state = {books: albums})});
    
    // const data = JSON.parse(require("./books-data.json"));
    // this.state = {books: data};
    // .then((resp) => resp.json())
    // .then((books) => {this.setState(() => this.state = {books: books})});

let data = $.getJSON("./books.json", (data) => console.log(data));
console.log(data);
    // this.setState(() => this.state = {books: $.getJSON('books.json', (data) => console.log(data))});
  };

  render(){
    return (
    <div className="App">
      <input 
        className='search-box' 
        type='search' 
        placeholder='Search the name...' 
        onChange={(e) => {console.log("changed");}}
      />

      {/* {this.state.books.map((book) => {
        return <h1 key={book.ibsn}>{book.title}</h1>;
      })} */}
    </div>
    );
  };
}
// function App() {
  
// }

export default App;
