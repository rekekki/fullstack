import React, { useState } from 'react'

const Statistics = (props) => {
  if (props.sum === 0 && props.title === true) {
    return (
      <tr>
        <td>No feedback given</td>
      </tr>
    )
  }

  if (props.sum === 0) {
    return (
      <tr>
        <td></td>
      </tr>
    )
  }

  return (
    <tr>
      <td>{props.name} {props.content}</td>
    </tr>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good+1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral+1)
  }

  const handleBadClick = () => {
    setBad(bad+1)
  }

  return (
    <div>
      <div>
        <h1>Give feedback</h1>
        <Button handleClick={handleGoodClick} text='Good' />
        <Button handleClick={handleNeutralClick} text='Neutral' />
        <Button handleClick={handleBadClick} text='Bad' />
        <h1>Statistics</h1>
        <table>
          <body>
            <Statistics title={true} sum={good+bad+neutral} />
            <Statistics name='Good' sum={good+bad+neutral} content={good} />
            <Statistics name='Neutral' sum={good+bad+neutral} content={neutral} />
            <Statistics name='Bad' sum={good+bad+neutral} content={bad} />
            <Statistics name='Average' sum={good+bad+neutral} content={(good-bad)/(good+bad+neutral)} />
            <Statistics name='Positive' sum={good+bad+neutral} content={(good)/(bad+good+neutral)*100} />
          </body>
        </table>
      </div>
    </div>
  )
}

export default App