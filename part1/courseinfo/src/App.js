import React from 'react';

const Header = ({course}) => {
  return (
    <h1>{course.title}</h1>
  )
}

const Content = ({course}) => {
  return (
      <>
        <p>
          {course.part1}  {course.exercise1}
        </p>
        <p>
          {course.part2}  {course.exercise2}
        </p>
        <p>
          {course.part3}  {course.exercise3}
        </p>
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