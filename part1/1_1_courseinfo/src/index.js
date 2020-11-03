import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const Header = (props) => {
    return (
      <h1>{props.c}</h1>
    )
  }
  const Content = (props) => {
    return (
      <div>
        <Part part = {props.p1.name} exercise={props.p1.exercises}/>
        <Part part = {props.p2.name} exercise={props.p2.exercises}/>
        <Part part = {props.p3.name} exercise={props.p3.exercises}/>
      </div>
    )
  }
  const Part = (props) => {
    return (
      <p>{props.part} {props.exercise}</p>
    )
  }
  const Total = (props) => {
    return (
      <p>Number of exercises {props.ex1 + props.ex2 + props.ex3}</p>
    )
  }

  return (
    <div>
      <Header c = {course}/>
      <Content p1 = {part1} p2 = {part2} p3 = {part3}/>
      <Total ex1 = {part1.exercises} ex2={part2.exercises} ex3={part3.exercises}/>      
    </div>
  )

}

ReactDOM.render(<App />, document.getElementById('root'))