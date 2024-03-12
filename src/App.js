import { Component, useEffect } from 'react';
import { useState } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import logo from './logo.svg';
import './App.css';


const App = () =>{

  const [searchField, setSearchField] = useState('');
  const [title, setTitle] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);


  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((resposne)=>resposne.json())
    .then((users)=> setMonsters(users));
  },[]);
  
  useEffect(()=>{
    const newfilteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterMonsters(newfilteredMonsters);
  },[monsters,searchField]);
    

  const onSearchchange = (event)=>{
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
  }

    const onTitlechange = (event)=>{
        const titlechangestring = event.target.value.toLocaleLowerCase();
        setTitle(titlechangestring);
  }

  return(
    <div className="App">
    <h1 className="app-title"> {title} </h1>
    <SearchBox className= {'monsters-search-box'} 
      onChangeHandler={ onSearchchange } 
      placeholder = { 'Search Monster '} />
      <br/>

    <SearchBox className= {'title-search-box'} 
      onChangeHandler={ onTitlechange } 
      placeholder = { 'Search Title '} />

    <CardList  monsters={filteredMonsters} anything={['a','z']} />

  </div>
  );
};


// class App extends Component {
  
//   constructor(){

//     super();

//     this.state = {
//       monsters:[],
//       searchField: ''
//     }
//     console.log(1)
//   }
 
//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((resposne)=>resposne.json())
//     .then((users)=> this.setState(()=>{return { monsters:users }},()=>{console.log(this.state)}))
//     console.log(3)
//   }

//   onSearchchange = (event)=>{
//     console.log(event.target.value);
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(()=>{
//       return { searchField };
//     })
//   }

//   render(){

//     const { monsters,searchField} = this.state;
//     const { onSearchchange } = this;
//     const filteredMonsters = monsters.filter((monster)=>{
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     })

//     return (
//       <div className="App">
//         <h1 className="app-title"> Monsters Rolodex </h1>
//         <SearchBox className= {'monsters-search-box'} onChangeHandler={ onSearchchange } placeholder = { 'Search Monster '} />
//         <CardList  monsters={filteredMonsters} anything={['a','z']} />
//       </div>
//     );
    
//   }
  
// }

export default App;
