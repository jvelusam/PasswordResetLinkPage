import { useState } from 'react'
import PasswordResetFrom from './PasswordResetFrom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <PasswordResetFrom></PasswordResetFrom>

        </div>
    </>
  )
}

export default App
