import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [errorMessage, setErrorMessage] = useState('')
  const checkStrongPassword = (password)=>{
    if(password.length>8)
    {setErrorMessage('Is Strong Password') }
    else
    {
      setErrorMessage('Is Not Strong Password') 
    }
  }

  return (
    <>
      <div>
        <h2> Checking Password Strength in ReactJS</h2>
        <div className='input-password'>
          <h3>Enter Password</h3>
          <input onChange={(e)=>checkStrongPassword(e.target.value)}></input>
        </div>
        {errorMessage === '' ? null : 
                    <span style={{ 
                        fontWeight: 'bold', 
                        color: 'red', 
                    }}>{errorMessage}</span>}
      </div>
    </>
  )
}

export default App
