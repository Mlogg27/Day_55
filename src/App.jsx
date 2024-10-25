import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const response = async ()=>{
    const jobs = await axios.get("http://localhost:3000/jobs");
    return jobs;
  }
  console.log(response());

  return (
    <>
      <h2 className="mt-[50px]">Hehe</h2>
    </>
  )
}

export default App
