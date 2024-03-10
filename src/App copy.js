import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor(){

    super();

    this.state = {
      name: {firstName: 'Panda', lastname:'Phyo'},
      company: 'BIT'
    }
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi I am {this.state.name.firstName} {this.state.name.lastname} , I work at {this.state.company}
          </p>
          <button onClick={()=>this.setState(()=>{
              return{
                name: {firstName: 'Mike' ,  lastname: 'Phyo'},
              }

          } ,() => {
              console.log(this.state)
          })
            
        }>
              Change Name
          </button>
          {/* <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>
      </div>
    );
    
  }
  
}

export default App;
