import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Aatu Aapeli' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const onFormChange = (event) => {
    event.preventDefault()
    const nameObject = {
      content: newName
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
  }
  const onNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={onFormChange}>
        <div>
          name: <input 
          value={newName}
          onChange={onNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      ...
    </div>
  )

}

export default App