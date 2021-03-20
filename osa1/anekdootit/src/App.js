import React, { useState } from 'react'

const Title = ({ text }) => {
  return (
    <h1>
      {text}
    </h1>
  )
}

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>
}

const AnecdoteOfTheDay = ({
  anecdote,
  votes,
  handleVote,
  handleNextAnecdote
}) => {
  return (
    <>
    <Title text='Anecdote of the day' />
    <div>{anecdote}</div>
    <div>has {votes} votes</div>
    <button onClick={handleVote}>Vote</button>
    <button onClick={handleNextAnecdote}>Next anecdote</button>
    </>
  )
}

const AnecdoteWithMostVotes = ({ anecdote, votes }) => {
  return (
    <>
      <Title text='Anecdote with the most votes' />
      <div>{anecdote}</div>
      <div>has {votes} votes</div>
    </>
  )
}

const App = ({ anecdotes }) => {
  const initVotes = anecdotes.map(elem => 0)
  const [selected, setSelected] = useState(0)
  const [mostVotes, setMostVotes] = useState(0)
  const [votes, setVotes] = useState(initVotes)

  const handleNextAnecdote = () => {
    const nextNum = Math.floor(Math.random() * anecdotes.length)
    setSelected(nextNum)
  }

  const handleVote = () => {
    const newVotes = [...votes]
    newVotes[selected]++
    if (newVotes[selected] > newVotes[mostVotes]) {
      setMostVotes(selected)
    }
    setVotes(newVotes)
  }
  
  return (
    <>
      <AnecdoteOfTheDay
        anecdote={anecdotes[selected]}
        votes={votes[selected]}
        handleVote={handleVote}
        handleNextAnecdote={handleNextAnecdote}
      />
      <AnecdoteWithMostVotes
        anecdote={anecdotes[mostVotes]}
        votes={votes[mostVotes]}
      />
    </>
  )
}

export default App