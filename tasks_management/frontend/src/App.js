import React from 'react'
import axios from 'axios'
import TaskList from './Components/TaskList'
import css from './App.css'

function App() {
  React.useEffect(() => {
    const getData = async () => {
      const res = await axios.get('/api/tasks/')
      console.log(res.data);
    }
    getData()
  })
  return (
    <>
  <h1> MyDebuggingJourney</h1>

  <div className='App'>
      <header className='App-header'>
        <TaskList/>
      </header>
    </div>
    </>
  )
}

export default App
 