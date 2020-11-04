import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const Header = (props) => {
    return (
      <h1>{props.c.name}</h1>
    )
  }
  const Content = (props) => {
    return (
      <div>
        <Part part = {props.c.parts[0].name} exercise={props.c.parts[0].exercises}/>
        <Part part = {props.c.parts[1].name} exercise={props.c.parts[1].exercises}/>
        <Part part = {props.c.parts[2].name} exercise={props.c.parts[2].exercises}/>
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
      <p>Number of exercises {props.c.parts[0].exercises + props.c.parts[1].exercises + props.c.parts[2].exercises}</p>
    )
  }

  return (
    <div>
      <Header c = {course}/>
      <Content c = {course}/>
      <Total c = {course}/>      
    </div>
  )

}

ReactDOM.render(<App />, document.getElementById('root'))