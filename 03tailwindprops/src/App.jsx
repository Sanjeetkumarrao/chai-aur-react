import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "sanjeet",
    age:21
  }
  let newArr =[1,2,3]
  return (
    <>
      <h1 className='bg-green-400 rounded-xl text-black p-4'>Tailwind Test</h1>
      <Card username="Chai Aur Code" btnText="dzfgv"/>
      <Card username="Sanjeet kumar rao" btnText="mknfjdtybhtscdv"/>
    </>
  )
}

export default App
