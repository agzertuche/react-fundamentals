// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, {useEffect, useRef, useState} from 'react'

function UsernameForm({onSubmitUsername}) {
  // const inputRef = useRef(null)

  const [username, setUsername] = useState('')
  // const [error, setError] = useState(null)

  function onUsernameChange(event) {
    const value = event.target.value
    setUsername(value.toLowerCase())
    // const isValid = value === value.toLowerCase()
    // setError(isValid ? null : 'Username must be lower case')
  }

  // 🐨 add a submit event handler here (`handleSubmit`).
  function handleSubmit(event) {
    event.preventDefault()
    // const username = event.target.elements.username.value
    // inputRef.current = username

    onSubmitUsername(username)
  }
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0]
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input by specifying an `id` on
  // the input and a matching value as an `htmlFor` prop on the label.
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={onUsernameChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
