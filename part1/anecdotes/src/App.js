import React, { useState } from "react";

const Statistics = ({ votes }) => {
  return (
    <p>has {votes} votes</p>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]


  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0));
  // let numVotes = Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0);;
  
  const handleClick = () => {
    return (
      setSelected(Math.floor(Math.random() * anecdotes.length))
    )
  };

  const handleVote = () => {
    const copy = { ...votes }

    copy[selected] += 1;
    setVotes(copy);
  }

  return (
    <>
      <h5>{anecdotes[selected]}</h5>
      <Statistics votes={votes[selected]} />
      <button onClick={handleVote}>vote</button>
      <button onClick={handleClick}>next anecdote</button>
    </>
  );
}

export default App;
