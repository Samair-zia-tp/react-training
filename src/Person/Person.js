import React from 'react';
import styled from 'styled-components';
// import Radium from 'radium';
// import './Person.css'

const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    text-align: center;
    padding: 16px;
    '@media (min-width: 500px)': {
      width: '450px'
    }
  `;

// functional component
const person = (props) => {
  const style = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  };
  return (
    // <div className="Person" style={style}>
    <StyledDiv>
      <p onClick={props.click} >I'm {props.name} and my age is {props.age}.</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </StyledDiv>
    // </div>
  )
}

export default person;
// export default Radium(person);