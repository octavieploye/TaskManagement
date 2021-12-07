import React from 'react'
import axios from 'axios'
import Task from './Components/Task'
import css from './App.css'

function App() {
  React.useEffect(() => {
    const getData = async () => {
      const res = await axios.get('/api/tasks/')
      console.log(res.data);
    }
    getData()
  })
  return <h1> MyDebuggingJourney</h1>
}

export default App
