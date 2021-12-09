import React, { Component } from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Task from './Task'
import TaskShow from './TaskShow'
import TaskEdit from './TaskEdit'
import { fetchTasks } from '../helpers/api'



// const TaskList = () => {
//     const [tasks, setTasks] =useState([])

//      useEffect(() => {
//         async function getTasksFromApi() {
//             const response = await axios.get('http://localhost:8000/api/tasks/')
//             console.log('got tasks', response.data)
//             setTasks(response.data)
//         }
//         getTasksFromApi()
//     },[])

    const TaskList = () => {
        const [tasks, setTasks] = useState([])
      
        useEffect(() => {
          fetchTasks().then((res) => setTasks(res))
        }, [])
    return (
        <section className='cards'>
            <ul>

{tasks.map((task) => (
    <li key={task.id}>
    <Task {...task} />
    </li>
    
    ))}
    </ul>

        </section>
    )
}
export default TaskList