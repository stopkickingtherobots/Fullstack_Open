import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  
  const course = 'Half Stack application development'
  const parts = [
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

  const Header = (props) => {
    return (
      <h1>{props.c}</h1>
    )
  }
  const Content = (props) => {
    return (
      <div>
        <Part part = {props.p[0].name} exercise={props.p[0].exercises}/>
        <Part part = {props.p[1].name} exercise={props.p[1].exercises}/>
        <Part part = {props.p[2].name} exercise={props.p[2].exercises}/>
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
      <p>Number of exercises {props.p[0].exercises + props.p[1].exercises + props.p[2].exercises}</p>
    )
  }

  return (
    <div>
      <Header c = {course}/>
      <Content p = {parts}/>
      <Total p = {parts}/>      
    </div>
  )

}

ReactDOM.render(<App />, document.getElementById('root'))