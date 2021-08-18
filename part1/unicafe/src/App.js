import React, { useState } from 'react';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Button = (props) => {
    const { handleClick, text} = props
    return (
      <button onClick={handleClick}>
        {text}
      </button>
    )
  }

  const Feedback = () => {
    const all = good + neutral + bad;
    const avg = all / 3;
    
    return (
      <div>
        good {good}<br/>
        neutral {neutral}<br/>
        bad {bad}<br/>
        all {all}<br/>
        average {avg}<br/>
        positive {(good / (good + neutral + bad)) * 100}<br/>
      </div>
    )
  }


  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text='Good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='Neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='Bad' />
      <h1>statistics</h1>
      <Feedback />
    </div>
  )
}

export default App;
