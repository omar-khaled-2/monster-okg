import React, {Component} from 'react';
import {CardList} from './components/card-list/card.list.component'
import {SearchBox} from './components/searchBox/search-box'
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: [],
      Search:''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((jsonFound)=> jsonFound.json())
      .then((body) => this.setState({monsters:body}));
  }
  render() {
    const {monsters , Search} = this.state ;
    const filterMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(Search.toLowerCase()));
    return(
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox change={search => this.setState({ Search:search.target.value })} />
        <CardList>
          {filterMonsters}
        </CardList>
      </div>
    )
  }
}

export default App;
