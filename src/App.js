import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor(){

    super();

    this.state = {
      monsters:[],
      searchField: ''
    }
    console.log(1)
  }
 
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((resposne)=>resposne.json())
    .then((users)=> this.setState(()=>{return { monsters:users }},()=>{console.log(this.state)}))
    console.log(3)
  }

  onSearchchange = (event)=>{
    console.log(event.target.value);
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(()=>{
      return { searchField };
    })
  }

  render(){

    const { monsters,searchField} = this.state;
    const { onSearchchange } = this;
    const filteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField);
    })

    return (
      <div className="App">
        {/* <input className='search-box' type='search' placeholder='Search Monster' 
          onChange={onSearchchange}/> */}
        {/* {
            filteredMonsters.map((monster)=>{
                return <div key={monster.id}><h1>{monster.name}</h1></div>
            })
        } */}
        <SearchBox className= {'monsters-search-box'} onChangeHandler={ onSearchchange } placeholder = { 'Search Monster '} />
        <CardList  monsters={filteredMonsters} anything={['a','z']} />
      </div>
    );
    
  }
  
}

export default App;
