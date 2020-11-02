import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Header = (props) => {
    return (
      <h1>{props.course}</h1>
    )
  }
  const Content = () => {
    return (
      <div>
        <Part part = {part1} exercise={exercises1}/>
        <Part part = {part2} exercise={exercises2}/>
        <Part part = {part3} exercise={exercises3}/>
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
      <Header course = {course}/>
      <Content/>
      <Total ex1 = {exercises1} ex2={exercises2} ex3={exercises3}/>      
    </div>
  )

}

ReactDOM.render(<App />, document.getElementById('root'))