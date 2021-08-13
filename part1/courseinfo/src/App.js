import React from 'react';

const Header = ({course}) => {
  return (
    <h1>{course.title}</h1>
  )
}

const Part = ({part, exercises}) => {
  return (
      <p>{part}  {exercises}</p>
  )
}

const Content = ({course}) => {
  return (
      <>
        <Part part={course.part1} exercises={course.exercises1} />
        <Part part={course.part2} exercises={course.exercises2} />
        <Part part={course.part3} exercises={course.exercises3} /> 
      </>
  )
}

const Total = ({course}) => {
  return (
    <>
      <p>Number of exercises: { course.exercises1 + course.exercises2 + course.exercises3 }</p>
    </>
  )
}


const App = () => {
  const course = {
    title: 'Half Stack application development',
    part1: "Fundamentals of React",
    exercises1: 10,
    part2: 'Using props to pass data',
    exercises2: 7,
    part3: 'State of a component',
    exercises3: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}



export default App