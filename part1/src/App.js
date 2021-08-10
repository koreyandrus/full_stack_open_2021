import React from 'react';

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}


const App = () => {
  const name = "Amelia"
  const age = 9

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Korey" age={35} />
      <Hello name="Raylan" age={6} />
      <Hello name={name} age={age} />
    </div>
  )
}

export default App;
