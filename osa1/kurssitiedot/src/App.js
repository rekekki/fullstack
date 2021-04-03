import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
      <div>
          <p>{props.content.name} {props.content.exercises}</p>
      </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <div>
          <p></p>
          <Part content={props.content[0]} />
          <Part content={props.content[1]} />
          <Part content={props.content[2]} />
      </div>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total[0].exercises + props.total[1].exercises + props.total[2].exercises} </p>
    </div>
  )
}


/*const App = () => {
  const course = {
      name: 'Half Stack App Development',
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

return (
  <div>
    <Header course={course.name} />
    <Content content={course.parts} />
    <Total total={course.parts} />
  </div>
)
}*/

const App = () => {
  const course = {  
    name: 'Half Stack Application Development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component'
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}
  
export default App