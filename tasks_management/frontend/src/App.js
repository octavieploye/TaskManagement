import React from 'react'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import css from './App.css'
import TaskList from './Components/TaskList'
import CreateTask from './Components/CreateTask'
import TaskEdit from './Components/TaskEdit'
import TaskShow from './Components/TaskShow'
import Nav from './Components/Nav'


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
  <Router>
      <header className='App-header'>
        <Nav/>
      </header>
      <main>
        {/* In a Routes, only the first route that matches is shown. */}
        <Routes>
          {/*
              Each of our routes has two props: a 'path' to match,
              and a 'component' to render when we do.
            */}
          <Route path='/tasks/new' element={<CreateTask/>} />
          <Route path='/tasks/:id/edit' element={<TaskEdit/>} />
          <Route path='/tasks/:id' element={<TaskShow/>} />
          <Route path='/tasks' element={<TaskList/>} />
         
          
        
        </Routes>
      </main>
    </Router>
    </>
  )
}

export default App
 