// for using state in  functional component usinf hooks 
// import React, { useState } from 'react';
import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

// Using state in Functional component
// const app = props =>{
//   //  Using Destructuring here
//   const [ personState, setPersonState ] = useState({
//     persons : [
//       {name: 'Someone', age: 29},
//       {name: 'Anyone', age: 28},
//       {name: 'No one', age: 27},
//     ]
//   });

//   const [ otherState, setOtherState ] = useState('Some other value');

//   console.log(personState, otherState)

//   const switchNameHandler = () =>{
//     setPersonState({
//       persons : [
//         {name: 'Someone Anybody', age: 29},
//         {name: 'Anyone', age: 29},
//         {name: 'No one', age: 297},
//       ]
//     })
//   }

//   return(
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1 className="App-title">Welcome to React</h1>
//       </header>
//       <p className="App-intro">
//         To get started, edit <code>src/App.js</code> and save to reload.
//       </p>
//       <h2>Hello</h2>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={personState.persons[0].name} age={personState.persons[0].age} />
//       <Person name={personState.persons[1].name} age={personState.persons[1].age} >Hobbies: Racing.</Person>
//       <Person name={personState.persons[2].name} age={personState.persons[2].age} />
//     </div>
//   )
// }

// export default app;

class App extends Component {
  state = {
    person : [
      {name: 'Someone', age: 29},
      {name: 'Anyone', age: 28},
      {name: 'No one', age: 27},
    ]
  }

  switchNameHandler = (newName) =>{
    this.setState({
      person : [
        {name: newName, age: 29},
        {name: 'Anyone', age: 29},
        {name: 'No one', age: 297},
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      person : [
        {name: 'Someonee', age: 29},
        {name: event.target.value , age: 29},
        {name: 'No one', age: 297},
      ]
    })
  }

  render() {
    // scoped styling or inline styling 
    const style = {
      backgroundColor: '#000',
      padding: '10px',
      border: '1px solid #eee',
      cursor: 'pointer',
      color: '#fff',
    }

    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <h2>Hello</h2>
        <button
          style={style}
          onClick={ () => this.switchNameHandler('Maximilian!') }>Switch Name</button>
        <Person 
          name={this.state.person[0].name} 
          age={this.state.person[0].age} />
        <Person 
          name={this.state.person[1].name} 
          age={this.state.person[1].age} 
          click={this.switchNameHandler.bind(this, 'Max!!')} 
          changed={this.nameChangedHandler} >Hobbies: Racing.</Person>
        <Person 
          name={this.state.person[2].name} 
          age={this.state.person[2].age} />
      </div>
    );
  }
}

export default App;
