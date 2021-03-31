// for using state in  functional component usinf hooks 
// import React, { useState } from 'react';
import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Radium, {StyleRoot} from 'radium';
import styled from 'styled-components'
import Person from './Person/Person';

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



const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  padding: 10px;
  border: 1px solid #eee;
  cursor: pointer;
  color: #fff;
  border-radius: 4px;
  outline: none;

  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }
`;

class App extends Component {
  state = {
    person : [
      {id: 'unique_1', name: 'Someone', age: 29},
      {id: 'unique_2', name: 'Anyone', age: 28},
      {id: 'unique_3', name: 'No one', age: 27},
    ],
    showPersons: false
  }

  // switchNameHandler = (newName) =>{
  //   this.setState({
  //     person : [
  //       {name: newName, age: 29},
  //       {name: 'Anyone', age: 29},
  //       {name: 'No one', age: 297},
  //     ]
  //   })
  // }

  nameChangedHandler = (event, id) => {
    //findIndex takes function as an input just as map did and just as map it will execute at every element in the array
    const personIndex = this.state.person.findIndex(p =>{
      //at every element it will check element's id with the id we provided in argument
      return p.id === id; //it will return true or false
    })

    //creating a copy of original array so that it prevents mutation
    const newPerson = {
      ...this.state.person[personIndex]
    }

    newPerson.name = event.target.value;
    const person = [...this.state.person];
    person[personIndex] = newPerson;

    this.setState({ person : person })
  }

  togglePersons = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  deletePersonsHandler = (personIndex) =>{
    // const person = this.state.person.slice();
    const person = [...this.state.person]
    // splice use to add/remove element from the array and change the original array
    // Good practice is to make copy of an array and change the state of that array in immutable way for that ether use slice() method or spread operater
    person.splice(personIndex, 1);
    this.setState({
      person: person
    })
  }

  render() {
    // scoped styling or inline styling 
    const style = {
      backgroundColor: 'green',
      padding: '10px',
      border: '1px solid #eee',
      cursor: 'pointer',
      color: '#fff',
      borderRadius: '4px',
      outline: 'none',
      ':hover':{
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    //second way is to do condional rendering in js before returning but inside render method
    let showAllPersons = null;

    if(this.state.showPersons){
      showAllPersons = (
        <div>
          {/* there's nothing like v-for or ngFor for looping (for loop) as it is Vanilla javascript in the end so we're gonna loop using JS */}
          {
            this.state.person.map((singlePerson, index) =>{
              return <Person 
                click={() => this.deletePersonsHandler(index)}
                name={singlePerson.name}
                age={singlePerson.age}
                key={singlePerson.id}
                changed={(event) => this.nameChangedHandler(event, singlePerson.id)}
              />
            })
          }
          {/* <Person 
            name={this.state.person[0].name} 
            age={this.state.person[0].age} />
          <Person 
            name={this.state.person[1].name} 
            age={this.state.person[1].age} 
            click={this.switchNameHandler.bind(this, 'Max!!')} 
            changed={this.nameChangedHandler} >Hobbies: Racing.</Person>
          <Person 
            name={this.state.person[2].name} 
            age={this.state.person[2].age} /> */}
        </div>
      )
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    // Adding classes dynamically to element
    // It will render as "red bold" in the className
    //let classes = ['red', 'bold'].join(' '); 
    
    let classes = [];

    if (this.state.person.length <=2){
      classes.push('red'); // classes = ['red']
    }
    if (this.state.person.length <=1){
      classes.push('bold'); // classes = ['red', 'bold']
    }

    return (
        <div className="App">
          <h2>Hello</h2>
          <p className={classes.join(' ')}>This is really working!</p>
          {/* <button
            style={style}
            onClick={ () => this.switchNameHandler('Maximilian!') }>Switch Name</button> */}
              <StyledButton alt={this.state.showPersons}
                onClick={this.togglePersons}>Toggle Persons</StyledButton>
            {/* 
              One way of rendering 
              Conditional rendering in React */}
            {/* { this.state.showPersons ? 
              <div>
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
              </div> : null
            } */}
            {/* first way end */}

            {/* second way */}
            {showAllPersons}
        </div>
    );
  }
}

export default App;
