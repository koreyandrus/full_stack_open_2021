import React from "react";
import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad}) => {
    const all = good + neutral + bad
    const avg = all / 3;
  
    if(good || bad || neutral) {
      return (
        <div>
            <StatisticLine text='good' value={good} />
            <StatisticLine text='neutral' value={neutral} />
            <StatisticLine text='bad' value={bad} />
            <StatisticLine text='all' value={all} />
            <StatisticLine text='average' value={avg} />
            <StatisticLine text='positive' value={(good / (good + neutral + bad)) * 100} />
        </div>
      )
    }
    return (
      <div>
        No feedback given
      </div>
    )
  }

  export default Statistics;