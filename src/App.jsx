import { useState } from 'react'
import logo from "./assets/images/logo.svg"

// Components
import Display from "./components/Display"
import Form from "./components/Form"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
        <img src={logo} alt="Logo" />
        <div className="container">
          <Display />
          <Form />
        </div>
      </div>
    </>
  )
}

export default App
